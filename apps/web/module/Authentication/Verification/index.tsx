"use client"
import { Button } from "@/common/components/ui/Button"
import Link from "next/link"
import React, { FC, useEffect, useRef, useState } from "react"

interface Props {}

let currentOTPIndex: number = 0
const Verification: FC<Props> = (props): JSX.Element => {
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
        <div className="bg-white shadow sm:rounded-2xl p-6">
          <div className="pb-6 pt-4 space-y-4 text-center">
            <h1 className="font-semibold text-3xl "> Verification Code</h1>
            <p className="text-sm leading-tight text-gray-500 mx-1">
              Please enter 6 digits verificaiton code sent to your email to
              confirm your identity.
            </p>
          </div>
          <form className="space-y-6" method="POST">
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
                      className="w-12 h-16 text-xl font-bold text-center text-gray-600 rounded-lg bg-rose-100 focus:bg-white border-0 focus:ring-rose-700"
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
              <Button type="button" className="w-full  my-5 ">
                Submit
              </Button>
              <div className="text-sm text-center text-gray-500">
                <span>Did not receive the code?</span>&nbsp;
                <Link href="#" className="font-bold uppercase underline">
                  Resend
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Verification
