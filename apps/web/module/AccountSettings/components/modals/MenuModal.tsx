import ModalContainer from "@/common/components/ModalContainer"
import ModalContainerFooter from "@/common/components/ModalContainer/ModalContainerFooter"
import { Input } from "@/common/components/ui/Input"
import { Typography } from "@/common/components/ui/Typography"
import { Dialog, Transition } from "@headlessui/react"
import {
  ChevronRightIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/20/solid"
import React, { Fragment, useRef, useState } from "react"

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}
const MenuModal = ({ isOpen: openModal, onClose: hideModal }: MenuProps) => {
  const cancelButtonRef = useRef(null)
  const [modalState, setModalState] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const handleTextAreaChange = (event: { target: { value: any } }) => {
    const newValue = event.target.value
    setInputValue(newValue)
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
            inputLabel="Name"
            inputId="name"
            defaultValue="Wishlist name"
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
          positive="Remove"
          negative="Cancel"
          isPending={false}
          isSubmit={false}
          buttonFn={() => null}
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
            "Wishlist name" will be permanently deleted.
          </Typography>
        </div>
        <ModalContainerFooter
          positive="Delete"
          negative="Cancel"
          isSubmit={false}
          isPending={false}
          buttonFn={() => null}
        />
      </ModalContainer>
    )
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
                {modalState === 0
                  ? renderMenu()
                  : modalState === 1
                    ? renderRename()
                    : renderDelete()}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default MenuModal
