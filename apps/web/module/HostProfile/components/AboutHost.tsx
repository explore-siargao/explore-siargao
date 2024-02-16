import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"
import { BriefcaseIcon, GlobeAltIcon } from "@heroicons/react/24/outline"

type AboutHostProps = {
    name: string,
    work: string,
    livesIn: string,
    desc: string,
}

const AboutHost = ({name, work, livesIn, desc}: AboutHostProps) => {
    return (
        <div>
            <Title className="font-bold">About {name}</Title>
            <div className="grid grid-cols-2 mt-9 mb-7">
                <div className="flex items-center">
                    <BriefcaseIcon className="h-6 w-6 mr-3 mb-0.5" strokeWidth={1.2} />
                    <Typography variant="h4">My work: {work}</Typography>
                </div>
                <div className="flex items-center">
                    <GlobeAltIcon className="h-6 w-6 mr-3 mb-0.5" strokeWidth={1.2} />
                    <Typography variant="h4">Lives in {livesIn}</Typography>
                </div>
            </div>
            <Typography variant="p">{desc}</Typography>
        </div>
    )
}

export default AboutHost