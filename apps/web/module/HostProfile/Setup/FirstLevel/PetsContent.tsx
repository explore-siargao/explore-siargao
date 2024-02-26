import { Dispatch } from "react"
import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"

import { Typography } from "@/common/components/ui/Typography"
import useFirstLevelStore from "../store/useFirstLevelStore"
import toast from "react-hot-toast"
import InputMaxLength from "@/common/helpers/InputMaxLength"

const PetsContent = ({ setIsOpen }: { setIsOpen: Dispatch<boolean> }) => {
  const { value: pets, onChange: handleInputChange } =InputMaxLength("", 40)
  const setPetsStore = useFirstLevelStore((state) => state.setPets)
  const save = () => {
    if (pets) {
      setPetsStore(pets)
      toast.success("Saved")
    } else {
      toast.error("Please fill out the form")
    }
  }
  return (
    <>
      <div className="p-5">
        <Typography variant="h1" className="font-semibold mb-5">
          Do you have any pets in your life?
        </Typography>
        <Typography variant="h3">
          Share any pets you have and their names. Example: My calico cat
          Whiskers, or Leonardo my speedy turtle.
        </Typography>

        <div className="mt-10 mb-10">
          <Input label="Pets:" 
          onChange={handleInputChange}
          maxLength={40}/>
          <Typography
            variant="p"
            className="flex items-end justify-end font-semibold"
          >
            {pets.length}/40 characters
          </Typography>
        </div>
        <div className="flex items-end justify-end">
          <Button size="lg" variant="primary" onClick={() => save()}>
            Save
          </Button>
        </div>
      </div>
    </>
  )
}

export default PetsContent
