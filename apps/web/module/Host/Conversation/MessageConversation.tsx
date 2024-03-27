
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
  const timeSent = new Date()

  return (
    <div className="h-200 pt-6 pb-6">
      {messages.map((item) => (
        <>
          {item.isSender === false && (
            <div className="flex pr-2" key={item.timeSent}>
              <div className="flex-none w-14 p-2">
                <Image
                  src={`/assets/${item.imageKey}`}
                  width={10}
                  height={10}
                  alt="Profile image"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <div className="flex-1">
                <div className="sm:w-1/2">
                  <Typography
                    variant="p"
                    className="bg-secondary-700 md:rounded-full text-white p-4 rounded-lg inline-block"
                  >
                    {item.message}
                  </Typography>
                </div>
              </div>
            </div>
          )}

          {item.isSender === true && (
            <div className="flex flex-row-reverse gap-2 pl-6">
              <div className="flex-none flex justify-end items-end">
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
              <div className="flex justify-end">
                <div className="w-1/2 right-0 ">
                  <Typography
                    variant="p"
                    className="flex-1 bg-primary-700 md:rounded-full text-white p-4 rounded-lg  w-full"
                  >
                    {item.message}
                  </Typography>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 text-gray-400 text-center mb-4">
            {format(new Date(item.timeSent), "hh:mm a")}
          </div>
        </>
      ))}
    </div>
  )
}

export default MessageConversation