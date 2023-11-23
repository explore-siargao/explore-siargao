"use client";
import React from "react";
import Image from "next/image"
import fb from "@/common/assets/facebook-logo.png"
import google from "@/common/assets/google-logo.png"
import {
    EnvelopeIcon,
} from "@heroicons/react/20/solid";
import toast from "react-hot-toast";
import { I_User, T_BACKEND_RESPONSE } from "@/common/types/global";
import { useForm } from "react-hook-form";
import useLogin from "@/module/Authentication/hooks/useLogin";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LoginInputs = () => {
  const router = useRouter()
  const { mutate: loginUser, isPending: loginIsPending } = useLogin()
  const { register, handleSubmit, reset } = useForm<I_User>()
  const onSubmit = (data: I_User) => {
    const callBackReq = {
      onSuccess: (data: T_BACKEND_RESPONSE) => {
        if (!data.error) {
          if (data.item && !loginIsPending) {
            Cookies.set("tfl", data.item.token)
            if (data.userType === "User") {
              reset()
              router.push("/home")
            }
          }
        } else {
          toast.error(String(data.message))
        }
      },
      onError: (err: any) => {
        toast.error(String(err))
      },
    }
    loginUser({ ...data }, callBackReq)
  }
  return(
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6">
            <h1 className="font-semibold text-xl py-6">
              Welcome to Explore Siargao
            </h1>
            <div className="isolate -space-y-px rounded-xl shadow-sm">
              <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-gray-600">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>
              <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-gray-600">
                <label
                  htmlFor="job-title"
                  className="block text-xs font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <p className="text-[11px] mt-1">
              We’ll email you to verify your email address. Standard message and
              data rates apply.{" "}
              <a href="#" className="font-bold underline">
                Privacy Policy
              </a>
            </p>
            <button
              type="submit"
              className="rounded-md w-full my-5 bg-gradient-to-r from-rose-600 from-10% via-rose-700/90 via-40% to-rose-600 to-80% px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 transition ease-in-out active:scale-95 duration-20"
            >
              {loginIsPending ? (
                <div
                  className="animate-spin inline-block w-4 h-4 border-[2px] border-current border-t-transparent text-white rounded-full mx-2"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Continue"
              )}
            </button>
            <div className="flex">
              <span className="border-b-2 h-0 w-full my-auto"></span>
              <p className="text-xs mx-5">or</p>
              <span className="border-b-2 shadow-md h-0 w-full my-auto"></span>
            </div>
            <div>
              <div>
                <div className="mt-6 grid gap-4">
                  <a
                    href="#"
                    className="flex w-full items-center gap-3 rounded-md border-black border px-3 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F] hover:bg-slate-200/30 transition ease-in-out active:-translate-y-1 active:scale-95 duration-50"
                  >
                    <Image
                      className="h-5 w-auto"
                      src={fb}
                      width={500}
                      height={500}
                      alt="fb-Logo"
                    />
                    <span className="text-sm leading-6 font-medium text-center w-full">
                      Continue with Facebook
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex w-full items-center gap-3 rounded-md border-black border px-3 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F] hover:bg-slate-200/30 transition ease-in-out active:-translate-y-1 active:scale-95 duration-50"
                  >
                    <Image
                      className="h-5 w-auto"
                      src={google}
                      width={500}
                      height={500}
                      alt="fb-Logo"
                    />
                    <span className="text-sm font-medium leading-6 text-center w-full">
                      Continue with Google
                    </span>
                  </a>
                  <button
                    className="flex w-full items-center gap-3 rounded-md border-black border px-3 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F] hover:bg-slate-200/30 transition ease-in-out active:-translate-y-1 active:scale-95 duration-50"
                  >
                    <EnvelopeIcon className="h-5 w-auto" />
                    <span className="text-sm font-medium leading-6 text-center w-full">
                      Continue with Email
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
    </div>
)};

export default LoginInputs;
