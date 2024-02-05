import ModalContainer from "@/common/components/ModalContainer"
import { Input } from "@/common/components/ui/Input"
import React from "react"
import amex from "@/common/assets/amex.png"
import discover from "@/common/assets/discover-card.png"
import mastercard from "@/common/assets/mastercard.png"
import visa from "@/common/assets/visa.png"
import Image from "next/image"
import useAddPaymentMethod from "../../hooks/useAddPaymentMethod"
import { IPaymentMethod } from "@/common/types/global"
import { useForm } from "react-hook-form"
import { useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import valid from "card-validator"
import ErrorMessage from "../ui/ErrorMessage"
import ModalContainerFooter from "@/common/components/ModalContainer/ModalContainerFooter"
import { Option, Select } from "@/common/components/ui/Select"
import { COUNTRIES } from "@repo/constants"

interface CardDetailModal {
  isOpen: boolean
  onClose: () => void
  userId: number
}

const AddCardDetailModal = ({ isOpen, onClose, userId }: CardDetailModal) => {
  const { mutate, isPending } = useAddPaymentMethod(userId)
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<IPaymentMethod>()
  const queryClient = useQueryClient()
  const onSubmit = (formData: IPaymentMethod) => {
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          queryClient.invalidateQueries({
            queryKey: ["payment-method"],
          })
          toast.success(data.message)
          reset()
          onClose()
        } else {
          toast.error(String(data.message))
        }
      },
      onError: (err: any) => {
        toast.error(String(err))
      },
    }
    mutate(
      {
        ...formData,
        cardNumber: String(getValues("cardNumber")).replace(/\s/g, ""),
        cvv: Number(getValues("cvv")),
        zipCode: Number(getValues("zipCode")),
        userId: Number(userId),
      },
      callBackReq
    )
  }

  const validateCard = () => {
    const validateNumber = valid.number(getValues("cardNumber"))
    if (validateNumber.card) {
      clearErrors("cardNumber")
      if (validateNumber.isValid) {
        clearErrors("cardNumber")
      } else {
        setError("cardNumber", {
          type: "manual",
          message: "Invalid card number",
        })
      }
    } else {
      setError("cardNumber", {
        type: "manual",
        message: "Invalid Card",
      })
    }
  }

  const validateCvv = () => {
    const checkCvv = valid.cvv(getValues("cvv"))
    if (checkCvv.isValid) {
      clearErrors("cvv")
    } else {
      setError("cvv", {
        type: "manual",
        message: "Invalid cvv number",
      })
    }
  }
  const validateExpirationDate = () => {
    const checkExpirationDate = valid.expirationDate(
      getValues("expirationDate")
    )
    if (checkExpirationDate.isValid) {
      clearErrors("expirationDate")
    } else {
      setError("expirationDate", {
        type: "manual",
        message: "Invalid expiration date",
      })
    }
  }

  return (
    <ModalContainer title="Add card details" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6 space-y-2">
          <div className="flex gap-2">
            <Image
              src={mastercard}
              width={500}
              height={500}
              className="h-5 w-auto"
              alt="mastercard"
            />
            <Image
              src={visa}
              width={500}
              height={500}
              className="h-5 w-auto"
              alt="visa"
            />
            <Image
              src={amex}
              width={500}
              height={500}
              className="h-5 w-auto"
              alt="amex"
            />
            <Image
              src={discover}
              width={500}
              height={500}
              className="h-5 w-auto"
              alt="discover"
            />
          </div>
          <div>
            <ErrorMessage
              title="Please check the following errors"
              errors={[
                ...(errors.cardNumber === undefined
                  ? []
                  : [errors.cardNumber.message as string]),
                ...(errors.cvv === undefined
                  ? []
                  : [errors.cvv.message as string]),
                ...(errors.expirationDate === undefined
                  ? []
                  : [errors.expirationDate.message as string]),
              ]}
            />
            <Input
              label="Card Number"
              id="cardNumber"
              placeholder="0000 0000 0000 0000"
              type="text"
              className="mb-2"
              disabled={isPending}
              {...register("cardNumber", {
                minLength: 10,
                maxLength: 20,
                required: "This field is required",
                onChange: (e) => {
                  const value = e.target.value
                  const trimmedValue = value.replace(/\s/g, "")
                  const spacedValue = trimmedValue.replace(/(.{4})/g, "$1 ")
                  setValue("cardNumber", String(spacedValue).trim())
                  validateCard()
                },
              })}
            />

            <div className="grid grid-flow-col space-x-2">
              <Input
                label="Expiration date"
                id="expirationDate"
                placeholder="MM/YY"
                type="text"
                disabled={isPending}
                {...register("expirationDate", {
                  minLength: 5,
                  maxLength: 5,
                  required: "This field is required",
                  onChange: (e) => {
                    let value = e.target.value
                    if (e.nativeEvent.inputType === "deleteContentBackward") {
                      value = value.slice(0, -2)
                      setValue("expirationDate", value)
                    } else {
                      value = value.replace(/\//g, "")
                      const slashValue = value.replace(/(.{2})/g, "$1/")
                      const newValue = String(slashValue).trim()
                      if (newValue.length > 5) {
                        setValue("expirationDate", newValue.slice(0, -1))
                        validateExpirationDate()
                      } else {
                        setValue("expirationDate", newValue.trim())
                        validateExpirationDate()
                      }
                    }
                  },
                })}
              />
              <Input
                label="CVV"
                id="cvv"
                type="number"
                placeholder="123"
                disabled={isPending}
                {...register("cvv", {
                  minLength: 3,
                  maxLength: 3,
                  required: "This field is required",
                  onChange: () => validateCvv(),
                })}
              />
            </div>
          </div>
          <Input
            label="Zip code"
            id="zipCode"
            type="number"
            disabled={isPending}
            {...register("zipCode", {
              minLength: 4,
              required: "This field is required",
            })}
          />
          <div>
            <Select {...register("countryRegion")} label="Country" required>
              <Option value={""}>Select Country</Option>
              {COUNTRIES.map((country) => (
                <Option key={country.code} value={country.code}>
                  {country.name}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <ModalContainerFooter
          isPending={isPending}
          isSubmit={true}
          positive="Save"
          negative="Cancel"
          onClose={onClose}
          buttonFn={() => null}
        />
      </form>
    </ModalContainer>
  )
}

export default AddCardDetailModal
