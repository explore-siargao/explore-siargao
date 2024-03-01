import ModalContainer from "@/common/components/ModalContainer"
import { Button } from "@/common/components/ui/Button"
import { Typography } from "@/common/components/ui/Typography"
import useChangeToHost from "../hooks/useChangeToHost"
import { Spinner } from "@/common/components/ui/Spinner"
import { useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

interface ISetUpProfileAboutYouModalProps {
  isModalOpen: boolean
  onClose: () => void
}

const ApplyToHostModal = ({
  isModalOpen,
  onClose,
}: ISetUpProfileAboutYouModalProps) => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const callBackReq = {
    onSuccess: (data: any) => {
      if (!data.error) {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        })
        onClose()
        toast.success(data.message)
        router.push("/hosting")
      } else {
        toast.error(String(data.message))
        onClose()
      }
    },
    onError: (err: any) => {
      toast.error(String(err))
    },
  }
  const { mutate, isPending } = useChangeToHost()
  return (
    <ModalContainer
      onClose={onClose}
      isOpen={isModalOpen}
      size="sm"
      title="Apply to Host"
    >
      <div className="py-4 px-6 flex flex-col divide-text-100 overflow-y-auto">
        <Typography variant="p" className="pt-2 pb-4">
          <i>
            By clicking the Proceed button below, your regular account will have
            the capabilities of a Host Account and you can switch to Host and
            Regular Account anytime you want.
          </i>
        </Typography>
        <div className="flex items-center md:pt-4 bottom-0 border-t border-gray-200 rounded-b dark:border-gray-600">
          <div className="flex justify-between w-full">
            <Button
              variant="primary"
              className="ml-auto"
              onClick={() => mutate(undefined, callBackReq)}
            >
              {isPending ? <Spinner size="sm">Loading...</Spinner> : "Proceed"}
            </Button>
          </div>
        </div>
      </div>
    </ModalContainer>
  )
}

export default ApplyToHostModal
