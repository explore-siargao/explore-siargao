import { Typography } from "@/common/components/ui/Typography"
import { BriefcaseIcon, GlobeAltIcon } from "@heroicons/react/24/outline"
import { AboutHostProps } from "../types/AboutHost"

const AboutHost = ({ name, work, livesIn, desc }: AboutHostProps) => {
  return (
    <div>
      <Typography variant="h1" className="font-semibold hidden lg:block">About {name}</Typography>
      <div className="mt-2 lg:mt-6">
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at quam quis nulla facilisis posuere. Ut bibendum non lacus ut vulputate. Aliquam eu scelerisque tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Typography>
      </div>
      <div className="lg:grid grid-cols-2 mt-2 lg:mt-6 mb-7">
        <div className="flex items-center">
          <BriefcaseIcon className="h-6 w-6 mr-3 mb-0.5" strokeWidth={1.2} />
          <Typography variant="h4">My work: {work}</Typography>
        </div>
        <div className="flex items-center mt-3 lg:mt-0">
          <GlobeAltIcon className="h-6 w-6 mr-3 mb-0.5" strokeWidth={1.2} />
          <Typography variant="h4">Lives in {livesIn}</Typography>
        </div>
      </div>
      <Typography variant="p">{desc}</Typography>
    </div>
  )
}

export default AboutHost
