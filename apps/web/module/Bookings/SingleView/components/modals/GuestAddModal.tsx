import ModalContainer from "@/common/components/ModalContainer"
import { Typography } from "@/common/components/ui/Typography"
import useGuestAdd from "@/common/store/useGuestAdd"
import { PlusCircle } from "lucide-react"

interface GuestAddModalProps {
    isOpen: boolean
    onClose: () => void
}

const GuestAddModal = ({isOpen, onClose}: GuestAddModalProps) => {
    const guest = useGuestAdd((state) => state.guest)
    const incrementGuest = useGuestAdd((state) => state.incrementGuest)

    return (
        <ModalContainer isOpen={isOpen} onClose={onClose} size="sm">
            <div className="py-2">
                <div className="flex justify-between items-center px-4 py-2">
                    <div className="space-y-0.5">
                        <Typography variant="h4" fontWeight="bold">Adults</Typography>
                        <Typography variant="h5" fontWeight="semibold">Age 13+</Typography>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Typography variant="h5" fontWeight="semibold" className="mt-1">{guest.adults}</Typography>
                        <button  onClick={() => {incrementGuest("adults")}}>
                            <PlusCircle className="h-8 w-8" strokeWidth={0.5}/>
                        </button>
                    </div>
                </div>
                <div className="flex justify-between items-center px-4 py-2">
                    <div className="space-y-0.5">
                        <Typography variant="h4" fontWeight="bold">Children</Typography>
                        <Typography variant="h5" fontWeight="semibold">Ages 2-12</Typography>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Typography variant="h5" fontWeight="semibold" className="mt-1">{guest.children}</Typography>
                        <button onClick={() => {incrementGuest("children")}}>
                            <PlusCircle className="h-8 w-8" strokeWidth={0.5}/>
                        </button>
                    </div>
                </div>
                <div className="flex justify-between items-center px-4 py-2">
                    <div className="space-y-0.5">
                        <Typography variant="h4" fontWeight="bold">Infants</Typography>
                        <Typography variant="h5" fontWeight="semibold">Under 2</Typography>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Typography variant="h5" fontWeight="semibold" className="mt-1">{guest.infants}</Typography>
                        <button onClick={() => {incrementGuest("infants")}}>
                            <PlusCircle className="h-8 w-8" strokeWidth={0.5}/>
                        </button>
                    </div>
                </div>
                <Typography variant="h6" className="px-4 py-2">This place has a maximum of 8 guests, not including infants. Pets aren't allowed.</Typography>
            </div>
        </ModalContainer>
    )
}

export default GuestAddModal