"use client";
import React, { Fragment } from "react";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/20/solid";
import useAuthModalStore from "@/common/store/useAuthModalStore";
const { Dialog, Transition } = require("@headlessui/react");

type Props = {
  children: React.ReactNode;
  title: string;
  isLoggedIn: boolean;
  isOpen: boolean;
  onClose: () => void;
};

const AuthWrapperModal = ({
  children,
  title,
  isLoggedIn,
  isOpen,
  onClose,
}: Props) => {
  const setLogin = useAuthModalStore((state: any) => state.setIsLogin);
  const setClosable = useAuthModalStore((state: any) => state.setClosable);

  const closableAndIsLogin = () => {
    if (isLoggedIn) {
      return (
        <XMarkIcon
          className="h-6 w-6  rounded-full hover:bg-gray-300/30"
          onClick={onClose}
        />
      );
    } else {
      return (
        <ChevronLeftIcon
          onClick={() => {
            setLogin();
            setClosable(false);
          }}
          className="h-6 w-6  rounded-full hover:bg-gray-300/30"
        />
      );
    }
  };
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 blur-3xl transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="sm:mx-auto sm:w-full sm:max-w-[540px]">
                <div className="bg-white shadow sm:rounded-2xl py-6">
                  <div className="flex border-b-gray-400/50 border-b pb-4 px-4">
                    {closableAndIsLogin()}
                    <h1 className="w-full text-center place-self-center font-semibold">
                      {title}
                    </h1>
                  </div>
                  {isLoggedIn ? (
                    <div className="px-6 pt-2">{children}</div>
                  ) : (
                    <div className="ml-3 pt-2">{children}</div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AuthWrapperModal;
