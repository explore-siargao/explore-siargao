"use client"
import { RegistrationType } from "@/common/types/global"
import useRegister, {
  T_Register,
} from "@/module/Authentication/hooks/useRegister"
import React from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Button } from "@/common/components/ui/Button"
import Link from "next/link"
import { AGREE_CONTINUE_BUTTON_TEXT } from "@/common/constants/index"
import { Input } from "@/common/components/ui/Input"
import { capitalizeFirstLetter } from "@/common/helpers/capitalizeFirstLetter"
import { useParams, useRouter } from "next/navigation"
import { signIn, useSession } from "next-auth/react"
import Cookies from "js-cookie"
import { APP_NAME } from "@repo/constants"
import { Select } from "@/common/components/ui/Select"

type Props = {
  isSocial?: boolean
}

const SignUpForm = ({ isSocial = false }: Props) => {
  const router = useRouter()
  const { data: session } = useSession()
  const { mutate: addUser, isPending: addUserIsPending } = useRegister()
  const { register, handleSubmit } = useForm<T_Register>({
    values: {
      email: session?.user?.email as string,
      firstName: "",
      lastName: "",
      birthDate: "",
      password: "",
      registrationType: RegistrationType.Manual,
    },
  })
  const params = useParams()
  const signUpType =
    params.type === "facebook" || params.type === "google"
      ? capitalizeFirstLetter(params.type as string)
      : "Manual"

  const onSubmit = (formData: T_Register) => {
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          if (data.item && !addUserIsPending) {
            Cookies.set("accessToken", data.item.accessToken)
            if (signUpType === "Manual") {
              signIn("credentials", {
                callbackUrl: "/",
                username: formData.email,
                password: formData.password,
              })
            } else {
              router.push("/")
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
    addUser(
      {
        ...formData,
        registrationType: signUpType as unknown as RegistrationType,
      },
      callBackReq
    )
  }
  const dayCount: number[] = []

  for (let index = 1; index <= 31; index++) {
    dayCount.push(index)
  }
  const startYear = 1900
  const currentYear = new Date().getFullYear()
  const years: number[] = []
  for (let year = currentYear; year >= startYear; year--) {
    years.push(year)
  }
  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4 overflow-y-auto">
          <div>
            <div>
              <Input
                inputLabel="First Name"
                inputId="firstName"
                type="text"
                {...register("firstName", { required: true })}
                disabled={addUserIsPending}
              />
              <Input
                inputLabel="Last name"
                inputId="lastName"
                type="text"
                className="mt-2"
                {...register("lastName", { required: true })}
                disabled={addUserIsPending}
              />
            </div>
            <p className="text-xs mt-1 text-text-500">
              Make sure it matches the name on your government ID.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-4">
              <Select SelectId="month" SelectValue="Month">
                <option disabled>Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </Select>
              <Select SelectId="day" SelectValue="Day">
                <option disabled>Day</option>
                {dayCount.map((day) => (
                  <option key={day} value={`${day}`}>
                    {day}
                  </option>
                ))}
              </Select>
              <Select SelectId="year" SelectValue="Year">
                <option disabled>Year</option>
                {years.map((year) => (
                  <option key={year} value={`${year}`}>
                    {year}
                  </option>
                ))}
              </Select>
            </div>
            <p className="text-xs mt-1 text-text-500">
              To sign up, you need to be at least 18. Your birthday won’t be
              shared with other people who use {APP_NAME}.
            </p>
          </div>
          <div>
            <div className="isolate -space-y-px rounded-xl shadow-sm">
              <Input
                inputLabel="Email"
                inputId="email"
                type="email"
                {...register("email", { required: true })}
                placeholder="you@example.com"
                disabled={addUserIsPending || isSocial}
              />
            </div>
            <p className="text-xs mt-1 text-text-500">
              We'll email you trip confirmations and receipts.
            </p>
          </div>
          <div>
            {!isSocial && (
              <Input
                inputLabel="Password"
                inputId="password"
                type="password"
                {...register("password", { required: true })}
                disabled={addUserIsPending}
              />
            )}
            <p className="text-xs mt-4 text-text-500 tracking-tighter">
              By selecting{" "}
              <span className="font-bold"> Agree and continue,</span> I agree to
              {APP_NAME}'s{" "}
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
          <Button type="submit" variant={"primary"} className="w-full my-4">
            {addUserIsPending ? (
              <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent text-primary-200 rounded-full">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              AGREE_CONTINUE_BUTTON_TEXT
            )}
          </Button>
          <div className="w-full border-b-2 mt-2" />
          <div className="text-xs font-medium mt-1 text-text-500 tracking-tighter">
            <p>
              {APP_NAME} will send you members-only deals, inspiration,
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
                  disabled={addUserIsPending}
                  className="h-6 w-6 rounded border-gray-400 text-secondary-600 focus:ring-transparent"
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

export default SignUpForm
