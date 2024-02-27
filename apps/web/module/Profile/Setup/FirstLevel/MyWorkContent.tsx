import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Typography } from "@/common/components/ui/Typography"
import { Dispatch } from "react"
import toast from "react-hot-toast"
import useFirstLevelStore from "../store/useFirstLevelStore"
import InputMaxLength from "@/common/helpers/InputMaxLength"

const MyWorkContent = ({ setIsOpen }: { setIsOpen: Dispatch<boolean> }) => {
  const { value: workName, onChange: handleInputChange } = InputMaxLength(
    "",
    20
  )
  const setWorkNameStore = useFirstLevelStore((state) => state.setWorkName)
  const save = () => {
    if (workName) {
      setWorkNameStore(workName)
      toast.success("Saved")
    } else {
      toast.error("Please fill out the form")
    }
  }

  return (
    <>
      <div className="p-5">
        <Typography variant="h1" className="font-semibold mb-2 mt-5">
          What do you do for work?
        </Typography>
        <Typography variant="h3" className="text-text-400">
          Tell us what your profession is. If you don’t have a traditional job,
          tell us your life’s calling. Example: Nurse, parent to four kids, or
          retired surfer.{" "}
          <button className="font-semibold underline">
            Where is this shown?
          </button>
        </Typography>

        <div className="mt-10 mb-5">
          <Input label="My work:" onChange={handleInputChange} maxLength={20} />
          <Typography
            variant="p"
            className="flex items-end justify-end font-semibold text-text-400"
          >
            {workName.length}/20 characters
          </Typography>
        </div>
      </div>
      <div className="border-t" />
      <div className="flex items-end justify-end p-5">
        <Button size="lg" variant="primary" onClick={() => save()}>
          Save
        </Button>
      </div>
    </>
  )
}

export default MyWorkContent