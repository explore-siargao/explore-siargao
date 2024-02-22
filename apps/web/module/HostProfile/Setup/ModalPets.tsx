import ModalContainer from "@/common/components/ModalContainer"
import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"

interface ModalPetsProps {
  isOpen: boolean
  onClose: () => void
}

const ModalPets = ({ isOpen, onClose }: ModalPetsProps) => {
  return (
    <div>
      <ModalContainer size="sm" isOpen={isOpen} onClose={onClose}>
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
      </ModalContainer>
    </div>
  )
}

export default ModalPets
