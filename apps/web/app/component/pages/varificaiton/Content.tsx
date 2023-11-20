"use client"
import React, { FC, useEffect, useRef, useState } from "react"
import logo from "../../../public/esLogo.png"
import Image from "next/image"

interface Props {}

let currentOTPIndex: number = 0
const Content: FC<Props> = (props): JSX.Element => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""))
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const handleOnChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target
    const newOTP: string[] = [...otp]
    newOTP[currentOTPIndex] = value.substring(value.length - 1)
    if (!value) setActiveOTPIndex(currentOTPIndex - 1)
    else setActiveOTPIndex(currentOTPIndex + 1)
    setOtp(newOTP)
  }
  const handleOnKeyDown = (
    { key }: React.KeyboardEvent<HTMLImageElement>,
    index: number
  ) => {
    currentOTPIndex = index
    if (key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1)
  }
  useEffect(() => {
    inputRef.current?.focus()
  }, [activeOTPIndex])
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
              Verify your account
            </h2>
            <p className="text-sm text-gray-500 text-center mx-5">
              Please enter 6 digits verificaiton code sent to your email, Enter
              the code below to confirm your email address
            </p>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div
              id="verification-field"
              className="flex justify-center items-center space-x-2"
            >
              {otp.map((_: string, num: number = 0) => {
                return (
                  <React.Fragment key={num}>
                    <input
                      ref={num === activeOTPIndex ? inputRef : null}
                      type="number"
                      className="w-12 h-16 text-xl font-bold text-center text-gray-600 rounded-lg bg-slate-100 focus:bg-white border-0 focus:ring-black"
                      onChange={handleOnChange}
                      value={otp[num]}
                      //@ts-ignore
                      onKeyDown={(e) => handleOnKeyDown(e, num)}
                    />
                  </React.Fragment>
                )
              })}
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Verify
              </button>
            </div>
            <div className="text-sm text-center text-gray-500">
              <span>If you didn't receive the code?</span>&nbsp;
              <a href="#" className="font-bold uppercase">
                Resend
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Content
