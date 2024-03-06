import Paid from "../Host/Earnings/Paid"

const Bookings = () => {
  return (
    <div className="mt-36 w-full p-6">
      <Paid earnings={0} date={""} grossEarnings={0} adjustments={0} serviceFee={0} taxesWithheld={0}/>
    </div>
  )
}

export default Bookings
