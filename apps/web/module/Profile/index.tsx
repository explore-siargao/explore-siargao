"use client"

import { WidthWrapper } from "@/common/components/WidthWrapper"
import ProfileCard from "./components/ProfileCard"
import ConfirmedInformation from "./components/ConfirmedInformation"
import { FlagIcon } from "@heroicons/react/24/outline"
import AboutHost from "./components/AboutHost"
import HostReviews from "./components/HostReviews"
import HostListings from "./components/HostListings"
import HostGuideBooks from "./components/HostGuideBooks"
import { useState } from "react"
import ReportHostModal from "./components/modals/ReportHostModal"
import useGetProfile from "./hooks/useGetProfile"
import { Spinner } from "@/common/components/ui/Spinner"
import { Button } from "@/common/components/ui/Button"
import { LucideFlag } from "lucide-react"

const HostProfile = () => {
  const [openReportModal, setOpenReportModal] = useState(false)

  const { data, isPending } = useGetProfile(1)

  return (
    <WidthWrapper width="small" className="my-24 lg:my-32">
      {isPending ? (
        <div className="flex justify-center">
          <Spinner variant="primary" className="mt-8" />
        </div>
      ) : (
        <div className="mt-5 mx-3 md:mx-40 lg:mx-5 grid lg:grid-cols-12 gap-x-20 gap-y-4">
          <div className=" lg:col-span-4 lg:relative">
            <div className="lg:sticky lg:top-40">
              <div className="mt-5">
                <ProfileCard
                  name={data?.item?.userName}
                  profileImage={data?.item?.imageKey}
                  hostStatus={data?.item?.role}
                  reviewsCount={data?.item?.countReviews}
                  rating={data?.item?.ratings}
                  hostingMonthAge={data?.item?.hostedSince}
                />
              </div>
              <div className="mt-8 hidden lg:block">
                <ConfirmedInformation
                  name={data?.item?.userName}
                  confirmedInformation={data?.item?.confirmInfo}
                />
              </div>
              <div className="mt-2">
                <Button
                  variant="ghost"
                  className="underline flex gap-1 items-center text-text-400 hover:text-text-600"
                  size="sm"
                  onClick={() => setOpenReportModal(true)}
                >
                  <LucideFlag className="h-4 w-4" />
                  Report this profile
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-10">
            <AboutHost
              name={data?.item?.userName}
              work={data?.item?.work}
              livesIn={data?.item?.livesIn}
              desc={data?.item?.desc}
            />
            <hr />
            <HostReviews
              name={data?.item?.userName}
              reviewsCount={data?.item?.countReviews}
              // @ts-ignore
              reviews={data?.item?.listingWithReviews}
            />
            <hr />
            <div className="lg:hidden">
              <ConfirmedInformation
                name={data?.item?.userName}
                confirmedInformation={data?.item?.confirmInfo}
              />
              <hr className="mt-10" />
            </div>
            <HostListings
              name={data?.item?.userName}
              // @ts-ignore
              listings={data?.item?.listingWithReviews}
            />
            <hr />
            <HostGuideBooks name={data?.item?.userName} />
            <hr className="lg:hidden" />
            <div className="items-center flex lg:hidden">
              <FlagIcon className="h-5 w-5 mr-3" />
              <button
                className="underline font-semibold"
                onClick={() => setOpenReportModal(true)}
              >
                Report this profile
              </button>
            </div>
          </div>
        </div>
      )}
      <ReportHostModal
        isOpen={openReportModal}
        onClose={() => setOpenReportModal(false)}
      />
    </WidthWrapper>
  )
}

export default HostProfile
