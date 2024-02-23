import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Typography } from "@/common/components/ui/Typography"
import { Dispatch, useState } from "react"
import useFirstLevelStore from "../store/useFirstLevelStore"
import toast from "react-hot-toast"

const ObsessedWithContent = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<boolean>
}) => {
  const [obsessedWith, setObsessedWith] = useState("")
  const setObsessedWithStore = useFirstLevelStore((state) => state.setObsessedWith)
  const save = () => {
    if (obsessedWith) {
      setObsessedWithStore(obsessedWith)
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
          What are you obsessed with?
        </Typography>
        <Typography variant="h3">
          Share whatever you can’t get enough of—in a good way. Example: Baking
          rosemary focaccia.
        </Typography>

        <div className="mt-10 mb-10">
          <Input label="I'm obsessed with:" 
          onChange={(e) => setObsessedWith(e.target.value)}/>
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

export default ObsessedWithContent
