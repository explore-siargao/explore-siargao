import React from 'react'
import IconTitleDescription from './IconTitleDescription'
import { LucideBook, LucideMapPin } from 'lucide-react'

const highlightsDummy = [
  {
    id: 1,
    icon: LucideBook,
    title: "Self check-in",
    desc: "You can check in with the building staff.",
  },
  {
    id: 2,
    icon: LucideMapPin,
    title: "Great location",
    desc: "94% of recent guests gave the location a 5-star rating.",
  },
]

const Highlights = () => {
  return (
    <>
      {highlightsDummy.map((highlight) => (
        <IconTitleDescription
          key={highlight.id}
          icon={highlight.icon}
          title={highlight.title}
          desc={highlight.desc}
        />
      ))}
    </>
  )
}

export default Highlights