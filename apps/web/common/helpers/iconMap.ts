import { LucideWifi } from "lucide-react";

type T_IconsMap = {
  className: string
}

const iconsMap = {
  wiFi: (props?: T_IconsMap) => <LucideWifi {...props} />,
};