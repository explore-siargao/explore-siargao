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
  children: React.ReactNode
}

const HostSideBar = ({ topLinks, bottomLinks, children }: HostSidebarProps) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-2 md:pt-6">
        <div className=" md:w-2/12 md:h-screen pl-1 pt-20 mt-5 md:mt-0 pr-1 md:pb-8 md:fixed">
          <nav className="md:flex md:flex-col md:h-full justify-between flex">
            <ul className="lg:space-x-0 lg:space-y-1 flex flex-wrap md:flex-col justify-between">
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
            <ul className="hidden md:flex md:flex-col">
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
      </div>
      <div className="col-span-12 lg:top-0 md:col-span-10 md:pl-0 sm:pl-4 mb-0 absolute top-24 right-0 p-1 w-full lg:w-auto">
        {children}
      </div>
    </div>
  )
}

export default HostSideBar
