import Image from "next/image"
import React from "react"
import confuse from "../../../public/confusion.png"

const Content = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white shadow sm:rounded-2xl p-6">
          <div className="pb-6 pt-4 space-y-4 text-center">
            <div className="w-full flex place-content-center">
              <Image
                src={confuse}
                height={500}
                width={500}
                className="w-60 h-auto"
                alt={"confusion"}
              />
            </div>
            <h1 className="font-semibold text-3xl">Forgot Your Password?</h1>
            <p className="text-sm leading-tight text-gray-500 mx-1">
              Enter your email address we'll send you a link to reset your
              password. go to{" "}
              <a href="/login" className="font-bold underline">
                Login?
              </a>
            </p>
          </div>
          <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-gray-600">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="button"
            className="rounded-md w-full my-5 bg-gradient-to-r from-rose-600 from-10% via-rose-700/90 via-40% to-rose-600 to-80% px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 transition ease-in-out active:scale-95 duration-20"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Content
