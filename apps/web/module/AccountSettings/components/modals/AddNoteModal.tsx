import ModalContainer from "@/common/components/ModalContainer"
import ModalContainerFooter from "@/common/components/ModalContainer/ModalContainerFooter"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"
import { Dialog, Transition } from "@headlessui/react"
import { ExclamationCircleIcon, StarIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import React, { Fragment, useEffect, useRef, useState } from "react"
import PriceBreakdownModal from "./PriceBreakdownModal"
import { IPrice, IWishGroup } from "@/common/types/global"
import { useForm } from "react-hook-form"
import useAddEditWishListNote from "../../hooks/useAddEditWishListNote"
import useSessionStore from "@/common/store/useSessionStore"
import toast from "react-hot-toast"
import { useQueryClient } from "@tanstack/react-query"

interface AddNoteProps {
  id: number
  isOpen: boolean
  img: string
  title: string
  address: string
  description: string
  price: IPrice
  note: string
  onClose: () => void
}
const AddNoteModal = ({
  id,
  isOpen,
  img,
  title,
  note,
  address,
  description,
  price,
  onClose,
}: AddNoteProps) => {
  const cancelButtonRef = useRef(null)
  const [inputValue, setInputValue] = useState("")
  const session = useSessionStore((state) => state)
  const handleTextAreaChange = (event: { target: { value: any } }) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }
  const queryClient = useQueryClient()
  const { mutate, isPending } = useAddEditWishListNote(session.id as number, id)
  const { register, reset, handleSubmit } = useForm<IWishGroup>()

  useEffect(() => {
    if (isOpen) {
      reset()
    }
  }, [isOpen, reset])
  const onSubmit = (formData: IWishGroup) => {
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          queryClient.invalidateQueries({
            queryKey: ["wish-group"],
          })
          toast.success(data.message)
        } else {
          toast.error(String(data.message))
        }
      },
      onError: (err: any) => {
        toast.error(String(err))
      },
    }
    mutate({ ...formData }, callBackReq)
  }
  return (
    <Transition.Root show={isOpen} as="div">
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
          <div className="fixed inset-0 bg-slate-700 bg-opacity-50 backdrop-blur-sm transition-opacity" />
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-[720px] ">
                <ModalContainer key={id} onClose={onClose} title="Add a note">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="p-10 grid grid-cols-2 gap-5 items-center">
                      <div className="h-72 rounded-2xl relative select-none">
                        <Image
                          src={img}
                          width={300}
                          height={300}
                          alt=""
                          className="object-cover h-full w-full rounded-xl"
                        />
                      </div>
                      <div className="flex flex-col justify-between h-full">
                        <div className="flex-1 -space-y-1 w-auto">
                          <div className="flex justify-between">
                            <Title
                              size={"ContentTitle"}
                              className="text-text-500"
                            >
                              {title}
                            </Title>
                            <div className="flex text-text-500 place-items-center gap-1">
                              <StarIcon className="h-4 w-auto" />
                              5.0 <span className="text-text-400">(123)</span>
                            </div>
                          </div>
                          <Typography variant={"h5"} className="text-text-300">
                            {address}
                          </Typography>
                          <Typography variant={"h5"} className="text-text-300">
                            {description}
                          </Typography>
                          <Typography
                            variant={"p"}
                            fontWeight={"semiBold"}
                            className="text-text-700 flex items-start"
                          >
                            ₱{price.fee}{" "}
                            <span className="text-text-400 ml-1 mr-2">
                              {" "}
                              {price.isNight ? "night" : ""}
                            </span>{" "}
                            <PriceBreakdownModal
                              buttonTitle={
                                "₱" +
                                (price.fee +
                                  price.cleaningFee +
                                  price.serviceFee) +
                                " total"
                              }
                              price={price}
                            />
                          </Typography>
                        </div>
                        <textarea
                          rows={7}
                          id={String(id)}
                          {...register("note")}
                          className={`text-sm block w-full resize-none bg-transparent rounded-lg ${
                            inputValue.replace(/\s/g, "").length > 250
                              ? "border-error-400 border-2 focus:border-error-400 focus:ring-error-400 ring-error-400"
                              : "focus:border-text-500 border-2 focus:ring-text-500"
                          }`}
                          placeholder="Add a note"
                          onChange={handleTextAreaChange}
                          defaultValue={note}
                        />
                        <div className="flex justify-between">
                          <Typography
                            variant={"h6"}
                            fontWeight={"bold"}
                            className={`${
                              inputValue.replace(/\s/g, "").length > 250
                                ? "text-error-400 mt-2"
                                : "text-text-400 mt-2"
                            }`}
                          >
                            {inputValue.replace(/\s/g, "").length}/250
                            characters
                          </Typography>
                          {inputValue.replace(/\s/g, "").length > 250 && (
                            <Typography
                              variant={"h6"}
                              fontWeight={"bold"}
                              className={`flex items-center ${
                                inputValue.replace(/\s/g, "").length > 250
                                  ? "text-error-400 mt-2"
                                  : "text-text-400 mt-2"
                              }`}
                            >
                              <ExclamationCircleIcon className="h-5 w-auto" />
                              Over character limit
                            </Typography>
                          )}
                        </div>
                      </div>
                    </div>

                    <ModalContainerFooter
                      positive="Save"
                      negative="Cancel"
                      isSubmit={true}
                      isPending={isPending}
                      buttonFn={() => null}
                    />
                  </form>
                </ModalContainer>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default AddNoteModal
