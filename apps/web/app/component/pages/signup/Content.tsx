"use client"
import React from "react"
import logo from "../../../public/esLogo.png"
import Image from "next/image"
import fb from "../../../public/facebook-logo.png"
import google from "../../../public/google-logo.png"
import { I_User, T_BACKEND_RESPONSE } from "../../../../types/global"
import useRegister from "../../../../hooks/users/useRegister"
import { useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

interface AddStudentModalProps {
  userId: string
}

const Content = ({ userId }: AddStudentModalProps) => {
  const { mutate: addUser, isPending: adUserIsPending } = useRegister()
  const queryClient = useQueryClient()
  const { register, handleSubmit, reset } = useForm<I_User>()
  const onSubmit = (data: I_User) => {
    const callBackReq = {
      onSuccess: (data: T_BACKEND_RESPONSE) => {
        if (!data.error) {
          if (data.item && !adUserIsPending) {
            queryClient.invalidateQueries({
              queryKey: ["users"],
            })
            toast.success("User Successfully added")
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
    addUser({ ...data }, callBackReq)
  }
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image
              className="mx-auto h-20 w-auto"
              src={logo}
              width={500}
              height={500}
              alt="ES-Logo"
            />
            <h2 className="my-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up to Explore Siargao
            </h2>
          </div>
          <div>
            <div className="mt-6 grid gap-2">
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
              >
                <Image
                  className="h-5 w-auto"
                  src={google}
                  width={500}
                  height={500}
                  alt="fb-Logo"
                />
                <span className="text-sm font-semibold leading-6">
                  Sign up with Google
                </span>
              </a>
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#3b5998] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
              >
                <Image
                  className="h-5 w-auto"
                  src={fb}
                  width={500}
                  height={500}
                  alt="fb-Logo"
                />
                <span className="text-sm font-semibold leading-6">
                  Sign up with Facebook
                </span>
              </a>
            </div>
            <div className="relative my-5">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-900">
                  Or continue with
                </span>
              </div>
            </div>
          </div>
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="flex gap-2">
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("firstName")}
                />
                <input
                  id="middleName"
                  type="text"
                  placeholder="Middle Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("middleName")}
                />
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("lastName")}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("email")}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div>
                <input
                  id="email"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("address")}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <label
                  htmlFor="contactnum"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contact No.
                </label>
                <div>
                  <input
                    id="contactnum"
                    type="number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("contactNumber")}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contactnum"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Birthdate
                </label>
                <div>
                  <input
                    id="contactnum"
                    type="date"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("birthdate")}
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="space-y-4">
                <input
                  id="password"
                  type="password"
                  placeholder="New Password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("password")}
                />
                <input
                  id="passwordConfirmation"
                  type="password"
                  placeholder="Password Confirmation"
                  // required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                {adUserIsPending ? (
                  <div
                    className="animate-spin inline-block w-4 h-4 border-[2px] border-current border-t-transparent text-white rounded-full mx-2"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Sign up"
                )}
              </button>
            </div>
            <div className="flex justify-center">
              <div className="text-sm leading-6">
                <span>Already have an account?</span>
                <a
                  href="/login"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Sign in
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Content
