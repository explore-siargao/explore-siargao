"use client"

import { WidthWrapper } from "@/common/components/WidthWrapper"
import ProfileCard from "./components/ProfileCard"
import ConfirmedInformation from "./components/ConfirmedInformation"
import { FlagIcon } from "@heroicons/react/20/solid"
import AboutHost from "./components/AboutHost"

const hostProfileData = {
    name: "David",
    image: "1.jpg",
    hostStatus: "Superhost",
    reviewsCount: 60,
    rating: 4.98,
    hostingMonthAge: 11,
    confirmedInformation: [
        "Identity",
        "Phone number"
    ],
    work: "Novelist",
    desc: "I'm a novelist and divemaster and retired professor",
    livesIn: "Culion, Philippines"
}

const HostProfile = () => {
    return (
        <WidthWrapper className="my-24 lg:my-32">
            <div className="mt-5 mx-5 grid lg:grid-cols-12 gap-x-20 gap-y-4">
                <div className="lg:col-span-4">
                    <div className="mt-5">
                        <ProfileCard 
                            name={hostProfileData.name} 
                            profileImage={hostProfileData.image}
                            hostStatus={hostProfileData.hostStatus}
                            reviewsCount={hostProfileData.reviewsCount}
                            rating={hostProfileData.rating}
                            hostingMonthAge={hostProfileData.hostingMonthAge}
                        />
                    </div>
                    <div className="mt-8">
                        <ConfirmedInformation 
                            name={hostProfileData.name}
                            confirmedInformation={hostProfileData.confirmedInformation}
                        />
                    </div>
                    <div className="flex items-center mt-6">
                        <FlagIcon className="h-5 w-5 mr-3"/>
                        <button className="underline font-bold">Report this profile</button>
                    </div>
                </div>
                <div className="lg:col-span-8 space-y-8">
                        <AboutHost 
                            name={hostProfileData.name} 
                            work={hostProfileData.work} 
                            livesIn={hostProfileData.livesIn}
                            desc={hostProfileData.desc}
                        />
                        <hr />
                </div>
            </div>
        </WidthWrapper>
    )
}

export default HostProfile