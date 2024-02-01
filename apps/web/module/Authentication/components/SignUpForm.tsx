"use client"
import useRegister from "@/module/Authentication/hooks/useRegister"
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
import { APP_NAME } from "@repo/constants"
import dayjs from "dayjs"
import { Option, Select } from "@/common/components/ui/Select"
import {
  CALENDAR_DAYS,
  CALENDAR_MONTHS_NUM,
  CALENDAR_MONTHS_STR,
  CALENDAR_YEARS,
} from "../constants"
import useGlobalInputEmail from "../store/useGlobalInputEmail"
import { Typography } from "@/common/components/ui/Typography"
import useOptMessageStore from "@/common/store/useOptMessageStore"
import {
  E_RegistrationType,
  T_BackendResponse,
  T_UserRegister,
} from "@repo/contract"

type Props = {
  isSocial?: boolean
}

const SignUpForm = ({ isSocial = false }: Props) => {
  const router = useRouter()
  const { data: session } = useSession()
  const { mutate: addUser, isPending: addUserIsPending } = useRegister()
  const createAccountEmail = useGlobalInputEmail((state) => state.email)
  const { register, handleSubmit } = useForm<
    T_UserRegister & { month: string; year: string; day: string }
  >({
    values: {
      email: (session?.user?.email as string) || createAccountEmail || "",
      firstName: "",
      lastName: "",
      birthDate: "",
      password: null,
      month: "",
      year: "",
      day: "",
      registrationType: E_RegistrationType.Manual,
      country: ""
    },
  })
  const params = useParams()
  const signUpType =
    params.type === "facebook" || params.type === "google"
      ? capitalizeFirstLetter(params.type as string)
      : "Manual"

  const onSubmit = async (
    formData: T_UserRegister & { month: string; year: string; day: string }
  ) => {
    const callBackReq = {
      onSuccess: (data: T_BackendResponse) => {
        if (!data.error && !addUserIsPending) {
          if (signUpType === "Manual") {
            signIn("credentials", {
              callbackUrl: "/",
              username: formData.email,
              password: formData.password,
              redirect: false,
            })
          }
          setIsOpen()
          router.push("/")
        } else {
          toast.error(String(data.message))
        }
      },
      onError: (err: any) => {
        toast.error(String(err))
      },
    }
    const { email, firstName, lastName, month, day, year, password, country } =
      formData
    const birthDate = dayjs(`${month}-${day}-${year}`, "MM-DD-YYYY")
    addUser(
      {
        email,
        firstName,
        lastName,
        birthDate: birthDate.format(),
        password,
        registrationType: signUpType as E_RegistrationType,
        country,
      },
      callBackReq
    )
  }
  const setIsOpen = useOptMessageStore((state) => state.setIsOpen)

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div>
            <div>
              <Input
                label="First Name"
                id="firstName"
                type="text"
                {...register("firstName", { required: true })}
                disabled={addUserIsPending}
                required
              />
              <Input
                label="Last name"
                id="lastName"
                type="text"
                className="mt-2"
                {...register("lastName", { required: true })}
                disabled={addUserIsPending}
                required
              />
            </div>
            <Typography variant={"p"} className="text-xs mt-1 text-text-500">
              Make sure it matches the name on your government ID.
            </Typography>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-4">
              <Select
                label="Month"
                defaultValue="Month"
                {...register("month", { required: true })}
                required
              >
                <Option disabled value="">
                  Select
                </Option>
                {CALENDAR_MONTHS_STR.map((month, index) => (
                  <Option key={month} value={CALENDAR_MONTHS_NUM[index]}>
                    {month}
                  </Option>
                ))}
              </Select>
              <Select
                label="Day"
                defaultValue="Day"
                {...register("day", { required: true })}
                required
              >
                <Option disabled value="">
                  Select
                </Option>
                {CALENDAR_DAYS.map((day) => (
                  <Option key={day} value={`${day}`}>
                    {day}
                  </Option>
                ))}
              </Select>
              <Select
                label="Year"
                defaultValue="Year"
                {...register("year", { required: true })}
                required
              >
                <Option disabled value="">
                  Select
                </Option>
                {CALENDAR_YEARS.map((year) => (
                  <Option key={year} value={`${year}`}>
                    {year}
                  </Option>
                ))}
              </Select>
            </div>
            <Typography variant={"p"} className="text-xs mt-1 text-text-500">
              To sign up, you need to be at least 18. We will not share your
              personal information.
            </Typography>
          </div>
          <div>
            <Input
              label="Country"
              id="country"
              type="text"
              {...register("country", { required: true })}
              disabled={addUserIsPending}
            />
          </div>
          <div>
            <div className="isolate -space-y-px rounded-xl shadow-sm">
              <Input
                label="Email"
                id="email"
                type="email"
                {...register("email", { required: true })}
                placeholder="you@example.com"
                disabled={addUserIsPending || isSocial}
                required
              />
            </div>
            <Typography variant={"p"} className="text-xs mt-1 text-text-500">
              We'll email you trip confirmations and receipts.
            </Typography>
          </div>
          <div>
            <Input
              label="Country"
              id="country"
              type="text"
              {...register("country", { required: true })}
              disabled={addUserIsPending}
            />
          </div>
          <div>
            {!isSocial && (
              <Input
                label="Password"
                id="password"
                type="password"
                {...register("password", { required: true })}
                disabled={addUserIsPending}
                required
              />
            )}
            <Typography
              variant={"p"}
              className="text-xs mt-4 text-text-500 tracking-tighter"
            >
              By signing in or creating an account, you agree with our{" "}
              <Link href="#" className="text-info-500 underline">
                Terms & conditions
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-info-500 underline">
                Privacy statement
              </Link>
              .
            </Typography>
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
                  className="text-text-500 ml-3 text-xs leading-2"
                >
                  I’d like to receive travel tips, uplifting content, and
                  exclusive deals from {APP_NAME}. You can opt out at any time.
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
