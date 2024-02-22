import ToggleSwitch from "@/common/components/ui/Toggle"
import { Typography } from "@/common/components/ui/Typography"
import { useState } from "react"

interface IProfileFourthLevel {
  year: string
  destination: string
}[]

interface ProfileFourthLevelProps {
  description: IProfileFourthLevel[]
  initialChecked?: boolean
}

const ProfileFourthLevel = ({
  description,
  initialChecked = false,
}: ProfileFourthLevelProps) => {
  const [checked, setChecked] = useState(initialChecked)
  const handleToggleChange = () => {
    setChecked(!checked)
  }

  return (
    <div className="w-1/2">
      <div className="pb-5">
        <Typography variant="h1" className="font-semibold">
          Your past trips
        </Typography>

        <Typography
          variant="h3"
          className="text-gray-600 flex items-end justify-between"
        >
          <span>Show the destination I've traveled to.</span>
          <ToggleSwitch checked={checked} onChange={handleToggleChange} />
        </Typography>
      </div>

      <div className="flex grid-cols-1 gap-5">
        {description.map((item) => (
          <div
            className={`border p-5 pb-12 rounded-xl w-[200px] ${
              checked ? "bg-primary-400" : "bg-primary-200 text-gray-300"
            }`}
            style={{
              transition: "background-color 0.2s ease-in-out",
            }}
          >
            <Typography key={item.year} variant="p" className="font-semibold">
              {item.year}
            </Typography>
            <Typography
              key={item.destination}
              variant="h2"
              className="font-semibold"
            >
              {item.destination}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfileFourthLevel
