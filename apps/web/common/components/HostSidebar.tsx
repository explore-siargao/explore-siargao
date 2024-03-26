import Link from "next/link"
import { Typography } from "./ui/Typography"

interface TopLinks {
  title: string
  icon: JSX.Element
  link: string
  isSelected?: boolean
}

interface BottomLinks {
  title: string
  link: string
}

interface HostSidebarProps {
  topLinks: TopLinks[]
  bottomLinks: BottomLinks[]
}

const HostSideBar = ({ topLinks, bottomLinks }: HostSidebarProps) => {
  return (
    <div className="w-2/12 h-screen pl-1 pr-1 pt-5 pb-5 fixed ">
      <nav className="flex flex-col h-full justify-between">
        <ul className="space-y-1">
          {topLinks.map((item) => (
            <li
              key={item.title}
              className={`${item.isSelected ? "relative" : ""}`}
            >
              {item.isSelected && (
                <div className="absolute left-0 w-1 h-6 bg-secondary-500 mt-2"></div>
              )}
              <Link
                href={item.link}
                passHref={true}
                className="text-gray-600 hover:text-black hover:bg-primary-400 
                group flex gap-x-1 rounded-md p-2 text-sm leading-6 font-semibold"
              >
                {item.icon}
                <Typography variant="p" fontWeight="semibold">
                  {item.title}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <Typography
            className="ml-1 text-gray-600 text-sm"
            variant="p"
            fontWeight="semibold"
          >
            NEED HELP?
          </Typography>
          {bottomLinks.map((item) => (
            <li key={item.title}>
              <Link
                href={item.link}
                passHref={true}
                className="text-gray-600 hover:text-black hover:underline 
                group flex gap-x-3 rounded-md p-1 text-sm leading-6 font-semibold"
              >
                <Typography variant="p" fontWeight="semibold">
                  {item.title}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default HostSideBar