import { Button } from "@/common/components/ui/Button"
import { Textarea } from "@/common/components/ui/Textarea"
import { Typography } from "@/common/components/ui/Typography"
import { LucideChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ContactHostProps {
  hostName: string
  listingName: string
  hostImage?: string
}

const ContactHost = ({
  hostName,
  listingName,
  hostImage,
}: ContactHostProps) => {
  return (
    <div className="w-full">
      <div className="py-8">
        <Link href="">
          <LucideChevronLeft size={50} strokeWidth={1} />
        </Link>
      </div>
      <div className="flex w-full pb-6 border-b justify-between">
        <div>
          <Typography variant={"h2"}>Contact {hostName}</Typography>
          <Typography className="text-gray-400">{listingName}</Typography>
        </div>
        <div>
          {!hostImage ? (
            <div className="bg-primary-400 w-16 h-16 rounded-full ring-1"></div>
          ) : (
            <Image src={"/" + hostImage} width={2} height={2} alt="image" />
          )}
        </div>
      </div>
      <div className="w-full py-6">
        <Typography variant={"h2"}>Message the Host</Typography>
        <Textarea className="h-40 my-6 focus:border-primary-700 focus:border-3 focus:ring-primary-700 " />
        <Button variant={"outline"} size={"lg"} className="font-extrabold">
          Send Message
        </Button>
      </div>
    </div>
  )
}

export default ContactHost
