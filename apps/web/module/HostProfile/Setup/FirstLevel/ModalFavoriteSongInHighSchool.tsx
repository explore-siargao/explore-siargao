import ModalContainer from "@/common/components/ModalContainer"
import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"

interface ModalFavoriteSongProps {
  isOpen: boolean
  onClose: () => void
}

const ModalFavoriteSong = ({ isOpen, onClose }: ModalFavoriteSongProps) => {
  return (
    <div>
      <ModalContainer size="sm" isOpen={isOpen} onClose={onClose}>
        <div className="p-5">
          <Title size={"default"}>
            What was your favorite song in high school?
          </Title>
          <Typography variant={"h3"}>
            However embarrassing, share the tune you listened to on repeat as a
            teenager.
          </Typography>

          <div className="mt-10 mb-10">
            <Input label="My favorite song in high school:" />
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

export default ModalFavoriteSong
