import { useState } from "react"
import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Title } from "@/common/components/ui/Title"
import { Dispatch } from "react"
import useFirstLevelStore from "../store/useFirstLevelStore" 
import toast from "react-hot-toast"
import { iconsMap } from "@/common/helpers/iconMap"
import { Typography } from "@/common/components/ui/Typography"

const locationObj = [
  {
    loc: "Paete, Laguna",
  },
  {
    loc: "Santa Maria, Laguna",
  },
  {
    loc: "Longos, Kalayaan, Laguna",
  },
  {
    loc: "Santa Cruz, Laguna",
  },
]

const WhereILiveContent = ({ setIsOpen }: { setIsOpen: Dispatch<boolean> }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

  const filteredLocations = locationObj.filter((location) =>
    location.loc.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setShowResults(e.target.value !== "")
  }

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location)
  }

  const handleLocationHover = (location: string | null) => {
    setHoveredLocation(location)
  }

  const highlightMatch = (text: string) => {
    const index = text.toLowerCase().indexOf(searchTerm.toLowerCase())
    if (index === -1) return text
    return (
      <>
        <span className="font-semibold">{text.substring(0, index)}</span>
        <span className="font-light">
          {text.substring(index, index + searchTerm.length)}
        </span>
        <span className="font-semibold">
          {text.substring(index + searchTerm.length)}
        </span>
      </>
    )
  }

  const setWhereILiveStore = useFirstLevelStore((state) => state.setWhereILive)
  const save = () => {
    if (selectedLocation) {
      setWhereILiveStore(selectedLocation)
      toast.success("Saved")
    } else {
      toast.error("Please select a location")
    }
  }

  return (
    <div>
      <div className="p-5">
        <Title size={"default"}>Where you live</Title>
        <div className="mt-10 mb-10">
          <Input
            type="search"
            label="Where I live:"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        {showResults && (
          <div>
            <ul>
              {filteredLocations.map((location, index) => (
                <Typography variant="h3">
                  <li
                    className="m-5"
                    key={index}
                    onClick={() => handleLocationClick(location.loc)}
                    onMouseEnter={() => handleLocationHover(location.loc)}
                    onMouseLeave={() => handleLocationHover(null)}
                    style={{ cursor: "pointer", position: "relative" }}
                  >
                    {highlightMatch(location.loc)}
                    {(selectedLocation === location.loc ||
                      hoveredLocation === location.loc) && (
                      <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        {iconsMap.check()}
                      </span>
                    )}
                    <div className="border-b mt-5 bm-5"></div>
                  </li>
                </Typography>
              ))}
            </ul>
          </div>
        )}
        <div className="flex items-end justify-end">
          <Button size="lg" variant="primary" onClick={save}>
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}

export default WhereILiveContent
