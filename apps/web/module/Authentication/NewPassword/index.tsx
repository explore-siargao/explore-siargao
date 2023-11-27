import React from "react"
import lock from "@/common/assets/padlock.png"
import Image from "next/image"
import { LOGIN } from "@/common/constants/links"
import Link from "next/link"
import { Button } from "@/common/components/ui/Button"

const NewPassword = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white shadow sm:rounded-2xl p-6">
          <div className="pb-6 pt-4 space-y-4 text-center">
            <div className="w-full flex place-content-center">
              <Image
                src={lock}
                height={500}
                width={500}
                className="w-60 h-auto"
                alt={"padlock"}
              />
            </div>
            <h1 className="font-semibold text-3xl">Reset Your Password</h1>
            <p className="text-sm leading-tight text-gray-500 mx-1">
              Enter your email address we'll send you a link to reset your
              password. go to{" "}
              <Link href={LOGIN} className="font-bold underline">
                Login?
              </Link>
            </p>
          </div>
          <div className="isolate -space-y-px rounded-xl shadow-sm">
            <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-gray-600">
              <label
                htmlFor="newPassword"
                className="block text-xs font-medium text-gray-900"
              >
                Enter New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-gray-600">
              <label
                htmlFor="confirmPassword"
                className="block text-xs font-medium text-gray-900"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <Button className="w-full  my-5 ">Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default NewPassword
