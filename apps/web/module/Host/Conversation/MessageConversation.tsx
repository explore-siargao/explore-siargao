import React from "react"
import Image from "next/image"
import { format } from "date-fns"
import { Typography } from "@/common/components/ui/Typography"

interface IMessageProps {
  imageKey: string
  message: string
  timeSent: string
  isSender: boolean
  isSeen: boolean
}

interface MessageProps {
  messages: IMessageProps[]
}

const MessageConversation = ({ messages }: MessageProps) => {
  return (
    <div className="h-200 pt-6 pb-6">
      {messages.map((item) => (
        <>
          {item.isSender === false && (
            <div className="flex pr-2" key={item.timeSent}>
              <div className="flex-none w-14 p-2">
                <Image
                  src={`/assets/${item.imageKey}`}
                  width={50}
                  height={50}
                  alt="Profile image"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <div className="flex-1">
                <div className="w-1/2">
                  <Typography
                    variant="p"
                    className="bg-secondary-600 md:rounded-xl text-white p-4 rounded-xl inline-block"
                  >
                    {item.message}
                  </Typography>
                </div>
                <Typography variant="h6" className="text-gray-400 pt-2 right-0">
                      {format(new Date(item.timeSent), "hh:mm a")}
                    </Typography>
              </div>
            </div>
          )}

          {item.isSender === true && (
            <>
              <div className="flex justify-end gap-2 mb-4">
                <div className="w-1/2 flex flex-row-reverse">
                  <div className="flex flex-col">
                    <Typography
                      variant="p"
                      className="bg-primary-600 md:rounded-xl text-white p-4 rounded-xl inline-block"
                    >
                      {item.message}
                    </Typography>
                    <Typography variant="h6" className="text-gray-400 pt-2 right-0 ml-auto">
                      {format(new Date(item.timeSent), "hh:mm a")}
                    </Typography>
                  </div>
                </div>

                <div className="flex-none justify-end place-content-end ">
                  <div className="relative">
                    {item.isSeen === true && (
                      <Image
                        src={`/assets/${item.imageKey}`}
                        width={50}
                        height={50}
                        alt="Profile image"
                        className="w-5 h-5 object-cover rounded-full"
                      />
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ))}
    </div>
  )
}

export default MessageConversation
