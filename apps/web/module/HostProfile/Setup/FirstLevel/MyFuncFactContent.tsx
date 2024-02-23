import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Typography } from "@/common/components/ui/Typography"
import { Dispatch, useState } from "react"
import useFirstLevelStore from "../store/useFirstLevelStore"
import toast from "react-hot-toast"

const MyFunFactContent = ({ setIsOpen }: { setIsOpen: Dispatch<boolean> }) => {
  const [funFact, setFunFact] = useState("")
  const setFunFactStore = useFirstLevelStore((state) => state.setFunFact)
  const save = () => {
    if (funFact) {
      setFunFactStore(funFact)
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
          What’s a fun fact about you?
        </Typography>
        <Typography variant="h3">
          Share something unique or unexpected about you. Example: I was in a
          music video or I’m a juggler.
        </Typography>

        <div className="mt-10 mb-10">
          <Input label="My fun fact:" 
          onChange={(e) => setFunFact(e.target.value)}/>
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

export default MyFunFactContent
