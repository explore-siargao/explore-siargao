"use client"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import { LINK_ACCOUNT_SETTINGS } from "@/common/constants/links"
import React from "react"
import LegalName from "./components/LegalName"
import EmailAddress from "./components/EmailAddress"
import PhoneNumber from "./components/PhoneNumber"
import GovernmentId from "./components/GovernmentId"
import Address from "./components/Address"
import EmergencyContact from "./components/EmergencyContact"
import { Title } from "@/common/components/ui/Title"
import useGetPersonalInfo from "@/common/hooks/useGetPersonalInfo"
import { Breadcrumb } from "@/common/components/ui/Breadcrumb"

const PersonalInfo = () => {
  const { data, isPending } = useGetPersonalInfo()
  return (
    <AccountSettingWrapper>
      <div>
        <Breadcrumb
          home="Account"
          page="Personal info"
          link={LINK_ACCOUNT_SETTINGS}
        />
        <Title>Personal info</Title>
      </div>
      <div>
        {isPending ? (
          <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent text-primary-200 rounded-full">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="divide-y">
            <LegalName
              firstName={data?.item?.personalInfo?.firstName}
              lastName={data?.item?.personalInfo?.lastName}
              userId={data?.item?.id}
            />
            <EmailAddress email={data?.item?.email} id={data?.item?.id} />
            <PhoneNumber
              phoneNumber={data?.item?.personalInfo?.phoneNumber}
              userId={data?.item?.id}
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
              id={data?.item?.personalInfo?.id}
            />
            <EmergencyContact
              emergencyContact={data?.item?.personalInfo?.emergrncyContacts}
              id={data?.item?.personalInfo?.id}
            />
          </div>
        )}
      </div>
    </AccountSettingWrapper>
  )
}

export default PersonalInfo
