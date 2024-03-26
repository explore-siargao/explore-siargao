import Link from "next/link"

interface IHostSidebar {
  title: string
  icon: JSX.Element
  link: string
}

interface HostSidebarProps {
  navigation: IHostSidebar[]
}

const HostSideBar = ({ navigation }: HostSidebarProps) => {
  return (
    <div className="mt-14 w-2/12 h-screen p-5 bg-gray-200">
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    passHref={true}
                    className="text-gray-600 hover:text-black hover:bg-primary-500 
                    group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HostSideBar
