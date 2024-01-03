import ModalContainer from "@/common/components/ModalContainer"
import { Typography } from "@/common/components/ui/Typography"
import { Menu, Popover, Transition } from "@headlessui/react"
import React, { Fragment, useEffect, useRef, useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

interface PriceBreakdownProps {
  buttonTitle: React.ReactNode
}

const PriceBreakdownModal = ({ buttonTitle }: PriceBreakdownProps) => {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)

  return (
    <Popover className="relative">
      <Popover.Button
        onClick={() => setTimeout(() => setMenuIsVisible(true), 500)}
      >
        <Typography className="text-text-300 text-sm underline">
          {buttonTitle}
        </Typography>
      </Popover.Button>
      {menuIsVisible && (
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute -right-0 top-5 shadow-sm rounded-2xl z-10 mt-5 min-w-[400px] w-full">
            <ModalContainer title="Price breakdown">
              <div className="grid grid-flow-row p-6 gap-5">
                <div className="flex justify-between">
                  <Typography className="text-text-600">
                    ₱1,800 x 5 nights{" "}
                  </Typography>
                  <Typography className="text-text-600">₱9,000 </Typography>
                </div>
                <div className="flex justify-between ">
                  <Typography className="text-text-600">
                    Cleaning fee{" "}
                  </Typography>
                  <Typography className="text-text-600">₱550</Typography>
                </div>
                <div className="flex justify-between">
                  <Typography className="text-text-600">
                    ExploreSiargao service fee
                  </Typography>
                  <Typography className="text-text-600">₱1,348</Typography>
                </div>
              </div>
            </ModalContainer>
          </Popover.Panel>
        </Transition>
      )}
    </Popover>
  )
}

export default PriceBreakdownModal
