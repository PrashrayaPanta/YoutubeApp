import React from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../api/api";

function Login() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const loggedInUser = await loginUser(data);
      console.log(loggedInUser);
      if (loggedInUser) {
        localStorage.setItem("accessToken", loggedInUser.data.data.accessToken);
        localStorage.setItem(
          "refreshToken",
          loggedInUser.data.data.refreshToken
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-12 rounded-lg shadow-lg w-full max-w-2xl"
      >
        <div className="mb-6">
          <input
            placeholder="Email"
            {...register("email")}
            className="w-full px-5 py-4 border rounded-lg"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full px-5 py-4 border rounded-lg"
          />
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full px-5 py-4 bg-blue-500 text-white rounded-lg"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
