"use client"
import React from "react"
import fb from "@/common/assets/facebook-logo.png"
import google from "@/common/assets/google-logo.png"
import { EnvelopeIcon } from "@heroicons/react/20/solid"
import toast from "react-hot-toast"
import { IUser } from "@/common/types/global"
import { useForm } from "react-hook-form"
import useLogin from "@/module/Authentication/hooks/useLogin"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { Button } from "@/common/components/ui/Button"
import Link from "next/link"
import { LINK_CREATE_ACCOUNT } from "@/common/constants/links"
import {
  CONTINUE_BUTTON_TEXT,
  LOGIN_CONTENT_TITTLE_TEXT,
} from "@/common/constants"
import Image from "next/image"
import { Input } from "@/common/components/ui/Input"
import { signIn } from "next-auth/react"
import { LINK_FORGOT_PASSWORD } from "../constants/links"
import useGlobalInputEmail from "../store/useGlobalInputEmail"

enum Position {
  "end",
  "start",
}

const LoginForm = () => {
  const router = useRouter()
  const updateEmail = useGlobalInputEmail((state) => state.update)
  const { mutate: loginUser, isPending: isLoginPending } = useLogin()
  const { register, handleSubmit, getValues } = useForm<IUser>()
  const onSubmit = (formData: IUser) => {
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          if (data.item && !isLoginPending) {
            Cookies.set("accessToken", data.item.accessToken)
            signIn("credentials", {
              callbackUrl: "/",
              username: formData.email,
              password: formData.password,
            })
          }
        } else {
          toast.error(String(data.message))
        }
      },
      onError: (err: any) => {
        toast.error(String(err))
      },
    }
    loginUser({ ...formData }, callBackReq)
  }

  return (
    <div className="p-8 md:p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-semibold text-xl mt-1 mb-4">
          {LOGIN_CONTENT_TITTLE_TEXT}
        </h1>
        <div>
          <Input
            inputLabel="Email"
            inputId="email"
            type="email"
            {...register("email", { required: true })}
            disabled={isLoginPending}
          />
          <Input
            inputLabel="Password"
            inputId="password"
            type="password"
            className="mt-2"
            {...register("password", { required: true })}
            disabled={isLoginPending}
          />
        </div>
        <div className="flex mt-2">
          <p className="text-xs text-text-500 tracking-tighter">
            By signing in or creating an account, you agree with our{" "}
            <Link href="#" className="text-info-500 underline">
              Terms & conditions
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-info-500 underline">
              Privacy statement.
            </Link>
          </p>
        </div>

        <Button
          type="submit"
          variant="default"
          className="w-full mt-4 mb-2"
          disabled={isLoginPending}
        >
          {isLoginPending ? (
            <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent text-primary-200 rounded-full">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            CONTINUE_BUTTON_TEXT
          )}
        </Button>
        <div className="flex justify-end mb-2">
          <Link
            href={LINK_FORGOT_PASSWORD}
            className="font-semibold underline text-xs text-text-300 hover:text-text-600"
            onClick={() => {
              const email = getValues("email")
              updateEmail(email)
            }}
          >
            Forgot password?
          </Link>
        </div>
        <div className="flex">
          <span className="border-b-2 h-0 w-full my-auto"></span>
          <p className="text-xs mx-5">or</p>
          <span className="border-b-2 shadow-md h-0 w-full my-auto"></span>
        </div>
        <div>
          <div>
            <div className="mt-6 grid gap-4">
              <Button
                type="button"
                variant={"outline"}
                imagePosition={Position.start}
                disabled={isLoginPending}
                icon={
                  <Image
                    className="h-5 w-auto"
                    src={fb}
                    width={500}
                    height={500}
                    alt=""
                  />
                }
                onClick={() =>
                  signIn("facebook", { callbackUrl: "/session/facebook" })
                }
              >
                <span className="text-sm font-medium leading-6 text-center w-full">
                  Continue with Facebook
                </span>
              </Button>
              <Button
                type="button"
                variant={"outline"}
                imagePosition={Position.start}
                disabled={isLoginPending}
                icon={
                  <Image
                    className="h-5 w-auto"
                    src={google}
                    width={500}
                    height={500}
                    alt=""
                  />
                }
                onClick={() =>
                  signIn("google", { callbackUrl: "/session/google" })
                }
              >
                <span className="text-sm font-medium leading-6 text-center w-full">
                  Continue with Google
                </span>
              </Button>
              <Button
                variant={"outline"}
                type="button"
                onClick={() => {
                  router.push(LINK_CREATE_ACCOUNT)
                }}
                imagePosition={Position.start}
                icon={<EnvelopeIcon className="h-5 w-auto" />}
              >
                <span className="text-sm font-medium leading-6 text-center w-full">
                  Register using email
                </span>
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
