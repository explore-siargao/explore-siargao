import React, { useState } from "react";
import {
  CheckCircleIcon,
  XCircleIcon,
  XIcon
} from "lucide-react";
import { ExclamationTriangleIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import { cn } from "@/common/helpers/cn";

interface AlertProps {
  type: "success" | "danger" | "warning" | "info";
  title: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

const InlineAlerts: React.FC<AlertProps> = ({
  type,
  title,
  onClose,
  children,
}) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
    onClose && onClose();
  };

  if (!showAlert) return null;

  const iconMap = {
    success: CheckCircleIcon,
    danger: XCircleIcon,
    info: InformationCircleIcon,
    warning: ExclamationTriangleIcon
  };

  const Icon = iconMap[type];

  const alertClasses = cn(
    "pt-1",
    "relative",
    "rounded-md",
    type === "success" && "bg-green-50",
    type === "danger" && "bg-red-50",
    type === "info" && "bg-blue-50",
    type === "warning" && "bg-yellow-50",
  );

  const textClasses = cn(
    "text-sm",
    "font-semibold",
    type === "success" && "text-green-800",
    type === "danger" && "text-red-800",
    type === "info" && "text-blue-800",
    type === "warning" && "text-yellow-800",
  );

  const descClasses = cn(
    "pt-2",
    "text-sm",
    type === "success" && "text-green-800",
    type === "danger" && "text-red-800",
    type === "info" && "text-blue-800",
    type === "warning" && "text-yellow-800",
  );
  return (
    <div className={alertClasses}>
      <div className="rounded-md p-3">
        <div className="flex">
          <div className="flex-shrink-0">
            <Icon className={cn("h-5", "w-5", 
            type === "success" && "text-green-400", 
            type === "danger" && "text-red-400", 
            type === "info" && "text-blue-400", 
            type === "warning" && "text-yellow-400")} aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className={textClasses}>
              {title}
              <button
                type="button"
                className={cn(
                  "inline-flex",
                  "items-center",
                  "justify-center",
                  "hover:text-opacity-75",
                  type === "success" && "text-green-600",
                  type === "danger" && "text-red-600",
                  type === "info" && "text-blue-600",
                  type === "warning" && "text-yellow-600",
                  "absolute",
                  "right-5"
                )}
                onClick={handleClose}
              >
                <XIcon className="h-4 w-4" aria-hidden="true" size={"md"} />
              </button>
            </h3>
            <div className={descClasses}>
              <p>{children}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InlineAlerts;
