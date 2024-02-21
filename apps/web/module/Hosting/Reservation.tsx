import Link from 'next/link'
import { Title } from '@/common/components/ui/Title'
import { ChevronDown, ChevronLeft, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/common/components/ui/Button'
import { Typography } from '@/common/components/ui/Typography'
import { usePathname } from 'next/navigation'

interface IReservationPagesTab {
    title: string
    link: string
    isSelected?: boolean
  }
  
  interface ReservationPagesTabProps {
    tabs: IReservationPagesTab[]
  }

  const Reservation = ({ tabs }: ReservationPagesTabProps) => {
    const currentPath = usePathname()
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className="text-gray-600 py-4 flex justify-between items-center px-4">
        <Link href={''}><ChevronLeft/></Link>
        <nav>
          <ul className="flex space-x-2">
            <li>
              <Link href="">
                <Button variant={"outline"}>
                  <div className='flex gap-2'>
                    <SlidersHorizontal className='w-4 h-4'/>
                    Filter
                  </div>
                </Button>
              </Link>
            </li>
            <li>
              <Link href="">
                <Button variant={"outline"}>
                  <div className='flex gap-2'>
                    Export
                    <ChevronDown className='w-4 h-4'/>
                  </div>
                </Button>
              </Link>
            </li>
            <li>
              <Link href=""><Button variant={"outline"}>Print</Button></Link>
            </li>
          </ul>
        </nav>
      </header>
      <Title>Reservations</Title>
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
            <option key={tab.title} value={tab.link} selected={tab.isSelected}>
              {tab.title}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-5" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link key={tab.title} href={tab.link} passHref={true}>
                <div
                  className={`flex items-center whitespace-nowrap border-b-2 py-4 px-1 text-sm text-md font-semibold ${
                    tab.isSelected || currentPath === tab.link
                      ? "border-primary-500 text-primary-600"
                      : "border-transparent text-gray-500 hover:border-primary-500 hover:text-primary-600"
                  }`}
                >
                  {tab.title}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
      <div className="border-b border-gray-300 w-full"></div>
      <footer className="mt-auto py-4 pt-10 h-5">
        <div className="container bottom-0 mx-auto text-center justify-center border-t pt-7">
          <Typography>
            How can we make it easier to make your reservation?
            <Link href={''} className='underline decoration-1 font-semibold'> Share your feedback</Link>
          </Typography>
        </div>
      </footer>
    </div>
  )
}

export default Reservation
