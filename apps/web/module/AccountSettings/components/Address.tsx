import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import useGetCountries from "@/common/hooks/useGetCounties"
import { IAddress } from "@/common/types/global"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import useAddAddress from "../hooks/useAddAddress"
import { useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

type PersonalInfoProps = {
  isButtonClicked: boolean
  contentId: string
}
const Address = ({
  streetAddress,
  country,
  city,
  province,
  zipCode,
  id,
}: IAddress) => {
  const { data: countries, isPending: countriesIsPending } = useGetCountries()
  const [contentState, setContentState] = useState<PersonalInfoProps>({
    isButtonClicked: false,
    contentId: "",
  })
  const { register, reset, handleSubmit, getValues } = useForm<IAddress>()
  const { mutate, isPending } = useAddAddress(id as number)
  const queryClient = useQueryClient()

  const onSubmit = (formData: IAddress) => {
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          queryClient.invalidateQueries({
            queryKey: ["personal-info"],
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
            <h1>Address</h1>
            <p className="font-light">
              {zipCode
                ? `${streetAddress} ${city}, ${province}, ${country}`
                : "Enter an Address"}
            </p>
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
            <h1>Address</h1>
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
          <p className="font-light">
            Use a permanent address where you can receive mail.
          </p>
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
                  countries.map((country: any) => (
                    <option key={country.country}>{country.country}</option>
                  ))
                )}
              </select>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  inputId="streetAddress"
                  inputLabel="Street address"
                  disabled={isPending}
                  defaultValue={streetAddress}
                  {...register("streetAddress")}
                />
                <Input
                  inputId="city"
                  inputLabel="city"
                  disabled={isPending}
                  defaultValue={city}
                  {...register("city")}
                />
                <Input
                  inputId="stateProvice"
                  disabled={isPending}
                  inputLabel="State/Province"
                  defaultValue={province}
                  {...register("province")}
                />
                <Input
                  inputId="zipCode"
                  type="number"
                  inputLabel="zip code"
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
