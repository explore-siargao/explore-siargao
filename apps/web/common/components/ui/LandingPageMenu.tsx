import { Bars3Icon, UserCircleIcon } from "@heroicons/react/20/solid";
import React, { Fragment } from "react";
const { Popover, Transition } = require("@headlessui/react");

const solutions = [
  {
    name: "Log in",
    href: "/login",
  },
  {
    name: "Sign up",
    href: "#",
  },
];
const LandingPageMenu = () => {
  return (
    <Popover className="relative ">
      <Popover.Button className="flex gap-1 rounded-full border-gray-400/50 border items-center focus:ring-red-300 focus:border-red-300 focus:shadow-xl px-2 py-1">
        <Bars3Icon className="h-5" />
        <UserCircleIcon className="h-10" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute -right-4 top-10 z-10 mt-5 flex w-screen max-w-max px-4 ">
          <div className="w-screen max-w-[250px] flex-auto rounded-xl bg-white text-sm leading-6 border border-gray-400/50 shadow-lg ring-transparent">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="relative rounded-lg p-2 hover:bg-gray-50"
              >
                <a href={item.href} className="font-semibold text-gray-800 p-4">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default LandingPageMenu;
