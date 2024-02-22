import ModalContainer from "@/common/components/ModalContainer"
import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"

interface ModalFunFactProps {
  isOpen: boolean
  onClose: () => void
}

const ModalFunFact = ({ isOpen, onClose }: ModalFunFactProps) => {
  return (
    <div>
      <ModalContainer size="sm" isOpen={isOpen} onClose={onClose}>
        <div className="p-5">
          <Title size={"default"}>What’s a fun fact about you?</Title>
          <Typography variant={"h3"}>
            Share something unique or unexpected about you. Example: I was in a
            music video or I’m a juggler.
          </Typography>

          <div className="mt-10 mb-10">
            <Input label="My fun fact:" />
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

export default ModalFunFact
