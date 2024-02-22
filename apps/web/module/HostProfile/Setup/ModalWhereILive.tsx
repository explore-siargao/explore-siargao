import ModalContainer from "@/common/components/ModalContainer"
import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Title } from "@/common/components/ui/Title"

interface ModalWhereILiveProps {
  isOpen: boolean
  onClose: () => void
}

const ModalWhereILive = ({ isOpen, onClose }: ModalWhereILiveProps) => {
  return (
    <div>
      <ModalContainer size="sm" isOpen={isOpen} onClose={onClose}>
        <div className="p-5">
          <Title size={"default"}>Where you live</Title>
          <div className="mt-10 mb-10">
            <Input label="Where I went to school:" />
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

export default ModalWhereILive
