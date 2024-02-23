
import React, { useState } from 'react'
import SetUpProfileModal from '../components/modal/SetupProfileAboutYouModal';
import { useInputSetupProfileAboutYouStore } from '@/module/HostProfile/store/useSetupProfileAboutYouStore';
import { Typography } from '@/common/components/ui/Typography';

const SetUpProfileAboutYou = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

const introText = useInputSetupProfileAboutYouStore(state => state.inputValue);

console.log(introText)

const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);
const closeAfterSave = () => setIsModalOpen(false);

  return (
    <div>
        <Typography variant='h1' fontWeight='semibold'>About You</Typography>
        <div className="relative">
        <div className="border border-gray-300 rounded-md p-5 mt-5 w-full h-25 border-dotted">
            <div className="absolute pl-3 left-2 text-gray-400">
            <Typography>
            {introText ? introText : "Write something fun and punchy."}
            </Typography>
            </div>
            <div className="pt-10 bottom-2 left-2 underline cursor-pointer" onClick={openModal}>
            {introText ? "Edit intro" : "Add intro"}
            </div>
        </div>
        </div>

        <SetUpProfileModal isModalOpen={isModalOpen} onClose={closeModal} onSave={closeAfterSave} />
    </div>
  )
}

export default SetUpProfileAboutYou