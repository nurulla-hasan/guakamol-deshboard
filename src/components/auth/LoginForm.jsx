"use client";

import { Suspense } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import toast from "react-hot-toast";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { login } from "@/redux/features/authSlice";
import Image from "next/image";

const LoginFormContent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const user = {
      ...data,
      name: "Your Name",
    };
    dispatch(login(user));
    toast.success("Login Success!");
    router.push(redirect);
  };

  return (
    <div className="flex items-center justify-between min-h-screen text-white">
      <div className="flex justify-center items-center flex-1">
        <div className="p-14 rounded-2xl w-full max-w-md">
          <h1 className="text-2xl font-medium text-center text-[#333333] mb-4">Login to Account</h1>
          <p className="text-center text-[#333333] mb-6 text-sm">Please enter your email and password to continue</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8">
              <label htmlFor="email" className="block text-xs font-medium text-[#333333] mb-1">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className={`w-full px-3 py-2 border  text-[#5C5C5C] text-xs bg-white rounded-sm ${errors.email ? "border-red-500" : "border-[#1F3D2C]"
                  } focus:outline-none cursor-pointer`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-xs font-medium text-[#333333] mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className={`w-full px-3 py-2 border text-[#5C5C5C] text-xs bg-white rounded-sm ${errors.password ? "border-red-500" : "border-[#1F3D2C]"
                    } focus:outline-none cursor-pointer`}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <PiEyeLight className="h-4 w-4 text-[#1F3D2C]" />
                  ) : (
                    <PiEyeSlash className="h-4 w-4 text-[#1F3D2C]" />
                  )}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
            </div>

            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberPassword}
                  onChange={() => setRememberPassword(!rememberPassword)}
                  className="h-3 w-3 text-[#1F3D2C] accent-[#1F3D2C] cursor-pointer"
                />
                <label htmlFor="remember" className="ml-2 text-xs text-[#333333]">
                  Remember Password
                </label>
              </div>
              <Link href="/auth/forgot-password" className="text-xs text-[#333333] hover:underline cursor-pointer">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1F3D2C] text-white py-2 text-xs px-4 hover:bg-[#1f3d2cdc] transition duration-200 cursor-pointer rounded-sm"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/images/auth-image.png"
          alt=""
          width={500}
          height={500}
          className="h-screen w-full"
        />
      </div>
    </div>
  );
};

const LoginForm = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginFormContent />
    </Suspense>
  );
};

export default LoginForm;
