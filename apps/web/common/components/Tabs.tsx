import Link from "next/link"
import { usePathname } from "next/navigation"

interface Tab {
  name: string
  icon?: JSX.Element
  link: string
  isSelected?: boolean
}

interface TabsProps {
  tabs: Tab[]
}

const Tabs = ({ tabs }: TabsProps) => {
  const currentPath = usePathname()

  return (
    <div>
      <div className="sm:hidden">
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
          value={currentPath}
          onChange={(e) => (window.location.href = e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.link} selected={tab.isSelected}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link key={tab.name} href={tab.link} passHref={true}>
                <div
                  className={`flex items-center whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
                    tab.isSelected || currentPath === tab.link
                      ? "border-primary-500 text-primary-600"
                      : "border-transparent text-gray-500 hover:border-primary-500 hover:text-primary-600"
                  }`}
                >
                  {tab.icon && <span className="mr-1">{tab.icon}</span>}
                  {tab.name}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Tabs
