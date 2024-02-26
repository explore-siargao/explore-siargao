import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Typography } from "@/common/components/ui/Typography"
import { Dispatch } from "react"
import useFirstLevelStore from "../store/useFirstLevelStore"
import toast from "react-hot-toast"
import InputMaxLength from "@/common/helpers/InputMaxLength"

const SpendTooMuchTimeContent = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<boolean>
}) => {
  const { value: spendTooMuchTime, onChange: handleInputChange } =
    InputMaxLength("", 40)
  const setSpendTooMuchTimeStore = useFirstLevelStore(
    (state) => state.setSpendTooMuchTime
  )
  const save = () => {
    if (spendTooMuchTime) {
      setSpendTooMuchTimeStore(spendTooMuchTime)
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
            What do you spend too much time doing?
          </Typography>
          <Typography variant={"h3"}>
            Share an activity or hobby you spend lots of free time on. Example:
            Watching cat videos or playing chess.
          </Typography>

          <div className="mt-10 mb-10">
            <Input
              label="I spend too much time:"
              onChange={handleInputChange}
              maxLength={40}
            />
            <Typography
              variant="p"
              className="flex items-end justify-end font-semibold"
            >
              {spendTooMuchTime.length}/40 characters
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

export default SpendTooMuchTimeContent
