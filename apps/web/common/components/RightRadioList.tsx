import { Input } from "./ui/Input"
import { Title } from "./ui/Title"
import { Typography } from "./ui/Typography"

interface RightRadioListProps {
  title: string
  lists: { id: number | string; option: string }[]
}

const RightRadioList = ({ title, lists }: RightRadioListProps) => {
  return (
    <div className="flex flex-col w-full">
      <Title size="sub" className="w-full py-3 border-b">
        {title}
      </Title>
      {lists.map((choice) => (
        <div key={choice.id} className="flex w-full py-3 border-b">
          <label className="flex items-center w-full">
            <Typography>{choice.option}</Typography>
            <input
              name="helper-radio"
              type="radio"
              value={choice.option}
              className="ml-auto w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
          </label>
        </div>
      ))}
    </div>
  )
}
export default RightRadioList
