import ModalContainer from "@/common/components/ModalContainer"
import { Input } from "@/common/components/ui/Input"
import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useRef, useState } from "react"
import Image from "next/image"
import ModalContainerFooter from "@/common/components/ModalContainer/ModalContainerFooter"
import { Typography } from "@/common/components/ui/Typography"
import { Title } from "@/common/components/ui/Title"
import { Button } from "@/common/components/ui/Button"
import useAddWishGroup from "../../hooks/useAddWishGroup"
import useSessionStore from "@/common/store/useSessionStore"
import { useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"
import { IWishGroup } from "@/common/types/global"
import useWishGroupWithCount from "../../hooks/useGetWishGroupWithCount"
import { Spinner } from "@/common/components/ui/Spinner"
import useAddToExistingWishGroup from "../../hooks/useAddToExistingWishGroup"

interface AddWishlistProps {
  listingId: number
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

const AddWishlistModal = ({
  listingId,
  isOpen: showModal,
  onClose: hideModal,
}: AddWishlistProps) => {
  const userId = useSessionStore((state) => state).id
  const cancelButtonRef = useRef(null)
  const [renderState, setRenderState] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const handleTextAreaChange = (event: { target: { value: any } }) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }
  const queryClient = useQueryClient()
  const { register, getValues } = useForm<IWishGroup>()
  const { mutate, isPending: addWishgroupIsPending } = useAddWishGroup(
    userId as number
  )
  const { data: wishGroup, isPending: wishGroupIsPending } =
    useWishGroupWithCount(userId as number)
  const { mutate: addExistingWishGroup } = useAddToExistingWishGroup(
    userId as number
  )
  const callBackReq = {
    onSuccess: (data: any) => {
      if (!data.error) {
        queryClient.invalidateQueries({
          queryKey: ["wish-group-count"],
        })
        hideModal()
        toast.success("Wish Group Successfully Created")
      } else {
        toast.error(String(data.message))
      }
    },
    onError: (err: any) => {
      toast.error(String(err))
    },
  }
  const addToExistingGroup = (title: string) => {
    addExistingWishGroup({ title: title, listingId: listingId }, callBackReq)
  }

  const renderAddToWishlist = () => {
    return (
      <ModalContainer title="Add to wishlist" onClose={hideModal}>
        {wishGroupIsPending ? (
          <Spinner
            variant={"primary"}
            size={"lg"}
            className="mx-auto my-auto d-blockr"
          >
            Loading...
          </Spinner>
        ) : (
          <div className="p-6 grid grid-cols-2 max-h-[550px] overflow-y-auto">
            {wishGroup?.item?.map((item: any, index: number) => (
              <button
                type="button"
                aria-label="button"
                className="flex flex-col"
                key={item.title}
                onClick={() => addToExistingGroup(item.title)}
              >
                <div className="h-60 w-60 rounded-3xl relative border border-text-100">
                  <Image
                    src={JSON.parse(item?.imageUrl)[0].url}
                    width={300}
                    height={300}
                    alt="photo"
                    className="object-cover h-full w-full rounded-3xl p-1"
                  />
                </div>
                <div className="flex-1 ml-1 -space-y-1 w-auto">
                  <Title size={"ContentTitle"} className="text-text-500">
                    {item.title}
                  </Title>
                  <Typography className="text-text-300">
                    {item._count + " saved"}
                  </Typography>
                </div>
              </button>
            ))}
          </div>
        )}
        <div className="w-full p-5">
          <Button className="w-full" onClick={() => setRenderState(1)}>
            Create new wishlist
          </Button>
        </div>
      </ModalContainer>
    )
  }
  const createNewWishGroup = () => {
    mutate({ title: getValues("title"), listingId: listingId }, callBackReq)
  }

  const renderCreateWishlist = (listingId: number) => {
    return (
      <ModalContainer title="Create wishlist" onClose={() => setRenderState(0)}>
        <div className="p-6">
          <Input
            label="Name"
            id="createModal"
            {...register("title", { required: "This field is required" })}
            disabled={addWishgroupIsPending}
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
          isPending={addWishgroupIsPending}
          isSubmit={false}
          positive="Create"
          negative="clear"
          buttonFn={() => createNewWishGroup()}
        />
      </ModalContainer>
    )
  }

  return (
    <Transition.Root show={showModal} as="div">
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
                {renderState === 0
                  ? renderAddToWishlist
                  : renderCreateWishlist(listingId)}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default AddWishlistModal
