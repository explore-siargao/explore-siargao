import { InformationCircleIcon } from "@heroicons/react/20/solid"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { CheckCircleIcon, XCircleIcon, XIcon } from "lucide-react"
import React, { useState } from "react"

interface AlertProps {
  type: "success" | "danger" | "warning" | "info"
  title: string
  onClose?: () => void
  children?: React.ReactNode
}

const InlineAlerts: React.FC<AlertProps> = ({
  type,
  title,
  onClose,
  children,
}) => {
  const [showAlert, setShowAlert] = useState(true)

  let alertClasses = "p-4 rounded-md"

  const handleClose = () => {
    setShowAlert(false)
    if (onClose) {
      onClose()
    }
  }

  if (!showAlert) {
    return null
  }

  return (
    <div className={`relative ${alertClasses}`}>
      {type === "success" && (
        <>
          <div className="rounded-md bg-green-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircleIcon
                  className="h-5 w-5 text-green-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-semibold text-green-800">
                  {title}
                  <button
                    type="button"
                    className=" inline-flex items-center justify-center text-green-400 hover:text-green-600 absolute right-7 "
                    onClick={handleClose}
                  >
                    <XIcon className="h-4 w-4" aria-hidden="true" size={"md"} />
                  </button>
                </h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>{children}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {type === "danger" && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon
                className="h-5 w-5 text-red-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-semibold text-red-800">
                {title}
                <button
                  type="button"
                  className=" inline-flex items-center justify-center text-red-400 hover:text-red-600 absolute right-7 "
                  onClick={handleClose}
                >
                  <XIcon className="h-4 w-4" aria-hidden="true" size={"md"} />
                </button>
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{children}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {type === "info" && (
        <div className="rounded-md bg-blue-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <InformationCircleIcon
                className="h-5 w-5 text-blue-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-semibold text-blue-600">
                {title}
                <button
                  type="button"
                  className=" inline-flex items-center justify-center text-blue-400 hover:text-blue-600 absolute right-7 "
                  onClick={handleClose}
                >
                  <XIcon className="h-4 w-4" aria-hidden="true" size={"md"} />
                </button>
              </h3>
              <div className="mt-2 text-sm text-blue-600">
                <p>{children}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {type === "warning" && (
        <div className="rounded-md bg-yellow-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-semibold text-yellow-800">
                {title}
                <button
                  type="button"
                  className=" inline-flex items-center justify-center text-yellow-400 hover:text-yellow-600 absolute right-7 "
                  onClick={handleClose}
                >
                  <XIcon className="h-4 w-4" aria-hidden="true" size={"md"} />
                </button>
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>{children}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default InlineAlerts
