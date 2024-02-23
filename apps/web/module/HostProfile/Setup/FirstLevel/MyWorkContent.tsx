import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Typography } from "@/common/components/ui/Typography"
import { Dispatch, useState } from "react"
import toast from "react-hot-toast"
import useFirstLevelStore from "../store/useFirstLevelStore"

const MyWorkContent = ({ setIsOpen }: { setIsOpen: Dispatch<boolean> }) => {
  const [workName, setWorkName] = useState("")
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
    <div>
      <div className="p-5">
        <Typography variant="h1" className="font-semibold mb-5">
          What do you do for work?
        </Typography>
        <Typography variant="h3">
          Tell us what your profession is. If you don’t have a traditional job,
          tell us your life’s calling. Example: Nurse, parent to four kids, or
          retired surfer.{" "}
          <button className="font-semibold underline">
            Where is this shown?
          </button>
        </Typography>

        <div className="mt-10 mb-10">
          <Input label="My work:" 
          onChange={(e) => setWorkName(e.target.value)}/>
          <Typography
            variant="p"
            className="flex items-end justify-end font-semibold"
          >
            0/20 characters
          </Typography>
        </div>
        <div className="flex items-end justify-end">
          <Button size="lg" variant="primary" onClick={() => save()}>
            Save
          </Button>
        </div>
      </div>
    </div>
    </>
  )
}

export default MyWorkContent
