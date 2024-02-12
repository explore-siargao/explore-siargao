import PaymentMethodForm from '@/app/accommodation/PaymentMethodForm'
import { WidthWrapper } from '@/common/components/WidthWrapper'
import { Button } from '@/common/components/ui/Button'
import { Title } from '@/common/components/ui/Title'
import { Typography } from '@/common/components/ui/Typography'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Checkout = () => {
  return (
    <WidthWrapper width={"small"} className="mt-24 md:mt-36 lg:mt-40">
      <div className='w-full flex items-center gap-x-4'>
        <ChevronLeft />
        <Title className="pb-5 md:pb-0">Confirm and pay</Title>
      </div>
      <div className='w-full flex mt-8'>
        <div className='w-1/2 flex flex-col gap-y-4'>
          <Typography variant={'h2'} fontWeight={'bold'}>
            Your trip
          </Typography>
          <div className='flex w-full flex-col'>
            <div className='flex justify-between w-full'>
              <div className='font-bold'>
                Dates
              </div>
              <div className='font-bold underline'>
                Edit
              </div>
            </div>
            <div>
              Feb 18 – 23
            </div> 
          </div>
          <div className='flex w-full flex-col'>
            <div className='flex justify-between w-full'>
              <div className='font-bold'>
                Guests
              </div>
              <div className='font-bold underline'>
                Edit
              </div>
            </div>
            <div>
              1 guest
            </div> 
          </div>
          <hr className='my-4'/>
          <PaymentMethodForm />
          <hr className='my-4'/>
          <div>
            <Typography variant={'h2'} fontWeight={'bold'}>
              Required for your trip
            </Typography>
          </div>
          <div className='flex w-full flex-col'>
            <div className='flex justify-between w-full'>
              <div className='font-bold'>
                Dates
              </div>
              <Button size={"sm"} variant={'outline'}>Add</Button>
            </div>
            <div>
              Feb 18 – 23
            </div> 
          </div>
          <hr className='my-4'/>
          <div className='flex flex-col gap-y-4'>
            <Typography variant={'h2'} fontWeight={'bold'}>
              Cancellation policy
            </Typography>
            <div>
              <span className='font-bold'>Free cancellation before 2:00 PM on Feb 13.</span> Cancel before check-in on Feb 18 for a partial refund. <Link className='font-bold underline' href="#">Learn more</Link>
            </div>
          </div>
          <hr className='my-4'/>
          <div className='flex flex-col gap-y-4'>
            <Typography variant={'h2'} fontWeight={'bold'}>
              Ground rules
            </Typography>
            <div>
              We ask every guest to remember a few simple things about what makes a great guest.
            </div>
            <ul className='list-disc ml-6'>
              <li>Follow the house rules</li>
              <li>Treat your Host’s home like your own</li>
            </ul>
          </div>
          <hr className='my-4'/>
          <div className='text-xs'>
            By selecting the button below, I agree to the <Link className='font-bold underline' href="#">Host's House Rules</Link>, <Link className='font-bold underline' href="#">Ground rules for guests</Link>, <Link className='font-bold underline' href="#">Airbnb's Rebooking and Refund Policy</Link>, and that Airbnb can <Link className='font-bold underline' href="#">charge my payment method</Link> if I’m responsible for damage.
          </div>
        </div>
        <div className='w-1/2'>
        </div>
      </div>
    </WidthWrapper>
  )
}

export default Checkout