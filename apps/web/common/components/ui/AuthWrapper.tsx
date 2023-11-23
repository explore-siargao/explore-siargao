"use client";
import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
type Props = {
  children: React.ReactNode;
  title: string;
  closable: boolean;
  isLoggedIn: boolean;
};

const AuthWrapper = ({ children, title, closable, isLoggedIn }: Props) => (
  <div className="flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-200">
    <div className="sm:mx-auto sm:w-full sm:max-w-[540px]">
      <div className="bg-white shadow sm:rounded-2xl py-6">
        <div className="flex border-b-gray-400/50 border-b pb-4 px-4">
          {closable ? (
            <XMarkIcon className="h-6 w-6  rounded-full hover:bg-gray-300/30" />
          ) : (
            ""
          )}
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
    </div>
  </div>
);

export default AuthWrapper;
