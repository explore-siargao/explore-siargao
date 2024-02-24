"use client"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import { Button } from "@/common/components/ui/Button"
import { Typography } from "@/common/components/ui/Typography"
import { StarIcon } from "@heroicons/react/20/solid"
import { ChevronLeft, MedalIcon } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"
import PaymentOptions from "./PaymentOptions"
import useCheckInOutDateStore from "@/common/store/useCheckInOutDateStore"
import useGuestAdd from "@/common/store/useGuestAdd"
import CheckInOutModal from "@/module/Bookings/SingleView/components/modals/CheckInOutModal"
import GuestAddModal from "@/module/Bookings/SingleView/components/modals/GuestAddModal"
import { format } from "date-fns"
import { APP_NAME } from "@repo/constants"
import Image from "next/image"
import CheckoutMoreInfoModal from "@/module/Bookings/SingleView/components/modals/CheckoutMoreInfoModal"

const Checkout = () => {
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isMoreInfoModalOpen, setIsMoreInfoModalOpen] = useState(false)
  const [checkInOutCalendarModalIsOpen, setCheckInOutCalendarModalIsOpen] =
    useState(false)
  const dateRange = useCheckInOutDateStore((state) => state.dateRange)
  const { adults, children, infants } = useGuestAdd((state) => state.guest);
  const totalGuest = adults + children + infants;
  return (
    <WidthWrapper width={"small"} className="mt-24 md:mt-36 lg:mt-40">
      <div className="w-full flex items-center gap-x-4">
        <Link href="/accommodation/1">
          <ChevronLeft />
        </Link>
        <Typography variant="h1" fontWeight="semibold" className="pb-5 md:pb-0">
          Confirm and pay
        </Typography>
      </div>
      <div className="w-full flex mt-8">
        <div className="w-1/2 flex flex-col gap-y-4">
          <Typography variant={"h2"} fontWeight="semibold">
            Your trip
          </Typography>
          <div className="flex w-full flex-col">
            <div className="flex justify-between w-full">
              <div className="font-semibold">Dates</div>
              <button type="button" className="underline hover:text-text-400" onClick={() => setCheckInOutCalendarModalIsOpen(true)}>Edit</button>
            </div>
            <Typography className="text-sm">
              {dateRange?.from != undefined
                ? format(dateRange.from, "LLL dd, y")
                : "Date from"}{" "}
              -{" "}
              {dateRange?.to != undefined
                ? format(dateRange.to, "LLL dd, y")
                : "Date to"}
            </Typography>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex justify-between w-full">
              <div className="font-semibold">Guests</div>
              <button type="button" className="underline hover:text-text-400" onClick={() => setIsGuestsModalOpen(true)}>Edit</button>
            </div>
            <Typography className="text-sm">{`${totalGuest} guest${totalGuest > 1 ? "s" : ""}`}</Typography>
          </div>
          <hr className="my-4" />
          <PaymentOptions />
          <hr className="my-4" />
          <div className="flex flex-col gap-y-4">
            <Typography variant={"h2"} fontWeight="semibold">
              Cancellation policy
            </Typography>
            <div>
              <span className="font-semibold">
                Free cancellation before 2:00 PM on Feb 13.
              </span>{" "}
              Cancel before check-in on Feb 18 for a partial refund.{" "}
              <Link className="font-semibold underline" href="#">
                Learn more
              </Link>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex flex-col gap-y-4">
            <Typography variant={"h2"} fontWeight="semibold">
              Ground rules
            </Typography>
            <div>
              We ask every guest to remember a few simple things about what
              makes a great guest.
            </div>
            <ul className="list-disc ml-6">
              <li>Follow the house rules</li>
              <li>Treat your Host’s home like your own</li>
            </ul>
          </div>
          <hr className="my-4" />
          <div className="text-xs">
            By selecting the button below, I agree to the{" "}
            <Link className="font-semibold underline" href="#">
              Host's House Rules
            </Link>
            ,{" "}
            <Link className="font-semibold underline" href="#">
              Ground rules for guests
            </Link>
            ,{" "}
            <Link className="font-semibold underline" href="#">
              {APP_NAME}'s Rebooking and Refund Policy
            </Link>
            , and that {APP_NAME} can{" "}
            <Link className="font-semibold underline" href="#">
              charge my payment method
            </Link>{" "}
            if I’m responsible for damage.
          </div>
        </div>
        <div className="flex w-1/2 h-max justify-end">
          <div className="border w-4/5 p-6 rounded-lg flex flex-col">
            <div className="flex gap-x-4 items-center">
              <div className="flex h-20 w-24 items-center justify-center rounded-md">
                <Image
                  width={300}
                  height={300}
                  src={`/assets/1.jpg`}
                  alt="Listing"
                  className="block h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <Typography fontWeight="semibold">
                  The GOAT Barnyard - Lakeside
                </Typography>
                <Typography variant={"h5"}>Farm stay</Typography>
                <div className="flex">
                  <StarIcon height={15} />
                  <Typography variant={"h5"}>4.94 (18 reviews) •</Typography>
                  <MedalIcon className=" self-center" height={15} />
                  <Typography variant={"h5"}>Superhost</Typography>
                </div>
              </div>
            </div>
            <hr className="my-6" />
            <div className="flex flex-col">
              <Typography fontWeight="semibold" variant={"h2"}>
                Price details
              </Typography>
              <div className="flex w-full justify-between items-center mt-4">
                <Typography
                  className="text-sm"
                >
                  ₱25,000.00 x 5 nights
                </Typography>
                <Typography className="text-sm">₱125,000.00</Typography>
              </div>
              <div className="flex w-full justify-between items-center">
                <Button
                  variant={"ghost"}
                  className="underline pl-0"
                  onClick={() => setIsMoreInfoModalOpen(true)}
                >
                  {APP_NAME} service fee
                </Button>
                <Typography className="text-sm">₱1,000.00</Typography>
              </div>
            </div>
            <hr className="my-6" />
            <div className="flex w-full justify-between">
              <Typography fontWeight="semibold">
                Total
              </Typography>
              <Typography fontWeight="semibold">
                ₱126,000.00
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <CheckoutMoreInfoModal
        isOpen={isMoreInfoModalOpen}
        onClose={() => setIsMoreInfoModalOpen(false)}
      />
      <CheckInOutModal
        isOpen={checkInOutCalendarModalIsOpen}
        onClose={() => setCheckInOutCalendarModalIsOpen(false)}
      />
      <GuestAddModal
        isOpen={isGuestsModalOpen}
        onClose={() => setIsGuestsModalOpen(false)}
      />
    </WidthWrapper>
  )
}

export default Checkout
