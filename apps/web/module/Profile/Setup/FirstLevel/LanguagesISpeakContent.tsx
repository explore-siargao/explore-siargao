import { useEffect, useState, Dispatch } from "react";
import { Button } from "@/common/components/ui/Button";
import { Input } from "@/common/components/ui/Input";
import { Typography } from "@/common/components/ui/Typography";
import toast from "react-hot-toast";
import useProfileEditStore from "../store/useProfileEditStore";


const languagesObj = [
  {
    lang: "English US",
  },
  {
    lang: "Filipino",
  },
  {
    lang: "Russian",
  },
  {
    lang: "Español",
  },
  {
    lang: "Chechen",
  },
  {
    lang: "Chamorro",
  },
  {
    lang: "Corsican",
  },
  {
    lang: "Danish",
  },
  {
    lang: "German",
  },
  {
    lang: "Dzongkha",
  },
  {
    lang: "Greek",
  },
  {
    lang: "Estonian",
  },
  {
    lang: "Finnish",
  },
  {
    lang: "French",
  },
  {
    lang: "Irish",
  },
  {
    lang: "Galician",
  },
  {
    lang: "Hebrew",
  },
  {
    lang: "Hungarian",
  },
]

const LanguageISpeakContent = ({ setIsOpen }: { setIsOpen: Dispatch<boolean> }) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [languageCheckboxes, setLanguageCheckboxes] = useState<{ [key: string]: boolean }>({});
  const [searchTerm, setSearchTerm] = useState<string>("");
  const setLanguageISpeakStore = useProfileEditStore((state) => state.setLanguageISpeak);
  const languageISpeakStore = useProfileEditStore((state) => state.languageISpeak);

  useEffect(() => {
    if (languageISpeakStore) {
      setSelectedLanguages(languageISpeakStore.split(", "));
    }
  }, []);

  useEffect(() => {
    const checkboxes: { [key: string]: boolean } = {};
    languagesObj.forEach((language) => {
      checkboxes[language.lang] = selectedLanguages.includes(language.lang);
    });
    setLanguageCheckboxes(checkboxes);
  }, [selectedLanguages]);

  const toggleLanguage = (lang: string) => {
    const isSelected = languageCheckboxes[lang];
    const updatedCheckboxes = { ...languageCheckboxes, [lang]: !isSelected };
    setLanguageCheckboxes(updatedCheckboxes);
    setSelectedLanguages(Object.keys(updatedCheckboxes).filter((key) => updatedCheckboxes[key]));
  };

  const save = () => {
    if (selectedLanguages.length > 0) {
      const selectedLanguagesString = selectedLanguages.join(", ");
      setLanguageISpeakStore(selectedLanguagesString);
      setIsOpen(false);
      toast.success("Saved");
    } else {
      toast.error("Please select at least one language");
    }
  };

  const filteredLanguages = languagesObj.filter((language) =>
    language.lang.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlightMatch = (text: string) => {
    const index = text.toLowerCase().indexOf(searchTerm.toLowerCase());
    if (index === -1) return text;
    return (
      <>
        <span className="font-semibold">{text.substring(0, index)}</span>
        <span className="font-light">{text.substring(index, index + searchTerm.length)}</span>
        <span className="font-semibold">{text.substring(index + searchTerm.length)}</span>
      </>
    );
  };

  return (
    <>
      <div className="flex flex-col divide-text-100 overflow-y-auto h-[600px]">
        <div className="p-5">
          <Typography variant="h2" className="font-semibold mb-2">
            Languages you speak
          </Typography>
          <div className="mt-6 mb-10">
            <Input
              type="search"
              label="Search for a language"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <ul>
              {filteredLanguages.map((language) => (
                <Typography key={language.lang} variant="h4" className="font-semibold text-text-400">
                  <li key={language.lang}>
                    <div className="flex items-end justify-end">
                      <Input
                        className="w-10"
                        label=""
                        type="checkbox"
                        checked={languageCheckboxes[language.lang]}
                        onChange={() => toggleLanguage(language.lang)}
                      />
                    </div>
                    {highlightMatch(language.lang)}
                    <div className="border-b mt-5 mb-5" />
                  </li>
                </Typography>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t" />
      <div className="flex items-end justify-end p-5">
        <Button size="lg" variant="primary" onClick={save}>
          Save
        </Button>
      </div>
    </>
  );
};

export default LanguageISpeakContent;
