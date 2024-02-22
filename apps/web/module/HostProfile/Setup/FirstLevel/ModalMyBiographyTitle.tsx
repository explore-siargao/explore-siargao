import ModalContainer from "@/common/components/ModalContainer"
import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"

interface ModalMyBiographyTitleProps {
  isOpen: boolean
  onClose: () => void
}

const ModalMyBiographyTitle = ({
  isOpen,
  onClose,
}: ModalMyBiographyTitleProps) => {
  return (
    <div>
      <ModalContainer size="sm" isOpen={isOpen} onClose={onClose}>
        <div className="p-5">
          <Title size={"default"}>What would your biography title be?</Title>
          <Typography variant={"h3"}>
          If someone wrote a book about your life, what would they call it? Example: Born to Roam or Chronicles of a Dog Mom.
          </Typography>

          <div className="mt-10 mb-10">
            <Input label="My biography title would be:" />
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

export default ModalMyBiographyTitle
