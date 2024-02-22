import ModalContainer from "@/common/components/ModalContainer"
import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"

interface ModalWorkProps {
  isOpen: boolean
  onClose: () => void
}

const ModalWork = ({ isOpen, onClose }: ModalWorkProps) => {
  return (
    <div>
      <ModalContainer size="sm" isOpen={isOpen} onClose={onClose}>
        <div className="p-5">
          <Title size={"default"}>What do you do for work?</Title>
          <Typography variant={"h3"}>
            Tell us what your profession is. If you don’t have a traditional
            job, tell us your life’s calling. Example: Nurse, parent to four
            kids, or retired surfer.{" "}
            <button className="font-semibold underline">
              Where is this shown?
            </button>
          </Typography>

          <div className="mt-10 mb-10">
            <Input label="My work:" />
            <Typography
              variant={"p"}
              className="flex items-end justify-end font-semibold"
            >
              0/20 characters
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

export default ModalWork
