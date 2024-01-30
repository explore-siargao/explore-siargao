import React from "react";

interface IconDescriptionProps {
  icon: React.ElementType;
  desc: string;
}

const IconDescription: React.FC<IconDescriptionProps> = ({ icon: Icon, desc }) => {
  return (
    <div className="flex items-center mb-2 gap-5">
      {Icon && <Icon className="w-6 h-6"/>}
      <div className="flex">{desc}</div>
    </div>
  );
};

export default IconDescription;
