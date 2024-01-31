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
    <div className="bg-gray-100 py-6">
      <WidthWrapper width={"medium"}>
        <div className="md:flex border-b-2 pb-4 md:pb-11">
          <div className="md:flex-1 pb-4 md:pb-0 md:mr-4 border-b md:border-b-0">
            <Title size={"sub"}>Support</Title>
            <Link href={""}>
              <Typography>About ExploreSiargao</Typography>
            </Link>
            <Link href={""}>
              <Typography>Help center</Typography>
            </Link>
            <Link href={""}>
              <Typography>FAQ{"'s"}</Typography>
            </Link>
            <Link href={""}>
              <Typography>Terms{" & "}conditions</Typography>
            </Link>
            <Link href={""}>
              <Typography>Privacy{" & "}cookies statement</Typography>
            </Link>
          </div>
          <div className="md:flex-1 pb-4 pt-4 md:pt-4 md:pb-0 md:mr-4 border-b md:border-b-0">
            <Title size={"sub"}>Exploresiargao</Title>
            <Link href={""}>
              <Typography>Accommodation</Typography>
            </Link>
            <Link href={""}>
              <Typography>Activities</Typography>
            </Link>
            <Link href={""}>
              <Typography>Rentals</Typography>
            </Link>
            <Link href={""}>
              <Typography>Guides</Typography>
            </Link>
            <Link href={""}>
              <Typography>Blog</Typography>
            </Link>
          </div>
          <div className="md:flex-1 pb-4 pt-4 md:pb-0 md:pt-0 md:mr-4 border-b md:border-b-0">
            <Title size={"sub"}>Destinations</Title>
            <Link href={""}>
              <Typography>General Luna</Typography>
            </Link>
            <Link href={""}>
              <Typography>Malinao</Typography>
            </Link>
            <Link href={""}>
              <Typography>Catangnan</Typography>
            </Link>
            <Link href={""}>
              <Typography>Pacifico</Typography>
            </Link>
            <Link href={""}>
              <Typography>Burgos</Typography>
            </Link>
          </div>
          <div className="md:flex-1 pt-4 md:pt-0 md:border-b-0">
            <Title size={"sub"}>Partner with us</Title>
            <Link href={""}>
              <Typography>List your business</Typography>
            </Link>
            <Link href={""}>
              <Typography>Partner terms{" & "}conditions</Typography>
            </Link>
            <Link href={""}>
              <Typography>Partner responsibilities</Typography>
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
