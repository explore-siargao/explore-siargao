import React from "react";
import { Typography } from "@/common/components/ui/Typography";

interface ListingMarkProps {
  icon: React.ReactNode;
  title: string;
  desc?: string;
}

const ListingMark: React.FC<ListingMarkProps> = ({
  icon: icon,
  title,
  desc,
}) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 mb-2">
      <div className="flex items-center gap-2">
        <div className="pt-2">
        {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="pl-10 pr-3">
        <Typography variant={"h5"} className="text-justify">
          {desc}
        </Typography>
      </div>
    </div>
  );
};

export default ListingMark;
