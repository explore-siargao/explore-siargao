import ModalContainer from "@/common/components/ModalContainer";
import { Button } from "@/common/components/ui/Button";


interface AboutTitleDescriptionProps {
  aboutSpace: string;
}

const AboutTitleDescription: React.FC<AboutTitleDescriptionProps> = ({
    aboutSpace,
}) => {
  
  return (
    <><ModalContainer title="About this space">
          <div className="flex text-sm mb-2 ml-5">{aboutSpace}</div>
      </ModalContainer>
      <Button className="underline" variant={"ghost"}>Show more</Button></>
  );
};

export default AboutTitleDescription;
