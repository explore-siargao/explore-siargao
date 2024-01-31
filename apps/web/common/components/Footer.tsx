"use client"
import Link from "next/link"
import { WidthWrapper } from "./WidthWrapper"
import { Title } from "./ui/Title"
import { Typography } from "./ui/Typography"
import LanguageIcon from "./icons/LanguageIcon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className="bg-gray-100 pb-6 pt-16">
      <WidthWrapper width={"medium"}>
        <div className="md:flex border-b-2 pb-4 md:pb-11">
          <div className="md:flex-1 pb-4 md:pb-0 md:mr-4 border-b  md:border-b-0">
            <Title size={"sub"} className="mb-1">Support</Title>
            <Link href={""}>
              <Typography className="mb-1">About ExploreSiargao</Typography>
            </Link>
            <Link href={""}>
              <Typography className="mb-1">Help center</Typography>
            </Link>
            <Link href={""}>
              <Typography className="mb-1">FAQ{"'s"}</Typography>
            </Link>
            <Link href={""}>
              <Typography className="mb-1">Terms{" & "}conditions</Typography>
            </Link>
            <Link href={""}>
              <Typography className="mb-1">Privacy{" & "}cookies statement</Typography>
            </Link>
          </div>
          <div className="md:flex-1 pb-4 pt-4 md:pt-0 md:pb-0 md:mr-4 border-b md:border-b-0">
            <Title size={"sub"} className="mb-1">Exploresiargao</Title>
            <Link href={""}>
              <Typography className="mb-1">Accommodation</Typography>
            </Link>
            <Link href={""}>
              <Typography className="mb-1">Activities</Typography>
            </Link>
            <Link href={""}>
              <Typography className="mb-1">Rentals</Typography>
            </Link>
            <Link href={""}>
              <Typography className="mb-1">Guides</Typography>
            </Link>
            <Link href={""}>
              <Typography className="mb-1">Blog</Typography>
            </Link>
          </div>
          <div className="md:flex-1 pb-4 pt-4 md:pb-0 md:pt-0 md:mr-4 border-b md:border-b-0">
            <Title size={"sub"} className="mb-1">Destinations</Title>
            <Link href={""}>
              <Typography className="mb-1">General Luna</Typography>
            </Link>
            <Link href={""}>
              <Typography className="mb-1">Malinao</Typography>
            </Link>
            <Link href={""}>
              <Typography className="mb-1">Catangnan</Typography>
            </Link>
            <Link href={""}>
              <Typography className="mb-1">Pacifico</Typography>
            </Link>
            <Link href={""}>
              <Typography className="mb-1">Burgos</Typography>
            </Link>
          </div>
          <div className="md:flex-1 pt-4 md:pt-0 md:border-b-0">
            <Title size={"sub"} className="mb-1">Partner with us</Title>
            <Link href={""}>
              <Typography className="mb-1">List your business</Typography>
            </Link>
            <Link href={""}>
              <Typography className="mb-1">Partner terms{" & "}conditions</Typography>
            </Link>
            <Link href={""}>
              <Typography className="mb-1">Partner responsibilities</Typography>
            </Link>
          </div>
        </div>
        <div className="md:flex items-center mt-5 justify-between">
          <div className="md:flex-1">
            &copy; 2024 ExploreSiargao &middot;
            <Link href={""} className="mx-2">
              Terms
            </Link>{" "}
            &middot;
            <Link href={""} className="mx-2">
              Sitemap
            </Link>{" "}
            &middot;
            <Link href={""} className="mx-2">
              Privacy
            </Link>{" "}
          </div>
          <div className="flex items-center justify-center">
            <LanguageIcon />
            <Typography className="mx-2">English{"(US)"}</Typography>
            <Typography fontWeight={"bold"} className="mx-3">
              &#8369;
            </Typography>
            <Typography className="mx-2">PHP</Typography>
            <Link href={""}>
              <FontAwesomeIcon icon={faFacebook} size="sm" className="ml-2" />
            </Link>
            <Link href={""}>
              <FontAwesomeIcon icon={faTwitter} size="sm" className="mx-2" />
            </Link>
            <Link href={""}>
              <FontAwesomeIcon icon={faInstagram} size="sm" className="mx-2" />
            </Link>
          </div>
        </div>
      </WidthWrapper>
    </div>
  )
}

export default Footer
