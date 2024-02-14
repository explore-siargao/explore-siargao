import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import useGetCountries from "@/common/hooks/useGetCounties"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import useAddAddress from "../hooks/useAddAddress"
import { useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { Typography } from "@/common/components/ui/Typography"
import { T_Address } from "@repo/contract"

type PersonalInfoProps = {
  isButtonClicked: boolean
  contentId: string
}
const Address = ({
  streetAddress,
  country,
  city,
  stateProvince,
  zipCode,
  id,
}: T_Address) => {
  const { data: countries, isPending: countriesIsPending } = useGetCountries()
  const [contentState, setContentState] = useState<PersonalInfoProps>({
    isButtonClicked: false,
    contentId: "",
  })
  const { register, reset, handleSubmit, getValues } = useForm<T_Address>()
  const { mutate, isPending } = useAddAddress(id as number)
  const queryClient = useQueryClient()

  const onSubmit = (formData: T_Address) => {
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          queryClient.invalidateQueries({
            queryKey: ["session"],
          })
          toast.success(data.message)
          reset()
        } else {
          toast.error(String(data.message))
        }
      },
      onError: (err: any) => {
        toast.error(String(err))
      },
    }
    mutate({ ...formData, zipCode: Number(getValues("zipCode")) }, callBackReq)
  }

  return (
    <div className="text-sm">
      {!contentState.isButtonClicked ? (
        <div className="flex justify-between py-5">
          <div>
            <Typography variant={"p"}>Address</Typography>
            <Typography className="font-light">
              {zipCode
                ? `${streetAddress} ${city}, ${stateProvince}, ${country}`
                : "Enter an Address"}
            </Typography>
          </div>
          <button
            onClick={() =>
              setContentState({
                isButtonClicked: !contentState.isButtonClicked,
                contentId: "Address",
              })
            }
            className="underline self-start select-none"
          >
            Edit
          </button>
        </div>
      ) : (
        <div className="grid py-5">
          <div className="flex justify-between">
            <Typography variant={"p"}>Address</Typography>
            <button
              className="underline self-start select-none"
              onClick={() =>
                setContentState({
                  isButtonClicked: !contentState.isButtonClicked,
                  contentId: " ",
                })
              }
            >
              Cancel
            </button>
          </div>
          <Typography className="font-light">
            Use a permanent address where you can receive mail.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-4 space-y-4">
              <select
                {...register("country")}
                id="countries"
                className="pr-10 text-text-900 focus-within:z-10 focus-within:ring-2 focus-within:ring-text-600 text-sm rounded-lg block h-14 w-[490px] p-2.5 "
              >
                <option selected>Choose a country</option>
                {countriesIsPending ? (
                  <option>Loading</option>
                ) : (
                  countries?.items?.map((country: any) => (
                    <option key={country.country}>{country.country}</option>
                  ))
                )}
              </select>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  id="streetAddress"
                  label="Street address"
                  disabled={isPending}
                  defaultValue={streetAddress}
                  {...register("streetAddress")}
                />
                <Input
                  id="city"
                  label="city"
                  disabled={isPending}
                  defaultValue={city}
                  {...register("city")}
                />
                <Input
                  id="stateProvice"
                  disabled={isPending}
                  label="State/Province"
                  defaultValue={stateProvince}
                  {...register("stateProvince")}
                />
                <Input
                  id="zipCode"
                  type="number"
                  label="zip code"
                  disabled={isPending}
                  defaultValue={zipCode}
                  {...register("zipCode")}
                />
              </div>
            </div>
            <Button className="w-20" size={"sm"} type="submit">
              {isPending ? (
                <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent text-primary-200 rounded-full">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Save"
              )}
            </Button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Address
