import PaymentMethodForm from '@/app/accommodation/PaymentMethodForm'
import { WidthWrapper } from '@/common/components/WidthWrapper'
import { Button } from '@/common/components/ui/Button'
import { Title } from '@/common/components/ui/Title'
import { Typography } from '@/common/components/ui/Typography'
import { StarIcon } from '@heroicons/react/20/solid'
import { ChevronLeft, MedalIcon } from 'lucide-react'
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
          <Typography variant={'h2'} fontWeight={'semiBold'}>
            Your trip
          </Typography>
          <div className='flex w-full flex-col'>
            <div className='flex justify-between w-full'>
              <div className='font-semibold'>
                Dates
              </div>
              <div className='font-semibold underline'>
                Edit
              </div>
            </div>
            <div>
              Feb 18 – 23
            </div> 
          </div>
          <div className='flex w-full flex-col'>
            <div className='flex justify-between w-full'>
              <div className='font-semibold'>
                Guests
              </div>
              <div className='font-semibold underline'>
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
            <Typography variant={'h2'} fontWeight={'semiBold'}>
              Required for your trip
            </Typography>
          </div>
          <div className='flex w-full flex-col'>
            <div className='flex justify-between w-full'>
              <div className='font-semibold'>
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
            <Typography variant={'h2'} fontWeight={'semiBold'}>
              Cancellation policy
            </Typography>
            <div>
              <span className='font-semibold'>Free cancellation before 2:00 PM on Feb 13.</span> Cancel before check-in on Feb 18 for a partial refund. <Link className='font-semibold underline' href="#">Learn more</Link>
            </div>
          </div>
          <hr className='my-4'/>
          <div className='flex flex-col gap-y-4'>
            <Typography variant={'h2'} fontWeight={'semiBold'}>
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
            By selecting the button below, I agree to the <Link className='font-semibold underline' href="#">Host's House Rules</Link>, <Link className='font-semibold underline' href="#">Ground rules for guests</Link>, <Link className='font-semibold underline' href="#">Airbnb's Rebooking and Refund Policy</Link>, and that Airbnb can <Link className='font-semibold underline' href="#">charge my payment method</Link> if I’m responsible for damage.
          </div>
        </div>
        <div className='flex w-1/2 h-max justify-end'>
          <div className='border w-4/5 p-6 rounded-lg flex flex-col'>
            <div className='flex gap-x-4 items-center'>
              <div className='w-24 h-20 rounded-lg bg-primary-100'>
              </div>
              <div className='flex flex-col gap-y-1'>
                <Typography fontWeight={'semiBold'}>The GOAT Barnyard - Lakeside</Typography>
                <Typography variant={'h5'}>Farm stay</Typography>
                <div className='flex'>
                  <StarIcon height={15} />
                  <Typography variant={'h5'}>4.94 (18 reviews) •</Typography>
                  <MedalIcon className=' self-center' height={15} />
                  <Typography variant={'h5'}>Superhost</Typography>
                </div>
              </div>
            </div>
            <hr className='my-6'/>
            <div className='flex flex-col gap-y-4'>
              <Typography fontWeight={'semiBold'} variant={'h2'}>Price details</Typography>
              <div className='flex w-full justify-between'>
                <Typography variant={'h4'}>₱25,000.00 x 5 nights</Typography>
                <Typography variant={'h4'}>₱125,000.00</Typography>
              </div>
              <div className='flex w-full justify-between'>
                <Typography variant={'h4'}><Link href={''} className='underline'>Airbnb service fee</Link></Typography>
                <Typography variant={'h4'}>₱1,000.00</Typography>
              </div>
            </div>
            <hr className='my-6'/>
            <div className='flex w-full justify-between'>
                <Typography variant={'h4'} fontWeight={'semiBold'}>Total</Typography>
                <Typography variant={'h4'} fontWeight={'semiBold'}>₱126,000.00</Typography>
              </div>
          </div>
        </div>
      </div>
    </WidthWrapper>
  )
}

export default Checkout