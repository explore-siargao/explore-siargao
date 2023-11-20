import React from "react"
import logo from "../../../public/esLogo.png"
import Image from "next/image"
import { EnvelopeIcon } from "@heroicons/react/20/solid"

const Content = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <div className="sm:mx-auto sm:w-full sm:max-w-md my-4">
            <Image
              className="mx-auto h-20 w-auto"
              src={logo}
              width={500}
              height={500}
              alt="ES-Logo"
            />

            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Forgot your password?
            </h2>
            <p className="text-sm text-gray-500 text-center mx-5">
              Enter your email address we'll send you a link to reset your
              password
            </p>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
            <div className="text-sm text-center text-gray-500">
              <span>Not a member?</span>&nbsp;
              <a href="/signup" className="font-bold ">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Content
