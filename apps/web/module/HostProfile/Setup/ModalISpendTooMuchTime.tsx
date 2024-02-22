import ModalContainer from "@/common/components/ModalContainer"
import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"

interface ModalISpendTooMuchTimeProps {
  isOpen: boolean
  onClose: () => void
}

const ModalISpendTooMuchTime = ({
  isOpen,
  onClose,
}: ModalISpendTooMuchTimeProps) => {
  return (
    <div>
      <ModalContainer size="sm" isOpen={isOpen} onClose={onClose}>
        <div className="p-5">
          <Title size={"default"}>What do you spend too much time doing?</Title>
          <Typography variant={"h3"}>
            Share an activity or hobby you spend lots of free time on. Example:
            Watching cat videos or playing chess.
          </Typography>

          <div className="mt-10 mb-10">
            <Input label="I spend too much time:" />
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

export default ModalISpendTooMuchTime
