import ModalContainer from "@/common/components/ModalContainer"
import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"

interface ModalSchoolProps {
  isOpen: boolean
  onClose: () => void
}

const ModalSchool = ({ isOpen, onClose }: ModalSchoolProps) => {
  return (
    <div>
      <ModalContainer size="sm" isOpen={isOpen} onClose={onClose}>
        <div className="p-5">
          <Title size={"default"}>Where did you go to school?</Title>
          <Typography variant={"h3"}>
            Whether it’s home school, high school, or trade school, name the
            school that made you who you are.
          </Typography>
          <div className="mt-10 mb-10">
            <Input label="Where I went to school:" />
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

export default ModalSchool
