import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Select } from "@/common/components/ui/Select"
import { Title } from "@/common/components/ui/Title"

interface ICheckout {
  id?: number
  serviceFee: number
  durationCost: number
  descTotalBeforeTaxes: string
  totalBeforeTaxes: number
  titlePrice: string
}

interface CheckoutProcessProps {
  checkoutDesc: ICheckout
}

const CheckoutProcess = ({ checkoutDesc }: CheckoutProcessProps) => {
  return (
    <div className="border rounded-xl shadow-lg p-8 flex flex-col divide-text-100 overflow-y-auto w-3/12 mb-5 py-8">
      <Title className="text-lg font-semibold  mb-5">
        &#8369;{checkoutDesc.titlePrice}
        <small className="px-1 font-semibold">night</small>
      </Title>
      <div className="font-semibold grid grid-cols-1 gap-5 w-full">
        <Input id="checkIn" label="CHECK-IN" required={true} />

        <Input id="checkOut" label="CHECK-OUT" required={true} />

        <Select id="guest" label="GUESTS" required={true} />

        <Button variant={"primary"}>Reserve</Button>

        <h1 className="justify-center flex mb-5">You won't charge yet</h1>
      </div>
      <div className="font-semibold w-full">
        <div className="flex justify-between mb-5">
          <button className="underline">&#8369;25,000 x 5 nights</button>
          <div>&#8369;{checkoutDesc.durationCost}</div>
        </div>

        <div className="flex justify-between">
          <button className="underline">ES service fee</button>
          <div>&#8369;{checkoutDesc.serviceFee}</div>
        </div>

        <div className="border-b mt-5 mb-5"></div>
        <div className="flex justify-between">
          <div>{checkoutDesc.descTotalBeforeTaxes}</div>
          <div>&#8369;{checkoutDesc.totalBeforeTaxes}</div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProcess
