"use client"
import React, { useState } from "react"
import Cookies from "js-cookie"
import Image from "next/image"
import fb from "../../../assets/facebook-logo.png"
import google from "../../../assets/google-logo.png"
import {
  ChevronLeftIcon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid"
import toast from "react-hot-toast"
import {
  I_User,
  RegistrationType,
  T_BACKEND_RESPONSE,
} from "../../../types/global"
import useLogin from "../../../module/Login/hooks/useLogin"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import useRegister from "../../../module/Login/hooks/useRegister"

const Content = () => {
  const [modalState, setModalState] = useState(0)
  const router = useRouter()
  const { mutate: loginUser, isPending: loginIsPending } = useLogin()
  const { mutate: addUser, isPending: addUserIsPending } = useRegister()
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
  const onSubmit2 = (data: I_User) => {
    const callBackReq2 = {
      onSuccess: (data: T_BACKEND_RESPONSE) => {
        if (!data.error) {
          if (data.item && !addUserIsPending) {
            toast.success("User Successfully added")
            setModalState(0)
            reset()
          }
        } else {
          toast.error(String(data.message))
        }
      },
      onError: (err: any) => {
        toast.error(String(err))
      },
    }
    addUser(
      { ...data, registrationType: "Manual" as unknown as RegistrationType },
      callBackReq2
    )
  }
  const renderLoginSignup = () => {
    return (
      <div>
        <div className="flex border-b-gray-400/50 border-b pb-4 px-4">
          <XMarkIcon className="h-6 w-6  rounded-full hover:bg-gray-300/30" />
          <h1 className="w-full text-center place-self-center font-semibold">
            Log in or sign up
          </h1>
        </div>
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
                    onClick={() => setModalState(1)}
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
    )
  }
  const renderContinueWithEmail = () => {
    return (
      <div>
        <div className="flex border-b-gray-400/50 border-b pb-4 px-4">
          <button
            onClick={() => setModalState(0)}
            className="h-6 w-6  rounded-full hover:bg-gray-300/30"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="w-full text-center place-self-center font-semibold">
            Finish signing up
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit2)}>
          <div className="pt-5 px-6 h-[520px] space-y-4 overflow-y-auto">
            <div>
              <div className="isolate -space-y-px rounded-xl shadow-sm">
                <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-gray-600">
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-medium text-gray-900 "
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName")}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-shown:border-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="First name"
                  />
                </div>
                <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-gray-600">
                  <label
                    htmlFor="lastName"
                    className="block text-xs font-medium text-gray-900"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    {...register("lastName")}
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <p className="text-xs mt-1 text-gray-500">
                Make sure it matches the name on your government ID.
              </p>
            </div>
            <div>
              <div className="isolate -space-y-px rounded-xl shadow-sm">
                <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-gray-600">
                  <label
                    htmlFor="birthdate"
                    className="block text-xs font-medium text-gray-900 "
                  >
                    Birthdate
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    {...register("birthdate")}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-shown:border-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="First name"
                  />
                </div>
              </div>
              <p className="text-xs mt-1 text-gray-500">
                To sign up, you need to be at least 18. Your birthday won’t be
                shared with other people who use Explore Siargao.
              </p>
            </div>
            <div>
              <div className="isolate -space-y-px rounded-xl shadow-sm">
                <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-gray-600">
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-shown:border-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <p className="text-xs mt-1 text-gray-500">
                We'll email you trip confirmations and receipts.
              </p>
            </div>
            <div>
              <div className="isolate -space-y-px rounded-xl shadow-sm">
                <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-gray-600">
                  <label
                    htmlFor="password"
                    className="block text-xs font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    {...register("password")}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-shown:border-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <p className="text-xs mt-1 text-gray-500 tracking-tighter">
                By selecting{" "}
                <span className="font-bold"> Agree and continue,</span> I agree
                to Explore Siargao's{" "}
                <a href="#" className="text-indigo-500 font-bold underline">
                  Terms of Service, Payments Terms of Service,
                </a>{" "}
                and{" "}
                <a href="#" className="text-indigo-500 font-bold underline">
                  Nondiscrimination Policy
                </a>{" "}
                and acknowledge the{" "}
                <a href="#" className="text-indigo-500 font-bold underline">
                  Privacy Policy
                </a>
              </p>
            </div>
            <button
              type="submit"
              className="rounded-md w-full my-5 bg-gradient-to-r from-rose-600 from-10% via-rose-700/90 via-40% to-rose-600 to-80% px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 transition ease-in-out active:scale-95 duration-20"
            >
              {addUserIsPending ? (
                <div
                  className="animate-spin inline-block w-4 h-4 border-[2px] border-current border-t-transparent text-white rounded-full mx-2"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Agree and continue"
              )}
            </button>
            <div className="w-full border-b-2 mt-2" />
            <div className="text-xs font-medium mt-1 text-gray-500 tracking-tighter">
              <p>
                Explore Siargao will send you members-only deals, inspiration,
                marketing emails, and push notifications. You can opt out of
                receiving these at any time in your account settings or directly
                from the marketing notification.
              </p>

              <div className="relative flex items-start mt-4">
                <div className="flex h-6 items-center">
                  <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    className="h-6 w-6 rounded border-gray-400 text-indigo-600 focus:ring-transparent"
                  />
                </div>
                <div className="ml-3 text-xs leading-6">
                  <span id="comments-description" className="text-gray-500">
                    I don’t want to receive marketing messages from Explore
                    Siargao
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-[540px]">
        <div className="bg-white shadow sm:rounded-2xl py-6">
          {modalState === 0 ? renderLoginSignup() : renderContinueWithEmail()}
        </div>
      </div>
    </div>
  )
}

export default Content
