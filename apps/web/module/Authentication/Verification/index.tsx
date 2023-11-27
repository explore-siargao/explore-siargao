"use client"
import AuthContainerNoTittle from "@/common/components/AuthContainerNoTittle"
import { Button } from "@/common/components/ui/Button"
import {
  RESEND_BUTTON_TEXT,
  SUBMIT_BUTTON_TEXT,
  VERIFICATION_CODE_CONTENT,
  VERIFICATION_CODE_TITTLE,
} from "@/common/constants"
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
    <AuthContainerNoTittle>
      <div className="m-2">
        <div className="pb-6 pt-4 space-y-4 text-center">
          <h1 className="font-semibold text-3xl ">
            {VERIFICATION_CODE_TITTLE}
          </h1>
          <p className="text-sm leading-tight text-gray-500 mx-1">
            {VERIFICATION_CODE_CONTENT}
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
                    className="w-12 h-16 text-xl font-bold text-center text-text-400 rounded-lg bg-primary-200/40 focus:bg-white border-0 focus:ring-primary-700"
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
              {SUBMIT_BUTTON_TEXT}
            </Button>
            <div className="text-sm text-center text-gray-500">
              <span>Did not receive the code?</span>&nbsp;
              <Link href="#" className="font-bold underline">
                {RESEND_BUTTON_TEXT}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </AuthContainerNoTittle>
  )
}
export default Verification
