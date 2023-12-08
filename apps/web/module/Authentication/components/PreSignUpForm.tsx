"use client"
import React from "react"
import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { useForm } from "react-hook-form"
import fb from "@/common/assets/facebook-logo.png"
import google from "@/common/assets/google-logo.png"
import Image from "next/image"
import { signIn } from "next-auth/react"
import useGlobalInputEmail from "../store/useGlobalInputEmail"

enum Position {
  "end",
  "start",
}

type TPreSignUp = {
  email: string
}

const PreSignUpForm = () => {
  const { register, handleSubmit } = useForm<TPreSignUp>()
  const updateEmail = useGlobalInputEmail((state) => state.update)
  const onSubmit = (data: TPreSignUp) => {
    updateEmail(data.email)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-6 space-y-4">
        <div>
          <Input
            inputLabel="Email"
            inputId="email"
            type="email"
            placeholder="you@example.com"
            {...register("email", { required: true })}
          />
        </div>
        <Button className="w-full my-5" type="submit">
          Proceed
        </Button>
        <div className="mt-6 grid gap-4">
          <Button
            type="button"
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
            icon={
              <Image
                className="h-5 w-auto"
                src={google}
                width={500}
                height={500}
                alt=""
              />
            }
            onClick={() => signIn("google", { callbackUrl: "/session/google" })}
          >
            <span className="text-sm font-medium leading-6 text-center w-full">
              Continue with Google
            </span>
          </Button>
        </div>
      </div>
    </form>
  )
}

export default PreSignUpForm
