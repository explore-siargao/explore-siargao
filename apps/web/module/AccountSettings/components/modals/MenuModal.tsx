"use client"
import ModalContainer from "@/common/components/ModalContainer"
import ModalContainerFooter from "@/common/components/ModalContainer/ModalContainerFooter"
import { Input } from "@/common/components/ui/Input"
import { Typography } from "@/common/components/ui/Typography"
import useSessionStore from "@/common/store/useSessionStore"
import { Dialog, Transition } from "@headlessui/react"
import {
  ChevronRightIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/20/solid"
import React, { Fragment, useRef, useState } from "react"
import useEditWishGroupTitle from "../../hooks/useEditWishGroupTitle"
import { useForm } from "react-hook-form"
import { IWishGroup } from "@/common/types/global"
import { useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { LINK_ACCOUNT_WISHLIST } from "@/common/constants/links"
import useDeleteWishGroupByTitle from "../../hooks/useDeleteWishGroupByTitle"

interface MenuProps {
  isOpen: boolean
  onClose: () => void
  title: string
}

const MenuModal = ({
  isOpen: openModal,
  onClose: hideModal,
  title,
}: MenuProps) => {
  const cancelButtonRef = useRef(null)
  const [modalState, setModalState] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const handleTextAreaChange = (event: { target: { value: any } }) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  const userId = useSessionStore((state) => state).id
  const { mutate: renameTitle, isPending: renameTitleIsPending } =
    useEditWishGroupTitle(userId)
  const { mutate: deleteWishGroup, isPending: deleteWishGroupIsPending } =
    useDeleteWishGroupByTitle(userId as number, title)
  const { register, getValues } = useForm<IWishGroup>()
  const queryClient = useQueryClient()
  const router = useRouter()
  const callBackReq = {
    onSuccess: (data: any) => {
      if (!data.error) {
        queryClient.invalidateQueries({
          queryKey: ["wish-group-count"],
        })
        router.push(LINK_ACCOUNT_WISHLIST + "/" + getValues("newTitle"))
      } else {
        toast.error(String(data.message))
      }
    },
    onError: (err: any) => {
      toast.error(String(err))
    },
  }

  const callBackReq2 = {
    onSuccess: (data: any) => {
      if (!data.error) {
        queryClient.invalidateQueries({
          queryKey: ["wish-group-count"],
        })
        router.back()
        toast.success(data.message)
        router.push(LINK_ACCOUNT_WISHLIST)
      } else {
        toast.error(String(data.message))
      }
    },
    onError: (err: any) => {
      toast.error(String(err))
    },
  }
  const renameWishListTitle = () => {
    renameTitle(
      { oldTitle: title, newTitle: getValues("newTitle") },
      callBackReq
    )
  }

  const deleteWishGroupFn = () => {
    deleteWishGroup({}, callBackReq2)
  }

  const renderMenu = () => {
    return (
      <ModalContainer onClose={hideModal} title="Settings">
        <div className="p-6 flex flex-col items-center divide-y divide-text-100">
          <button
            onClick={() => setModalState(1)}
            className="flex justify-between w-full py-5"
          >
            <div className="flex">
              <PencilIcon className="h-5 w-auto text-text-400 mr-2" />
              <Typography variant={"h5"}>Rename</Typography>
            </div>
            <ChevronRightIcon className="h-7 w-auto" />
          </button>
          <button
            onClick={() => setModalState(2)}
            className="flex justify-between w-full py-5"
          >
            <div className="flex">
              <TrashIcon className="h-5 w-auto text-text-400 mr-2" />
              <Typography variant={"h5"}>Delete</Typography>
            </div>
            <ChevronRightIcon className="h-7 w-auto" />
          </button>
        </div>
      </ModalContainer>
    )
  }
  const renderRename = () => {
    return (
      <ModalContainer onClose={() => setModalState(0)} title="Rename wishlist">
        <div className="p-6 flex flex-col ">
          <Input
            label="Name"
            {...register("newTitle", { required: "This field is required" })}
            disabled={renameTitleIsPending}
            id="newTitle"
            defaultValue={title}
            className={`w-full ${
              inputValue.replace(/\s/g, "").length > 50 &&
              "ring-error-600 focus-within:z-10 focus-within:ring-2 focus-within:ring-error-600"
            }`}
            onChange={handleTextAreaChange}
          />
          <Typography
            variant={"h6"}
            fontWeight={"bold"}
            className={`${
              inputValue.replace(/\s/g, "").length > 50
                ? "text-error-400 mt-2"
                : "text-text-400 mt-2"
            }`}
          >
            {inputValue.replace(/\s/g, "").length}/50 characters{" "}
          </Typography>
        </div>
        <ModalContainerFooter
          positive="Rename"
          negative="Cancel"
          isPending={renameTitleIsPending}
          isSubmit={false}
          buttonFn={() => renameWishListTitle()}
          onClose={() => setModalState(0)}
        />
      </ModalContainer>
    )
  }
  const renderDelete = () => {
    return (
      <ModalContainer onClose={() => setModalState(0)}>
        <div className="p-6 flex flex-col items-center">
          <Typography variant={"h3"}>Delete this wishlist?</Typography>
          <Typography className="text-text-400 font-light w-60 text-center">
            {'"' + title + '"'} will be permanently deleted.
          </Typography>
        </div>
        <ModalContainerFooter
          positive="Delete"
          negative="Cancel"
          isSubmit={false}
          isPending={deleteWishGroupIsPending}
          buttonFn={() => deleteWishGroupFn()}
          onClose={() => setModalState(0)}
        />
      </ModalContainer>
    )
  }
  const toRender = () => {
    let componentToRender

    if (modalState === 0) {
      componentToRender = renderMenu()
    } else if (modalState === 1) {
      componentToRender = renderRename()
    } else {
      componentToRender = renderDelete()
    }

    return componentToRender
  }
  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={hideModal}
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-md ">
                {toRender}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default MenuModal
