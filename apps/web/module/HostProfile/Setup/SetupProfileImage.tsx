import { Button } from "@/common/components/ui/Button"
import { Typography } from "@/common/components/ui/Typography"
import { cn } from "@/common/helpers/cn"
import { useInputSetupProfileAboutYouStore } from "@/module/Profile/Setup/store/useSetupProfileAboutYouStore"
import SetupProfileImageModal from "@/module/Profile/components/modals/SetupProfileImageModal"
import { LucideUndo2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const SetupProfileImage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const { imageFile } = useInputSetupProfileAboutYouStore()
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const gridContainerClass = (...classes: any) => cn("grid", "pt-5", ...classes)
  const circleClass = (...classes: any) =>
    cn("w-full", "my-4", "flex", "flex-col", "relative mb-4", ...classes)
  const innerCircleClass = (...classes: any) =>
    cn(
      "relative",
      "h-40",
      "w-40 rounded-full",
      "overflow-hidden",
      "border-4",
      "border-white",
      
      ...classes
    )

  return (
    <>
    <div className="relative">
     <div className="rounded-full">
      {imageFile ? (
        <div className={gridContainerClass()}>
          <div className={circleClass()}>
            <div className={innerCircleClass()}>
              <Image
                src={URL.createObjectURL(imageFile)}
                alt={`Profile picture`}
                width={40}
                height={40}
                className="object-cover h-full w-full" />
            </div>
          </div>
        </div>
      ) : (
        <div className={gridContainerClass()}>
          <div className={circleClass()}>
            <div className="relative h-40 w-40 rounded-full overflow-hidden border-2 bg-gray-100 border-primary-400 border-dashed">
              <label
                htmlFor="dropzone-file"
                className={cn(
                  "flex flex-col h-64 rounded-full"
                )}
              >
              </label>
            </div>

          </div>

        </div>
      )}

    </div><div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2">
        <Button
          variant="ghost"
          size="default"
          className={cn(
            "flex gap-1 bg-white shadow-xl rounded-full"
          )}
          onClick={openModal}
        >
          <LucideUndo2 color="black" size={20} />
          <Typography variant="h4" fontWeight="semibold">
            Edit
          </Typography>
        </Button>
      </div>
      <SetupProfileImageModal isModalOpen={isModalOpen} onClose={closeModal} />
      </div>
      </>
  )
}

export default SetupProfileImage
