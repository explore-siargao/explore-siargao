import ModalContainer from "@/common/components/ModalContainer"
import { Input } from "@/common/components/ui/Input"
import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useRef } from "react"
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
import { Typography } from "@/common/components/ui/Typography"
import ErrorMessage from "../ui/ErrorMessage"

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
  const cancelButtonRef = useRef(null)
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
        console.log(validateNumber.isValid)
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
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center sm:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <ModalContainer
                    title="Add card details"
                    onClose={onClose}
                    positive="Save"
                    negative="Cancel"
                    isPending={isPending}
                    isSubmit={true}
                    onClick={() => null}
                  >
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
                        {/* <ErrorMessage
                          errors={errors}
                          name="cardNumber"
                          render={() => (
                            <Typography className="text-red-500">
                              {errors.cardNumber?.message}
                            </Typography>
                          )}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="cvv"
                          render={() => (
                            <Typography className="text-red-500">
                              {errors.cvv?.message}
                            </Typography>
                          )}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="expirationDate"
                          render={() => (
                            <Typography className="text-red-500">
                              {errors.expirationDate?.message}
                            </Typography>
                          )}
                        /> */}

                        <ErrorMessage title="Please check the following errors" errors={[
                          ...errors.cardNumber===undefined ? []:[errors.cardNumber.message as string],
                          ...errors.cvv===undefined ? []:[errors.cvv.message as string],
                          ...errors.expirationDate===undefined ? []:[errors.expirationDate.message as string],
                        ]} />
                        <Input
                          inputLabel="Card Number"
                          inputId="cardNumber"
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
                              const spacedValue = trimmedValue.replace(
                                /(.{4})/g,
                                "$1 "
                              )
                              setValue("cardNumber", String(spacedValue).trim())
                              validateCard()
                            },
                          })}
                        />

                        <div className="grid grid-flow-col space-x-2">
                          <Input
                            inputLabel="Expiration date"
                            inputId="expirationDate"
                            type="text"
                            disabled={isPending}
                            {...register("expirationDate", {
                              minLength: 5,
                              maxLength: 5,
                              required: "This field is required",
                              onChange: (e) => {
                                let value = e.target.value
                                if (
                                  e.nativeEvent.inputType ===
                                  "deleteContentBackward"
                                ) {
                                  value = value.slice(0, -2)
                                  setValue("expirationDate", value)
                                } else {
                                  value = value.replace(/\//g, "")
                                  const slashValue = value.replace(
                                    /(.{2})/g,
                                    "$1/"
                                  )
                                  const newValue = String(slashValue).trim()
                                  if (newValue.length > 5) {
                                    setValue(
                                      "expirationDate",
                                      newValue.slice(0, -1)
                                    )
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
                            inputLabel="CVV"
                            inputId="cvv"
                            type="number"
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
                        inputLabel="Zip code"
                        inputId="zipCode"
                        type="number"
                        disabled={isPending}
                        {...register("zipCode", {
                          minLength: 4,
                          required: "This field is required",
                        })}
                      />
                      <select
                        id="countries"
                        disabled={isPending}
                        className=" text-text-900 focus:ring-gray-900  focus:ring-2  focus:border-transparent text-sm rounded-lg block h-14 w-full"
                        {...register("countryRegion", {
                          required: "This field is required",
                        })}
                      >
                        <option value="">Country/Region</option>
                        <option value="US">United state</option>
                        <option value="Ph">Philippines</option>
                        <option value="CH">China</option>
                        <option value="ITALIAN">Italian</option>
                      </select>
                    </div>
                  </ModalContainer>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default AddCardDetailModal
