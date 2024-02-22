import ModalContainer from "@/common/components/ModalContainer"
import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"

interface ModalMyMostUselessSkillProps {
  isOpen: boolean
  onClose: () => void
}

const ModalMyMostUselessSkill = ({
  isOpen,
  onClose,
}: ModalMyMostUselessSkillProps) => {
  return (
    <div>
      <ModalContainer size="sm" isOpen={isOpen} onClose={onClose}>
        <div className="p-5">
          <Title size={"default"}>What’s your most useless skill?</Title>
          <Typography variant={"h3"}>
            Share a surprising but pointless talent you have. Example: Shuffling
            cards with one hand.
          </Typography>

          <div className="mt-10 mb-10">
            <Input label="My most useless skill:" />
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

export default ModalMyMostUselessSkill
