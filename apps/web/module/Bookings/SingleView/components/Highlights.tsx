import { LucideBook } from "lucide-react"
import IconTitleDescription from "./IconTitleDescription"
import Image from "next/image"
import HostInformation from "./HostInformation"

interface IconTitleDescription {
    id:number
    icon: React.ElementType
    title: string
    desc: string
  }
interface HighlightsProps{
    hostName:string
    hostDuration:string
    hostProfilePic:string
    highlights:IconTitleDescription[]
}


const HighlightsSection = ({highlights, hostProfilePic, hostDuration, hostName}:HighlightsProps)=>{
    const ProfilePic =()=>(
        <Image
        src={`/assets/${hostProfilePic}`}
        alt="Profile picture"
        width={20}
        height={20}
        className="rounded-full h-12 w-12 object-cover"
      />
) 
    return(
<div className="w-full">
    <div className="w-full border-b pb-4">
        <IconTitleDescription 
            icon={ProfilePic}
            title={"Hosted by "+hostName}
            desc={hostDuration}
        />
    </div>
    <div className="w-full">
    {highlights.map((highlight)=>(
    <IconTitleDescription 
    key={highlight.id}
    icon={highlight.icon}
     title={highlight.title}
      desc={highlight.desc}
      />
    ))}  
    </div>
    
</div>
    )
}
export default HighlightsSection