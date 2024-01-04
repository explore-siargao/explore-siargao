import ModalContainer from "@/common/components/ModalContainer"
import { Input } from "@/common/components/ui/Input"
import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useRef, useState } from "react"
import Image from "next/image"
import ModalContainerFooter from "@/common/components/ModalContainer/ModalContainerFooter"
import { Typography } from "@/common/components/ui/Typography"
import { Title } from "@/common/components/ui/Title"
import { Button } from "@/common/components/ui/Button"

interface AddWishlistProps {
  isOpen: boolean
  onClose: () => void
}
const wishlist = [
  {
    id: 1,
    name: "My wishlist",
    savedCount: "7 saved",
    pic: "http://localhost:3000/1.jpg",
  },
  {
    id: 2,
    name: "My wishlist",
    savedCount: "7 saved",
    pic: "http://localhost:3000/2.jpg",
  },
  {
    id: 3,
    name: "My wishlist",
    savedCount: "7 saved",
    pic: "http://localhost:3000/3.jpg",
  },
  {
    id: 4,
    name: "My wishlist",
    savedCount: "7 saved",
    pic: "http://localhost:3000/4.jpg",
  },
]
const AddWishlistModal = ({ isOpen, onClose }: AddWishlistProps) => {
  const cancelButtonRef = useRef(null)
  const [modalState, setModalState] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const handleTextAreaChange = (event: { target: { value: any } }) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }
  const renderAddToWishlist = () => {
    return (
      <ModalContainer title="Add to wishlist" onClose={onClose}>
        <div className="p-6 grid grid-cols-2 max-h-[550px] overflow-y-auto">
          {wishlist.map((item) => (
            <div className="flex flex-col" key={item.id}>
              <div className="h-60 w-60 rounded-3xl relative border border-text-100">
                <Image
                  src={item.pic}
                  width={300}
                  height={300}
                  alt="photo"
                  className="object-cover h-full w-full rounded-3xl p-1"
                />
              </div>
              <div className="flex-1 ml-1 -space-y-1 w-auto">
                <Title size={"ContentTitle"} className="text-text-500">
                  {item.name}
                </Title>
                <Typography className="text-text-300">
                  {item.savedCount}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full p-5">
          <Button className="w-full" onClick={() => setModalState(1)}>
            Create new wishlist
          </Button>
        </div>
      </ModalContainer>
    )
  }
  const renderCreateWishlist = () => {
    return (
      <ModalContainer title="Create wishlist" onClose={() => setModalState(0)}>
        <div className="p-6">
          <Input
            inputLabel="Name"
            inputId="name"
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
          </Typography>{" "}
        </div>
        <ModalContainerFooter
          isPending={false}
          isSubmit={true}
          positive="Create"
          negative="clear"
          buttonFn={() => null}
        />
      </ModalContainer>
    )
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
                {modalState === 0 ? renderAddToWishlist : renderCreateWishlist}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default AddWishlistModal
