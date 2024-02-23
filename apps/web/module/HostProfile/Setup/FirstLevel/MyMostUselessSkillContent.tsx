import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Typography } from "@/common/components/ui/Typography"
import { Dispatch, useState } from "react"
import useFirstLevelStore from "../store/useFirstLevelStore"
import toast from "react-hot-toast"

const MyMostUselessSkillContent = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<boolean>
}) => {
  const [uselessSkill, setUselessSkill] = useState("")
  const setUselessSkillStore = useFirstLevelStore((state) => state.setWorkName)
  const save = () => {
    if (uselessSkill) {
      setUselessSkillStore(uselessSkill)
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
          What’s your most useless skill?
        </Typography>
        <Typography variant="h3">
          Share a surprising but pointless talent you have. Example: Shuffling
          cards with one hand.
        </Typography>

        <div className="mt-10 mb-10">
          <Input label="My most useless skill:" 
          onChange={(e) => setUselessSkill(e.target.value)}/>
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
    </>
  )
}

export default MyMostUselessSkillContent
