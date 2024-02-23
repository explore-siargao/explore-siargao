import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Typography } from "@/common/components/ui/Typography"
import { Dispatch, useState } from "react"
import useFirstLevelStore from "../store/useFirstLevelStore"
import toast from "react-hot-toast"

const MyBiographyTitleContent = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<boolean>
}) => {
  const [biography, setBiography] = useState("")
  const setBiographyStore = useFirstLevelStore((state) => state.setBiography)
  const save = () => {
    if (biography) {
      setBiographyStore(biography)
      toast.success("Saved")
    } else {
      toast.error("Please fill out the form")
    }
  }
  return (
    <div>
      <div className="p-5">
        <Typography variant="h1" className="font-semibold mb-5">
          What would your biography title be?
        </Typography>
        <Typography variant="h3">
          If someone wrote a book about your life, what would they call it?
          Example: Born to Roam or Chronicles of a Dog Mom.
        </Typography>

        <div className="mt-10 mb-10">
          <Input label="My biography title would be:" 
          onChange={(e) => setBiography(e.target.value)}/>
          <Typography
            variant="p"
            className="flex items-end justify-end font-semibold"
          >
            0/40 characters
          </Typography>
        </div>
        <div className="flex items-end justify-end">
          <Button size="lg" variant="primary" onClick={() => save()}>
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MyBiographyTitleContent
