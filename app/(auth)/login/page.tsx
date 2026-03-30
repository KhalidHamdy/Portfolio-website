"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Heading from "@/components/typography/heading";
import Description from "@/components/typography/description";
import { IconEyeFilled, IconEyeOff, IconLockFilled, IconMailFilled } from "@tabler/icons-react";
import { useForm } from "react-hook-form";

type LoginFormInputs = {
  email: string;
  password: string;
};


export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (data: LoginFormInputs) => {
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      // Redirect to admin dashboard after successful login
      router.push("/admin");
    } catch (err: unknown) {
      if (err instanceof Error) {
        const code = (err as { code?: string }).code;
        if (
          code === "auth/user-not-found" ||
          code === "auth/wrong-password" ||
          code === "auth/invalid-credential"
        ) {
          setError("Invalid email or password. Please try again.");
        } else if (code === "auth/too-many-requests") {
          setError("Too many failed attempts. Please try again later.");
        } else if (code === "auth/invalid-email") {
          setError("Invalid email format.");
        } else {
          setError("Something went wrong. Please try again.");
        }
      }
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  }

  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col mx-auto w-fit gap-4 p-4 rounded-xl border-2 border-white text-white">
        <div className="size-24 self-center">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 4L36 13V27L20 36L4 27V13L20 4Z" fill="url(#grad1)" />
            <path
              d="M20 12L28 16.5V25.5L20 30L12 25.5V16.5L20 12Z"
              fill="#171717"
            />
            <defs>
              <linearGradient
                id="grad1"
                x1="4"
                y1="4"
                x2="36"
                y2="36"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ffb96d" />
                <stop offset="1" stopColor="#ff6b6b" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Heading size="md" className="self-center">
          Welcome back
        </Heading>
        <Description size="md" className="self-center">
          log in to access the admin dashboard
        </Description>
        
        {error && (
          <div className="bg-red-500/20 border-2 border-red-500 text-red-200 rounded-lg p-3 flex items-start gap-2">
            <svg className="size-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email-input">Email address</label>
              <div className="flex items-center gap-2 bg-gray-300/30 border-2 border-gray-300/30 rounded-lg p-2 min-w-96">
                <IconMailFilled className="size-4 opacity-50" />
                <input {...register("email", { required: "Email is required" })} id="email-input" className="w-full outline-none" type="email" placeholder="you@example.com" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password-input">Password</label>
              <div className="flex items-center gap-2 bg-gray-300/30 border-2 border-gray-300/30 rounded-lg p-2">
                <IconLockFilled className="size-4 opacity-50" />
                <input {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
                  id="password-input" className="w-full outline-none" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                <button type="button" className="cursor-pointer" onClick={handleShowPassword} >
                  {showPassword ? (
                    <IconEyeOff className="size-4 opacity-50" />
                  ) : (
                    <IconEyeFilled className="size-4 opacity-50" />
                  )}
                </button>
              </div>
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <button 
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-lg p-2 font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-opacity" 
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                "Log In"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
