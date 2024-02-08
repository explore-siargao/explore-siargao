import ModalContainer from "@/common/components/ModalContainer"
import { Typography } from "@/common/components/ui/Typography"

interface CheckoutBreakdownModalProps {
    isOpen: boolean
    onClose: () => void
}

const CheckoutBreakdownModal = ({isOpen, onClose}: CheckoutBreakdownModalProps) => {
    const breakdown = [
        { date: "2/7/2024", price: 2522 },
        { date: "2/8/2024", price: 2522 },
        { date: "2/9/2024", price: 2522 },
        { date: "2/10/2024", price: 2522 },
        { date: "2/11/2024", price: 2522 }
      ];

    const moneyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
        maximumFractionDigits: 0,
    })

    return (
        <ModalContainer isOpen={isOpen} title="Basic Price Breakdown" onClose={onClose}>
            <div className="p-5">
                {breakdown.map((data) => {
                    return (
                        <div className="flex justify-between mb-4">
                            <Typography variant="h5">{data.date}</Typography>
                            <Typography variant="h5">{moneyFormatter.format(data.price)}</Typography>
                        </div>
                    )
                })}
                <hr />
                <div className="flex justify-between mt-4">
                    <Typography variant="h5" fontWeight="bold">Total Base Price</Typography>
                    <Typography variant="h5" fontWeight="bold">&#8369;12,610</Typography>
                </div>
            </div>
        </ModalContainer>
    )
}

export default CheckoutBreakdownModal