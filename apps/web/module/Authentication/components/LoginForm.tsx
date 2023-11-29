"use client"
import React from "react"
import fb from "@/common/assets/facebook-logo.png"
import google from "@/common/assets/google-logo.png"
import { EnvelopeIcon } from "@heroicons/react/20/solid"
import toast from "react-hot-toast"
import { I_User, T_BACKEND_RESPONSE } from "@/common/types/global"
import { useForm } from "react-hook-form"
import useLogin from "@/module/Authentication/hooks/useLogin"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { Button } from "@/common/components/ui/Button"
import { signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { LINK_CREATE_ACCOUNT, LINK_HOME } from "../../../common/constants/links"
import {
  CONTINUE_BUTTON_TEXT,
  LOGIN_CONTENT_SUB_TEXT,
  LOGIN_CONTENT_TITTLE_TEXT,
} from "../../../common/constants"
import Image from "next/image"
import { Input } from "../../../common/components/ui/Input"

const LoginForm = () => {
  const router = useRouter()
  const { mutate: loginUser, isPending: loginIsPending } = useLogin()
  const { register, handleSubmit, reset } = useForm<I_User>()
  const onSubmit = (data: I_User) => {
    const callBackReq = {
      onSuccess: (data: T_BACKEND_RESPONSE) => {
        if (!data.error) {
          if (data.item && !loginIsPending) {
            Cookies.set("tfl", data.item.token)
            if (data.userType === "User") {
              reset()
              router.push(LINK_HOME)
            }
          }
        } else {
          toast.error(String(data.message))
        }
      },
      onError: (err: any) => {
        toast.error(String(err))
      },
    }
    loginUser({ ...data }, callBackReq)
  }
  enum Position {
    "end",
    "start",
  }
  enum InputVariants {
    "danger",
    "warning",
    "success",
  }

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-semibold text-xl mt-1 mb-4">
          {LOGIN_CONTENT_TITTLE_TEXT}
        </h1>
        <div>
          <Input
            inputLabel="Email"
            inputId="email"
            type="email"
            {...register("email")}
          />
          <Input
            inputLabel="Password"
            inputId="password"
            type="password"
            className="mt-2"
            {...register("password")}
          />
        </div>
        <p className="text-[11px] mt-1">
          {LOGIN_CONTENT_SUB_TEXT}{" "}
          <Link href="#" className="font-bold underline">
            Privacy Policy
          </Link>
        </p>
        <Button type="submit" variant="default" className="w-full my-4">
          {loginIsPending ? (
            <div
              className="animate-spin inline-block w-4 h-4 border-[2px] border-current border-t-transparent text-white rounded-full mx-2"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            CONTINUE_BUTTON_TEXT
          )}
        </Button>
        <div className="flex">
          <span className="border-b-2 h-0 w-full my-auto"></span>
          <p className="text-xs mx-5">or</p>
          <span className="border-b-2 shadow-md h-0 w-full my-auto"></span>
        </div>
        <div>
          <div>
            <div className="mt-6 grid gap-4">
              <Button
                variant={"outline"}
                imagePosition={Position.start}
                icon={
                  <Image
                    className="h-5 w-auto"
                    src={fb}
                    width={500}
                    height={500}
                    alt=""
                  />
                }
                onClick={() => signIn("facebook")}
              >
                <span className="text-sm font-medium leading-6 text-center w-full">
                  Continue with Facebook
                </span>
              </Button>
              <Button
                variant={"outline"}
                imagePosition={Position.start}
                icon={
                  <Image
                    className="h-5 w-auto"
                    src={google}
                    width={500}
                    height={500}
                    alt=""
                  />
                }
                onClick={() => signIn("google")}
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
