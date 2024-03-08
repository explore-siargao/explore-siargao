import { Button } from "@/common/components/ui/Button";
import ToggleSwitch from "@/common/components/ui/Toggle";
import { Typography } from "@/common/components/ui/Typography";
import { Dispatch, useState } from "react";
import toast from "react-hot-toast";
import useProfileEditStore from "../store/useProfileEditStore";

interface Decade {
  decade: string;
}

const decadeObj: Decade[] = [
  {
    decade: "Born in the 90s",
  },
  {
    decade: "Born in the 80's",
  },
  {
    decade: "Born in the 70's",
  },
  {
    decade: "Born in the 60's",
  },
  {
    decade: "Born in the 50's",
  },
];

const DecadeYouWereBornContent = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<boolean>;
}) => {
  const decadeOn = useProfileEditStore((state) => state.decadeWereBorn);
  const [toggleState, setToggleState] = useState<boolean>(decadeOn !== "");

  const setDecadeWereBornStore = useProfileEditStore(
    (state) => state.setDecadeWereBorn
  );

  const save = () => {
    if (toggleState) {
      setDecadeWereBornStore(String(decadeObj[2]?.decade))
      setIsOpen(false);
      toast.success("Saved");
    } else {
      setIsOpen(false);
      setDecadeWereBornStore(""); // Clear the decade
    }
  };

  const handleToggleChange = (checked: boolean) => {
    setToggleState(checked);
    if (checked) {
      setDecadeWereBornStore(String(decadeObj[2]?.decade))
    } else {
      setDecadeWereBornStore(""); // Clear the decade
    }
  };

  return (
    <div>
      <div className="p-5">
        <Typography variant="h2" className="mb-2 font-semibold">
          Decade you were born
        </Typography>
        <div>
          <Typography variant="h5">
            Don’t worry, other people won’t be able to see your exact birthday.
          </Typography>
        </div>
        <div className="flex mt-5 cursor-pointer">
          <div
            className="clickable-typography cursor-pointer"
          >
            <Typography variant="h3" className="font-light">
              Show the decade I was born
            </Typography>
          </div>
          <div className="flex-grow" />
          <div className="flex items-end justify-end "
          >
            <ToggleSwitch checked={toggleState} onChange={()=>handleToggleChange(!toggleState)} />
          </div>
        </div>
        <div>
          {decadeOn !== "" && (
            <Typography variant="h4" className="text-gray-500 font-light">
              {decadeObj[2]?.decade} {/* Example of displaying the decade */}
            </Typography>
          )}
        </div>
      </div>
      <div className="border-t" />
      <div className="flex items-end justify-end p-5">
        <Button size="lg" variant="primary" onClick={save}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default DecadeYouWereBornContent;
