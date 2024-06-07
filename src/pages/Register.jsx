import React from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../api/api";

function Register() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      username: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("password", data.password);

    if (data.avatar && data.avatar.length > 0) {
      formData.append("avatar", data.avatar[0]);
    }
    if (data.coverImage && data.coverImage.length > 0) {
      for (let i = 0; i < data.coverImage.length; i++) {
        formData.append("coverImage", data.coverImage[i]);
      }
    }

    console.log(Array.from(formData));
    try {
      const registerData = await registerUser(formData);
      console.log(registerData);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-80"
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            {...register("username")}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            {...register("fullName")}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="file"
            placeholder="Avatar"
            {...register("avatar")}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="file"
            multiple
            placeholder="Cover Image"
            {...register("coverImage")}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full px-3 py-2 bg-blue-500 text-white rounded"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
