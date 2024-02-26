import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Typography } from "@/common/components/ui/Typography"
import useFirstLevelStore from "../store/useFirstLevelStore"
import { Dispatch } from "react"
import toast from "react-hot-toast"
import InputMaxLength from "../../../../common/helpers/InputMaxLength"

const WhereIWentToSchoolContent = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<boolean>
}) => {
  const { value: schoolName, onChange: handleInputChange } = InputMaxLength("", 40)
  const setSchoolNameStore = useFirstLevelStore((state) => state.setSchoolName)
  const save = () => {
    if (schoolName) {
      setSchoolNameStore(schoolName)
      toast.success("Saved")
    } else {
      toast.error("Please fill out the form")
    }
  }

  return (
    <>
      <div className="p-5">
        <Typography variant="h1" className="font-semibold mb-2 mt-5">
          Where did you go to school?
        </Typography>
        <Typography variant="h3" className="text-text-400">
          Whether it’s home school, high school, or trade school, name the
          school that made you who you are.
        </Typography>
        <div className="mt-10 mb-5">
          <Input
            label="Where I went to school:"
            onChange={handleInputChange}
            maxLength={40}
          />
          <Typography
            variant="p"
            className="flex items-end justify-end font-semibold text-text-400"
          >
            {schoolName.length}/40 characters
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

export default WhereIWentToSchoolContent
