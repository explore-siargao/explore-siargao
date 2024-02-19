import Link from "next/link"

interface Tab {
  name: string
  icon?: JSX.Element
  link: string
}

interface TabsProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabName: string) => void
}

const Tabs = ({ tabs, activeTab, onTabChange }: TabsProps) => {
  const handleTabClick = (tabName: string) => {
    alert(`Selected ${tabName}`)
    onTabChange(tabName)
  }

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
          value={activeTab}
          onChange={(e) => {
            const selectedTabName = e.target.value
            handleTabClick(selectedTabName)
            const selectedTab = tabs.find((tab) => tab.name === selectedTabName)
            if (selectedTab) window.location.href = selectedTab.link
          }}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.link}
                passHref={true}
                legacyBehavior={true}
              >
                <a
                  onClick={() => handleTabClick(tab.name)}
                  className={`flex items-center whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
                    tab.name === activeTab
                      ? "border-primary-500 text-primary-600"
                      : "border-transparent text-gray-500 hover:border-primary-300 hover:text-primary-700"
                  }`}
                >
                  {tab.icon && <span className="mr-1">{tab.icon}</span>}
                  {tab.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Tabs
