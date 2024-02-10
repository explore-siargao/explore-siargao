import ModalContainer from "@/common/components/ModalContainer"
import WhereYouWillBe from "./WhereYouWillBe"
import SpecificMap from "@/common/components/SpecificMap"

interface WhereYouWillBeModalProps {
  isOpen: boolean
  onClose: () => void
}

const WhereYouWillBeModal = ({ isOpen, onClose }: WhereYouWillBeModalProps) => {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} size="full">
      <div className="md:grid grid-cols-12 px-2 py-4 md:py-6 h-[95vh]">
        <div className="md:col-span-4 lg:col-span-3">
          <WhereYouWillBe title="Where you'll be" />
        </div>
        <div className="md:col-span-8 lg:col-span-9">
          <SpecificMap
            coordinates={[14.264673, 121.545529]}
            mapHeight="h-[25vh] md:h-[50vh] lg:h-[80vh]"
            mapWidth="w-full"
          />
        </div>
      </div>
    </ModalContainer>
  )
}

export default WhereYouWillBeModal
