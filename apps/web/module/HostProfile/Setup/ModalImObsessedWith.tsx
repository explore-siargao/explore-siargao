import ModalContainer from "@/common/components/ModalContainer"
import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"

interface ModalImObsessedWithProps {
  isOpen: boolean
  onClose: () => void
}

const ModalImObsessedWith = ({ isOpen, onClose }: ModalImObsessedWithProps) => {
  return (
    <div>
      <ModalContainer size="sm" isOpen={isOpen} onClose={onClose}>
        <div className="p-5">
          <Title size={"default"}>What are you obsessed with?</Title>
          <Typography variant={"h3"}>
            Share whatever you can’t get enough of—in a good way. Example:
            Baking rosemary focaccia.
          </Typography>

          <div className="mt-10 mb-10">
            <Input label="I'm obsessed with:" />
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

export default ModalImObsessedWith
