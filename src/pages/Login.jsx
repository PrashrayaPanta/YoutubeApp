import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../api/api";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [msg, setMsg] = useState("");

  const userLoginSchema = z.object({
    email: z.string().email("Invalid Email"),
    password: z.string().min(8, "at least 8 charcter required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(userLoginSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const loggedInUser = await loginUser(data);
      console.log(loggedInUser);
      setMsg(loggedInUser.data.message);
      if (loggedInUser) {
        localStorage.setItem(
          "userInfo",
          JSON.stringify(loggedInUser.data.data)
        );
        // localStorage.setItem("refreshToken", loggedInUser.data.data);
        dispatch(login({ userData: loggedInUser.data.data }));
        navigate("/profile");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-full max-w-md mx-4 sm:mx-6 md:mx-8 lg:mx-10 mr-60"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <p className="text-green-500">{msg}</p>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded"
        />
        {errors.email?.message && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded"
        />
        {errors.password?.message && (
          <p className="text-red-500">{errors.password?.message}</p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
        <div className="justify-center text-center mt-2">
          <span className="opacity-50">If you don't have an account, </span>
          <Link to="/register">
            <span className="text-blue-900">Register</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
