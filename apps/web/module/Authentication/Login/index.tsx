"use client"
import React, { useState } from "react"
import Cookies from "js-cookie"
import Image from "next/image"
import fb from "@/common/assets/facebook-logo.png"
import google from "@/common/assets/google-logo.png"
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
} from "../../../common/types/global"
import { useForm } from "react-hook-form"
import useRegister from "../hooks/useRegister"
import LoginContainer from "@/common/components/ui/LoginContainer"
import LoginInputs from "@/common/components/ui/LoginInputs"

const Login = () => {
  const [modalState, setModalState] = useState(0)
  const { mutate: addUser, isPending: addUserIsPending } = useRegister()
  const { register, handleSubmit, reset } = useForm<I_User>()

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
      <>
      <LoginContainer title="Login or sign up">
        <LoginInputs modalState={modalState}/>
        </LoginContainer>
        </>
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
    <>
          {modalState === 0 ? renderLoginSignup() : renderContinueWithEmail()}
          </>
  )
}

export default Login
