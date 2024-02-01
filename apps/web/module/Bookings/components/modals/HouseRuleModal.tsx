import ModalContainer from "@/common/components/ModalContainer"
import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useRef } from "react"
import { TitleSection } from "../../SingleView/components/TitleSection"
import IconDescription from "../../SingleView/components/IconDescription"

interface IconDescription {
  id: number
  desc: string
  icon: React.ElementType
}
interface HouseRule {
  id: number
  title: string
  rules: IconDescription[]
}
interface HouseRuleModalProps {
  isOpen: boolean
  onClose: () => void
  houseRules: HouseRule[]
}

const HouseRuleModal = ({ isOpen, onClose, houseRules }: HouseRuleModalProps) => {
  const cancelButtonRef = useRef(null)
  return (
    <Transition.Root show={true} as="div">
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={() => {}}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center sm:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all w-full h-full md:w-1/2">
                <ModalContainer title="" onClose={onClose}>
                  <div className="px-5 pt-4  md:h-[700px] md:overflow-y-auto">
                  {houseRules.map((data) => (
                        <div className="py-2" key={data.id}>
                          <TitleSection title={data.title}>
                            {data.rules.map((rule: any) => (
                              <div className="py-4 border-b" key={rule.id}>
                                <IconDescription
                                  // @ts-ignore
                                  icon={rule.icon}
                                  // @ts-ignore
                                  desc={rule.desc}
                                />
                              </div>
                            ))}
                          </TitleSection>
                        </div>
                      ))}
                  </div>
                </ModalContainer>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default HouseRuleModal
