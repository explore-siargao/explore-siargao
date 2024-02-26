import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Typography } from "@/common/components/ui/Typography"
import { Dispatch } from "react"
import toast from "react-hot-toast"
import useFirstLevelStore from "../store/useFirstLevelStore"
import InputMaxLength from "@/common/helpers/InputMaxLength"

const FavoriteSongInHighSchoolContent = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<boolean>
}) => {
  const { value: favoriteSong, onChange: handleInputChange } =InputMaxLength("", 40)
  const setFavoriteSongStore = useFirstLevelStore((state) => state.setFavoriteSong)
  const save = () => {
    if (favoriteSong) {
      setFavoriteSongStore(favoriteSong)
      toast.success("Saved")
    } else {
      toast.error("Please fill out the form")
    }
  }
  return (
    <>
    <div>
      <div className="p-5">
        <Typography variant="h1" className="font-semibold mb-5">
          What was your favorite song in high school?
        </Typography>
        <Typography variant="h3">
          However embarrassing, share the tune you listened to on repeat as a
          teenager.
        </Typography>

        <div className="mt-10 mb-10">
          <Input label="My favorite song in high school:"
          onChange={handleInputChange}
          maxLength={40}/>
          <Typography
            variant="p"
            className="flex items-end justify-end font-semibold"
          >
            {favoriteSong.length}/40 characters
          </Typography>
        </div>
        <div className="flex items-end justify-end">
          <Button size="lg" variant="primary" onClick={() => save()}>
            Save
          </Button>
        </div>
      </div>
    </div>
    </>
  )
}

export default FavoriteSongInHighSchoolContent
