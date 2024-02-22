import { Dispatch } from "react"
import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"

const PetsContent = ({ setIsOpen }: { setIsOpen: Dispatch<boolean> }) => {
  return (
    <>
      <div className="p-5">
        <Title size={"default"}>Do you have any pets in your life?</Title>
        <Typography variant={"h3"}>
          Share any pets you have and their names. Example: My calico cat
          Whiskers, or Leonardo my speedy turtle.
        </Typography>

        <div className="mt-10 mb-10">
          <Input label="Pets:" />
          <Typography
            variant={"p"}
            className="flex items-end justify-end font-semibold"
          >
            0/40 characters
          </Typography>
        </div>
        <div className="flex items-end justify-end">
          <Button size={"lg"} variant={"primary"}>
            Save
          </Button>
        </div>
      </div>
    </>
  )
}

export default PetsContent
