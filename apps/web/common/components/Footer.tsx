import Link from "next/link"
import { WidthWrapper } from "./WidthWrapper"
import { Title } from "./ui/Title"
import { Typography } from "./ui/Typography"
import LanguageIcon from "./icons/LanguageIcon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

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
              Privacy &middot;
            </Link>{" "}
            <Link href={""} className="mx-2">
              Your Privacy Choices
            </Link>{" "}
            <label className="relative inline-flex cursor-pointer top-1">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
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
