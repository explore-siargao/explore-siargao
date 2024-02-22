import ModalContainer from "@/common/components/ModalContainer";
import { Button } from "@/common/components/ui/Button";
import { Input } from "@/common/components/ui/Input";
import { Title } from "@/common/components/ui/Title";

const languagesObj = [
  {
    lang: "English US",
  },
  {
    lang: "English UK",
  },
  {
    lang: "Russian",
  },
  {
    lang: "Arabic",
  },
  {
    lang: "English US",
  },
  {
    lang: "English UK",
  },
  {
    lang: "Russian",
  },
  {
    lang: "Arabic",
  },
  {
    lang: "English US",
  },
  {
    lang: "English UK",
  },
  {
    lang: "Russian",
  },
  {
    lang: "Arabic",
  },
  {
    lang: "English US",
  },
  {
    lang: "English UK",
  },
  {
    lang: "Russian",
  },
  {
    lang: "Arabic",
  },
  {
    lang: "English US",
  },
  {
    lang: "English UK",
  },
  {
    lang: "Russian",
  },
  {
    lang: "Arabic",
  },
  {
    lang: "English US",
  },
  {
    lang: "English UK",
  },
  {
    lang: "Russian",
  },
  {
    lang: "Arabic",
  },
  {
    lang: "English US",
  },
  {
    lang: "English UK",
  },
  {
    lang: "Russian",
  },
  {
    lang: "Arabic",
  },
];

interface ModalLanguageISpeakProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalLanguageISpeak = ({ isOpen, onClose }: ModalLanguageISpeakProps) => {
  return (
    <div className="py-4 px-8 flex flex-col divide-text-100 overflow-y-auto h-[600px]"> 
      <ModalContainer size="sm" isOpen={isOpen} onClose={onClose}>
        <div className="p-5">
          <Title size={"default"}>Languages you speak</Title>
          <div className="mt-10 mb-10">
            <Input label="Search for a language" />
          </div>
          <div>
            <ul>
              {languagesObj.map((language) => (
                <li key={language.lang}>{language.lang}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-end justify-end">
            <Button size={"lg"} variant={"primary"}>
              Save
            </Button>
          </div>
        </div>
      </ModalContainer>
    </div>
  )
}

export default ModalLanguageISpeak
