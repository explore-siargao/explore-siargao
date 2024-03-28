import { Typography } from "@/common/components/ui/Typography"
import Link from "next/link"

interface Chats {
  title: string
  message: string
  badge: BadgeType
}

export enum BadgeType {
    AsGuest = "As Guest",
    AsHost = "As Host",
    INFO = "INFO",
    URGENT = "URGENT",
    NONE = "NONE"
}

interface ChatProps {
  chats: Chats[]
}

const ChatSidebar = ({ chats}: ChatProps) => {
  return (
    <>

    <div className="w-full md:w-3/12 h-screen overflow-y-auto md:pl-2 pl-4 pr-4 pb-5 fixed">
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul className="-mx-2 space-y-1 divide-y">
              {chats.map((item) => (
                <li key={item.title}>
                  <Link
                    href="/conversation"
                    passHref={true}
                    className="text-gray-600 hover:text-black hover:bg-primary-300 
                  group flex gap-x-3 rounded-md pt-2 text-sm leading-6 font-semibold justify-between"
                  >
                    <div className="h-12 overflow-hidden mb-2 mt-2">
                      <Typography
                        variant="h2"
                        fontWeight="semibold"
                        className="truncate"
                      >
                        {item.title}
                      </Typography>
                      <Typography className="text-sm truncate">
                        {item.message}
                      </Typography>
                    </div>
                    <div>
                      <span
                        className={`ml-2 justify-center inline-flex items-center rounded-md px-2 py-1  
                        ring-1 ring-inset ring-black/10 w-12 h-5 whitespace-nowrap ${
                          item.badge === BadgeType.AsHost
                            ? "bg-primary-500"
                            : "bg-secondary-500"
                        }`}
                      >
                        <Typography
                          className="text-[10px]"
                          fontWeight="semibold"
                        >
                          {item.badge}
                        </Typography>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
     
    </div>
    </>

  )
}

export default ChatSidebar
