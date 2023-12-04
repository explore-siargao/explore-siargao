"use client"
import Container from "@/common/components/Container"
import { Button } from "@/common/components/ui/Button"
import {
  RESEND_BUTTON_TEXT,
  SUBMIT_BUTTON_TEXT,
  VERIFICATION_CODE_CONTENT,
  VERIFICATION_CODE_TITTLE,
} from "@/common/constants"
import React, { useEffect, useRef, useState } from "react"
import toast from "react-hot-toast"
import useMultiFactor from "../hooks/useMultiFactor"
import useVerifyMultiFactor from "../hooks/useVerifyMultiFactor"
import { useRouter } from "next/navigation"

let currentOTPIndex: number = 0

const Verification = () => {
  const router = useRouter()
  const { mutate: multiFactor, isPending: isMultiFactorPending } =
    useMultiFactor()
  const { mutate: verifyMultiFactor, isPending: isVerifyMultiFactorPending } =
    useVerifyMultiFactor()
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
  const submitCode = () => {
    const code = otp.join("")
    if (code.length < 6) {
      toast.error("Please complete the code")
    } else {
      const callBackReq = {
        onSuccess: (data: any) => {
          if (!data.error) {
            if (data.item && !isVerifyMultiFactorPending) {
              toast.success(data.message)
              router.push("/")
            }
          } else {
            toast.error(String(data.message))
          }
        },
        onError: (err: any) => {
          toast.error(String(err))
        },
      }
      verifyMultiFactor({ userId: "3", code }, callBackReq)
    }
  }
  const sendMultiFactorCode = () => {
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          if (!isMultiFactorPending) {
            toast.success(data.message, { duration: 5000 })
          }
        } else {
          toast.error(String(data.message))
        }
      },
      onError: (err: any) => {
        toast.error(String(err))
      },
    }
    multiFactor({ userId: "3" }, callBackReq)
  }
  return (
    <Container>
      <div className="p-6">
        <div className="pb-6 space-y-4 text-center">
          <h1 className="font-semibold text-3xl pt-2">
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
                    className="w-12 h-16 text-xl font-bold text-center text-text-400 rounded-lg bg-primary-200/40 focus:bg-white border-0 focus:ring-primary-700 disabled:opacity-50"
                    onChange={handleOnChange}
                    value={otp[num]}
                    //@ts-ignore
                    onKeyDown={(e) => handleOnKeyDown(e, num)}
                    disabled={
                      isMultiFactorPending || isVerifyMultiFactorPending
                    }
                  />
                </React.Fragment>
              )
            })}
          </div>
          <div>
            <Button
              type="button"
              className="w-full my-5"
              onClick={() => submitCode()}
              disabled={isVerifyMultiFactorPending}
            >
              {SUBMIT_BUTTON_TEXT}
            </Button>
            <div className="text-sm text-center text-gray-500">
              <span>Did not receive the code?</span>&nbsp;
              <Button
                type="button"
                variant="link"
                className="font-bold underline px-0"
                onClick={() => sendMultiFactorCode()}
                disabled={isMultiFactorPending}
              >
                {RESEND_BUTTON_TEXT}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  )
}
export default Verification
