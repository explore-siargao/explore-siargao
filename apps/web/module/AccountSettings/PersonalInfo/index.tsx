"use client"
import AccountSettingWrapper from "@/module/AccountSettings/components/AccountSettingWrapper"
import { LINK_ACCOUNT } from "@/common/constants/links"
import React from "react"
import LegalName from "./LegalName"
import EmailAddress from "./EmailAddress"
import PhoneNumber from "./PhoneNumber"
import GovernmentId from "./GovernmentId"
import Address from "./Address"
import EmergencyContact from "./EmergencyContact"
import { Title } from "@/common/components/ui/Title"
import { Breadcrumb } from "@/common/components/ui/Breadcrumb"
import useSessionStore from "@/common/store/useSessionStore"
import { T_EmergencyContact } from "@repo/contract"
import { ACCOUNT, PERSONAL_INFO } from "@/common/constants"

const PersonalInfo = () => {
  const session = useSessionStore((state) => state)
  const personalInfo = session?.personalInfo
  return (
    <AccountSettingWrapper>
      <div>
        <Breadcrumb home={ACCOUNT} page={PERSONAL_INFO} link={LINK_ACCOUNT} />
        <Title>{PERSONAL_INFO}</Title>
      </div>
      <div>
        <div className="divide-y">
          <LegalName
            firstName={personalInfo?.firstName}
            lastName={personalInfo?.lastName}
            userId={session?.id as number}
          />
          <EmailAddress
            email={session?.email as string}
            id={session?.id as number}
          />
          <PhoneNumber
            phoneNumber={personalInfo?.phoneNumber}
            userId={session?.id as number}
          />
          <GovernmentId governmentId={personalInfo?.governmentId} />
          <Address
            country={personalInfo?.address?.country as string}
            city={personalInfo?.address?.city as string}
            stateProvince={personalInfo?.address?.stateProvince as string}
            streetAddress={personalInfo?.address?.streetAddress as string}
            zipCode={personalInfo?.address?.zipCode as number}
            peronalInfoId={personalInfo?.id as number}
            aptSuite={personalInfo?.address?.aptSuite}
            id={personalInfo?.address.id as number}
          />
          <EmergencyContact
            emergencyContact={
              personalInfo?.emergencyContacts as T_EmergencyContact[]
            }
            id={personalInfo?.id as number}
          />
        </div>
      </div>
    </AccountSettingWrapper>
  )
}

export default PersonalInfo
