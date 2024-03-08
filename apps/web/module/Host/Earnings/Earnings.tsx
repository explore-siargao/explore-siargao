"use client"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import EarningsThisMonth from "./EarningsThisMonth"
import EarningUpcoming from "./EarningUpcoming"
import Paid from "./Paid"

const Earnings = ()=>{
    return(
        <WidthWrapper width="medium" className="mt-44">
             <EarningsThisMonth />
            <EarningUpcoming />
            <Paid />
        </WidthWrapper>
    )
}
export default Earnings