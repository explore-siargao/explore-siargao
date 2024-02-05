import {Typography} from "@/common/components/ui/Typography"
import React, { useState } from "react"
import { TitleSection } from "./TitleSection"
import { Button } from "@/common/components/ui/Button"

interface WhereYouWillBe {
  title: string
}

const WhereYouWillBe: React.FC<WhereYouWillBe> = ({ title }) => {
  const firstDesc =
    "The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape. The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape"
  const secondDesc =
    "The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape. The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape"

  const maxLength = 100
  const [readMore, setReadMore ] = useState(false)
  const [secondReadMore, secondSetReadMore] = useState(false)
  const toggleReadMore = () => {
    setReadMore(!readMore)
  }
  const toggleSecondReadMore = () => {
    secondSetReadMore(!secondReadMore)
  }
  return (
    <div>
      <h1 className="font-bold text-3xl px-4 mb-5">Where You'll be</h1>
      <div className="container px-4">
        <TitleSection
          title={title}
          className="text-xl font-semibold mb-4"
        ></TitleSection>
      </div>
      <div className="px-4">
        {readMore ? (
          <Typography>{firstDesc}</Typography>
        ) : (
          <Typography>{`${firstDesc.slice(0, maxLength)}...`}</Typography>
        )}
      </div>
      <Button
        className="text-sm font-semibold underline mb-4"
        variant={"ghost"}
        onClick={toggleReadMore}
      >
        {/* Read more &gt; */}
        {readMore ? "Read Less" : "Read more >"}
      </Button>
      <div className="container px-4 mb-5">
        <TitleSection
          title="Getting Around"
          className="text-xl font-semibold mb-4"
        />
      </div>
      <div className="px-4">
        {secondReadMore ? (
          <Typography>{secondDesc}</Typography>
        ) : (
          <Typography>{`${secondDesc.slice(0, maxLength)}...`}</Typography>
        )}
      </div>
      <Button
        className="text-sm font-semibold underline mb-4"
        variant={"ghost"}
        onClick={toggleSecondReadMore}
      >
        {/* Read more &gt; */}
        {secondReadMore ? "Read Less" : "Read more >"}
      </Button>
    </div>
  )
}

export default WhereYouWillBe
