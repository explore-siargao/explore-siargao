"use client"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import { LINK_ACCOUNT_SETTINGS } from "@/common/constants/links"
import Header from "@/module/LandingPage/components/Header"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import React from "react"
import LegalName from "./components/LegalName"
import EmailAddress from "./components/EmailAddress"
import PhoneNumber from "./components/PhoneNumber"
import GovernmentId from "./components/GovernmentId"
import Address from "./components/Address"
import EmergencyContact from "./components/EmergencyContact"
import Title from "@/common/components/ui/Title"
import useGetPersonalInfo from "./hooks/useGetPersonalInfo"
import authOptions from "@/common/helpers/authOptions"
import { getServerSession } from "next-auth"
import useGetUserDetails from "@/common/hooks/useGetUserdetails"
const PersonalInfo = () => {
  const { data, isPending } = useGetUserDetails()
  return (
    <>
      <Header />
      <AccountSettingWrapper>
        <div className="mb-10">
          <div className="flex items-center text-text-400">
            <a
              href={LINK_ACCOUNT_SETTINGS}
              className="font-semibold hover:underline"
            >
              Account
            </a>
            <ChevronRightIcon
              className="h-5 w-5 flex-shrink-0 mx-3"
              aria-hidden="true"
            />
            <p className="font-medium">Personal info</p>
          </div>
          <Title>Personal info</Title>
        </div>
        <div className="divide-y">
          {isPending ? (
            <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent text-primary-200 rounded-full">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div>
              <LegalName
                firstName={data?.item?.personalInfo?.firstName}
                lastName={data?.item?.personalInfo?.lastName}
              />
              <EmailAddress email={data?.item?.email} />
              <PhoneNumber
                phoneNumber={data?.item?.personalInfo?.phoneNumber}
              />
              <GovernmentId
                governmentId={data?.item?.personalInfo?.governmentId}
              />
              <Address
                country={data?.item?.personalInfo?.address?.country}
                city={data?.item?.personalInfo?.address?.city}
                province={data?.item?.personalInfo?.address?.province}
                streetAddress={data?.item?.personalInfo?.address?.streetAddress}
                zipCode={data?.item?.personalInfo?.address?.zipCode}
              />
              <EmergencyContact
                emergencyContact={data?.item?.personalInfo?.emergencyContact}
              />
            </div>
          )}
        </div>
      </AccountSettingWrapper>
    </>
  )
}

export default PersonalInfo
