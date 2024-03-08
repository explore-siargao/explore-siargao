import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Typography } from "@/common/components/ui/Typography"
import { Dispatch } from "react"
import toast from "react-hot-toast"
import InputMaxLength from "@/common/helpers/InputMaxLength"
import useProfileEditStore from "../store/useProfileEditStore"

const MyBiographyTitleContent = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<boolean>
}) => {
  const { value: biography, onChange: handleInputChange } = InputMaxLength(
    "",
    40
  )
  const setBiographyStore = useProfileEditStore((state) => state.setBiography)
  const bio = useProfileEditStore((state) => state.biography)
  const save = () => {
    if (biography) {
      setBiographyStore(biography)
      setIsOpen(false)
      toast.success("Saved")
    } else {
      setIsOpen(false)
    }
  }
  return (
    <div>
      <div className="p-5">
        <Typography variant="h2" className="font-semibold mb-5">
          What would your biography title be?
        </Typography>
        <Typography variant="h5">
          If someone wrote a book about your life, what would they call it?
          Example: Born to Roam or Chronicles of a Dog Mom.
        </Typography>

        <div className="mt-6">
          <Input
            label="My biography title would be:"
            onChange={handleInputChange}
            maxLength={40}
            defaultValue={bio}
          />
          <Typography
            variant="h6"
            className="flex items-end justify-end font-semibold text-text-400 mt-3"
          >
            {biography.length}/40 characters
          </Typography>
        </div>
      </div>
      <div className="border-t" />
      <div className="flex items-end justify-end p-5">
        <Button size="lg" variant="primary" onClick={() => save()}>
          Save
        </Button>
      </div>
    </div>
  )
}

export default MyBiographyTitleContent
