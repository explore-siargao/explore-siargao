"use client"
import StarRating from "@/common/components/ui/StarRating"
import React, { useState } from "react"
import RatingCategoryCard from "./RatingCategoryCard"
import { useForm, FormProvider } from "react-hook-form"
import { Textarea } from "@/common/components/ui/Textarea"
import { Button } from "@/common/components/ui/Button"
import { useParams, useRouter } from "next/navigation"
import useSessionStore from "@/common/store/useSessionStore"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import toast from "react-hot-toast"
import useAddReview from "./hooks/useAddReview"
import useGetListing from "../LandingPage/hooks/useGetListing"
import { ArrowLeft, ArrowRight, LucideChevronLeft } from "lucide-react"
import { Title } from "@/common/components/ui/Title"
import Link from "next/link"

const AddReview = () => {
  const router = useRouter()
  const params = useParams()
  const [stepIndex, setStepIndex] = useState<number>(0)
  const listingId = Number(params.listingId)

  const userId = useSessionStore((state) => state).id
  const { mutate } = useAddReview(userId as number)
  const { data } = useGetListing(listingId)
  const form = useForm()
  const stepHandler = (action: "back" | "next") => {
    if (action === "back") {
      setStepIndex(stepIndex - 1)
    } else {
      setStepIndex(stepIndex + 1)
    }
  }

  const onSubmit = (values: any) => {
    const formattedValues = {
      listingId,
      ...values,
    }

    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          toast.success(data.message)
          router.push("/account-settings/booking-reviews")
        } else {
          toast.error(String(data.message))
        }
      },
      onError: (err: any) => {
        toast.error(String(err))
      },
    }
    mutate(formattedValues, callBackReq)
  }

  const reviewSteps = [
    {
      title: "Cleanliness",
      description: "How would you rate the cleanliness of the accommodation?",
      fieldName: "cleanLinessRates",
    },
    {
      title: "Accuracy",
      description:
        "How would you rate the accuracy of the information about the accommodation?",
      fieldName: "accuracyRates",
    },
    {
      title: "Check-in",
      description:
        "How would you rate the efficiency of the check-in process at the accommodation?",
      fieldName: "checkInRates",
    },
    {
      title: "Communication",
      description:
        "How would you rate the responsiveness of communication from the accommodation staff?",
      fieldName: "communicationRates",
    },
    {
      title: "Location",
      description:
        "How would you rate the convenience and accessibility of the location",
      fieldName: "locationRates",
    },
    {
      title: "Value",
      description:
        "How would you rate the overall value for money of your accommodation?",
      fieldName: "valueRates",
    },
  ]

  return (
    <WidthWrapper width={"small"} className="mt-24 md:mt-36 lg:mt-40">
      <Link href={"/account-settings/booking-reviews"}>
        <LucideChevronLeft strokeWidth={1} />
      </Link>
      <Title className="pb-8 mt-8 mb-8 md:pb-0 justify-center">
        Review Booking
      </Title>

      <div className="flex h-96 md:flex-row flex-col gap-x-20 justify-center mb-20">
        <FormProvider {...form}>
          <form
            className="w-full h-full border rounded-md flex flex-col justify-between gap-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex gap-x-2 p-2">
              {[...Array(7)].map((_, index) => (
                <div
                  key={`form-${_}`}
                  className={`w-full h-1 ${index === stepIndex ? "bg-primary-600" : "bg-primary-300"}`}
                ></div>
              ))}
            </div>
            {stepIndex <= 5 ? (
              <div className="flex flex-col items-center justify-center px-8">
                <RatingCategoryCard
                  description={reviewSteps[stepIndex]?.description as string}
                />
                <StarRating
                  totalStars={5}
                  size="md"
                  name={reviewSteps[stepIndex]?.fieldName as string}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center px-8">
                <div className="text-left w-full">
                  Let us know below what you think about your booking
                </div>
                <Textarea
                  placeholder="Leave your comment here..."
                  {...form.register("comment")}
                  className="w-full mt-2"
                  required
                />
              </div>
            )}
            <div className="flex w-full justify-between items-center p-8">
              <div>
                {stepIndex > 0 && (
                  <button
                    onKeyUp={() => {}}
                    onFocus={() => {}}
                    onClick={() => stepHandler("back")}
                    className="flex w-max items-center gap-x-2 text-primary-600 hover:underline cursor-pointer"
                    role="button"
                  >
                    <ArrowLeft />
                    Back
                  </button>
                )}
              </div>
              <div>
                {stepIndex < 6 && (
                  <button
                    onClick={
                      () => !form.watch(reviewSteps[stepIndex]?.fieldName as string) ? null :stepHandler("next")
                    }
                    onKeyUp={() => {}}
                    onFocus={() => {}}
                    role="button"
                    className={`flex w-max items-center gap-x-2 text-primary-600 hover:underline cursor-pointer ${!form.watch(reviewSteps[stepIndex]?.fieldName as string) ? "opacity-50 pointer-events-none" : ""}`}
                  >
                    Next
                    <ArrowRight />
                  </button>
                )}
                {stepIndex === 6 && (
                  <Button type="submit" variant={"primary"} size="sm">
                    Submit review
                  </Button>
                )}
              </div>
            </div>
          </form>
        </FormProvider>
        <div className="w-full flex flex-col gap-y-4 h-full">
          <div className="w-full p-4 border bg-primary-50 rounded-md h-full"></div>
          <div>
            <div className="font-medium">{data?.item?.title}</div>
            <div className="text-gray-400">{data?.item?.address}</div>
          </div>
        </div>
      </div>
    </WidthWrapper>
  )
}

export default AddReview
