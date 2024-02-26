import { Button } from "@/common/components/ui/Button"
import { Typography } from "@/common/components/ui/Typography"
import Image from "next/image"
import React, { useState } from "react"
import { FileWithPath } from "react-dropzone"
import toast from "react-hot-toast"
import { E_GovernmentId } from "@repo/contract/build/GovernmentId/enum"
import { T_BackendResponse } from "@repo/contract"
import useAddGovernmentId from "@/module/AccountSettings/hooks/useAddGovernmentId"
import useSessionStore from "@/common/store/useSessionStore"
import { Camera } from "lucide-react"

const SetupProfileImage = () => {
  const session = useSessionStore((state) => state)
  const [idType, setIdType] = useState<E_GovernmentId | null>(null)
  const [file, setFile] = useState<(FileWithPath & { preview: string }) | null>(
    null
  )
  const { mutate, isPending } = useAddGovernmentId(session.id as number)

  const handleUpdateUserImage = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "image/jpeg, image/png"
    input.onchange = (event: any) => {
      const selectedFile = event.target.files[0]
      if (selectedFile) {
        setFile(
          Object.assign(selectedFile, {
            preview: URL.createObjectURL(selectedFile),
          })
        )
      }
    }
    input.click()

    if (!idType || !file) {
      // toast.error("Please add image")
    } else {
      const callBackReq = {
        onSuccess: (data: T_BackendResponse) => {
          if (!data.error) {
            setFile(null)
            toast.success("Profile photo uploaded")
          } else {
            toast.error(String(data.message))
          }
        },
        onError: (err: any) => {
          toast.error(String(err))
        },
      }
      mutate({ type: idType, file }, callBackReq)
    }
  }

  console.log("ID type:", idType)
  console.log("File:", file)
  console.log("isPending:", isPending)

  return (
    <div className="grid py-5 justify-start">
      <div className="w-full my-4 flex flex-col items-center relative">
        <div className="relative mb-4">
          <div className="relative h-60 w-60 rounded-full overflow-hidden border-4 border-white">
            <Image
              src={file?.preview ?? "/assets/1.jpg"}
              alt={`preview-${idType}`}
              width={128}
              height={128}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 mb-2">
          <Button
            onClick={handleUpdateUserImage}
            disabled={isPending}
            variant="ghost"
            size="default"
            className="flex gap-1 bg-gray-100 shadow-xl rounded-full"
          >
            <Camera color="black" size={20} />
            <Typography variant="h4" fontWeight="semibold">
              {file ? "Edit" : "Add"}
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SetupProfileImage
