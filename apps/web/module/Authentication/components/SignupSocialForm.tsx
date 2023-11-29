"use client"
import {
  I_User,
  RegistrationType,
  T_BACKEND_RESPONSE,
} from "@/common/types/global"
import useRegister from "@/module/Authentication/hooks/useRegister"
import React from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Button } from "../../../common/components/ui/Button"
import Link from "next/link"
import {
  ADD_USER_SUCCESS_MESSAGE,
  AGREE_CONTINUE_BUTTON_TEXT,
} from "../../../common/constants/index"
import { Input } from "../../../common/components/ui/Input"

const SignupSocialForm = () => {
  const { mutate: addUser, isPending: addUserIsPending } = useRegister()
  const { register, handleSubmit, reset } = useForm<I_User>()
  const onSubmit2 = (data: I_User) => {
    const callBackReq2 = {
      onSuccess: (data: T_BACKEND_RESPONSE) => {
        if (!data.error) {
          if (data.item && !addUserIsPending) {
            toast.success(ADD_USER_SUCCESS_MESSAGE)
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
      { ...data, registrationType: "Google" as unknown as RegistrationType },
      callBackReq2
    )
  }
  return (
    <div className="px-6 pb-6 ">
      <form onSubmit={handleSubmit(onSubmit2)}>
        <div className="space-y-4 overflow-y-auto">
          <div>
            <p className="text-xs my-2 text-text-500 text-center">
              This information is from google
            </p>
            <Input
              inputLabel="First Name"
              inputId="firstName"
              type="text"
              {...register("firstName")}
            />
            <Input
              inputLabel="Last name"
              inputId="lastName"
              type="text"
              className="mt-2"
              {...register("lastName")}
            />
            <p className="text-xs mt-1 text-text-500">
              Make sure it matches the name on your government ID.
            </p>
          </div>
          <div>
            <div className="isolate -space-y-px rounded-xl shadow-sm">
              <Input
                inputLabel="Birthdate"
                inputId="birthdate"
                type="date"
                {...register("birthdate")}
              />
            </div>
            <p className="text-xs mt-1 text-text-500">
              To sign up, you need to be at least 18. Your birthday won’t be
              shared with other people who use Explore Siargao.
            </p>
          </div>
          <div>
            <div className="isolate -space-y-px rounded-xl shadow-sm">
              <Input
                inputLabel="Email"
                inputId="email"
                type="email"
                {...register("email")}
                placeholder="you@example.com"
              />
            </div>
            <p className="text-xs mt-1 text-text-500">
              We'll email you trip confirmations and receipts.
            </p>
          </div>
          <div>
            <p className="text-xs mt-4 text-text-500 tracking-tighter">
              By selecting{" "}
              <span className="font-bold"> Agree and continue,</span> I agree to
              Explore Siargao's{" "}
              <Link href="#" className="text-info-500 font-bold underline">
                Terms of Service, Payments Terms of Service,
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-info-500 font-bold underline">
                Nondiscrimination Policy
              </Link>{" "}
              and acknowledge the{" "}
              <Link href="#" className="text-info-500 font-bold underline">
                Privacy Policy
              </Link>
            </p>
          </div>
          <Button type="submit" className="w-full my-4">
            {addUserIsPending ? (
              <div
                className="animate-spin inline-block w-4 h-4 border-[2px] border-current border-t-transparent text-white rounded-full mx-2"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              AGREE_CONTINUE_BUTTON_TEXT
            )}
          </Button>
          <div className="w-full border-b-2 mt-2" />
          <div className="text-xs font-medium mt-1 text-text-500 tracking-tighter">
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
                  name="comments"
                  type="checkbox"
                  className="h-6 w-6 rounded border-text-400 text-secondary-600 focus:ring-transparent"
                />
                <label
                  htmlFor="comments"
                  className="text-text-500 ml-3 text-xs leading-6"
                >
                  I don’t want to receive marketing messages from Explore
                  Siargao
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignupSocialForm
