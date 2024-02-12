import { WidthWrapper } from "@/common/components/WidthWrapper"
import ContactHost from "./components/ContactHost"
import CheckoutProcess from "./components/CheckoutProcess"

const Message = ()=>{
    return(
        <WidthWrapper width="medium" className="mt-24 lg:mt-28">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 pb-6">
          <div className="flex-1">
           <ContactHost hostName="Ramil" listingName="test test" />
          </div>
          <div className="md:w-96 md:relative">
            <div className="md:sticky md:top-0">
              <CheckoutProcess
                checkoutDesc={{
                  id: 1,
                  serviceFee: 1000,
                  durationCost: 2000,
                  descTotalBeforeTaxes: 3000,
                  totalBeforeTaxes: 4000,
                  titlePrice: 5000,
                }}
              />
            </div>
          </div>
        </div>
        <div className="divide-y">
          
        </div>
      </WidthWrapper>
     
    )
}

export default Message