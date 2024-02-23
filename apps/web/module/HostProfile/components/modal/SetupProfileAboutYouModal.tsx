import ModalContainer from "@/common/components/ModalContainer"
import { Button } from "@/common/components/ui/Button"
import { Typography } from "@/common/components/ui/Typography"
import { useInputSetupProfileAboutYouStore } from "@/module/HostProfile/store/useSetupProfileAboutYouStore"
import { useState } from "react"


interface ISetUpProfileAboutYouModalProps {
  isModalOpen: boolean
  onClose: () => void
  onSave: (value: string) => void
}

const SetUpProfileAboutYouModal = ({
  isModalOpen,
  onClose,
}: ISetUpProfileAboutYouModalProps) => {
  const setInputValue = useInputSetupProfileAboutYouStore(state => state.setInputValue);
  const [value, setValue] = useState('');


  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 450) {
      // setInputValue(inputValue);
      setValue(inputValue);
    }
  };

 

  return (
    <ModalContainer onClose={onClose} isOpen={isModalOpen} size="sm">
      <div className="py-4 px-6 flex flex-col divide-text-100 overflow-y-auto">
        <Typography variant='h2' fontWeight='semibold'>About you</Typography>
        <Typography variant='h5'>
          Tell us a little bit about yourself, so your future hosts or guests can get to know you.
        </Typography>
        <textarea
          className="p-2 border border-gray-300 rounded-md w-full h-32 mt-7"
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex justify-end pt-1">
          <Typography variant={"h6"} fontWeight={"semibold"}>
            {value.length}/450 Characters
          </Typography>
        </div>
      </div>
      <div className="flex items-center p-4 md:p-5 bottom-0 border-t border-gray-200 rounded-b dark:border-gray-600">
        <div className="flex justify-between w-full">
          <Button variant="default" className="ml-auto" >
            Save
          </Button>
        </div>
      </div>
    </ModalContainer>
  )
}

export default SetUpProfileAboutYouModal