"use client"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import { Spinner } from "@/common/components/ui/Spinner"

import ChatSidebar, { BadgeType } from "./components/ChatSidebar"
import MessageConversation from "./components/MessageConversation"

const chats = [
  {
    title: "Important Meeting",
    message: "Don't forget about the meeting tomorrow at 10 AM.",
    badge: BadgeType.INFO,
  },
  {
    title: "Urgent Task",
    message: "Please review and approve the document as soon as possible.",
    badge: BadgeType.URGENT,
  },
  {
    title: "New Message",
    message: "Hi, how are you doing today?",
    badge: BadgeType.NONE,
  },
  {
    title: "Important Meeting",
    message: "Don't forget about the meeting tomorrow at 10 AM.",
    badge: BadgeType.INFO,
  },
  {
    title: "Urgent Task",
    message: "Please review and approve the document as soon as possible.",
    badge: BadgeType.URGENT,
  },
  {
    title: "New Message",
    message: "Hi, how are you doing today?",
    badge: BadgeType.NONE,
  },
  {
    title: "Important Meeting",
    message: "Don't forget about the meeting tomorrow at 10 AM.",
    badge: BadgeType.INFO,
  },
  {
    title: "Urgent Task",
    message: "Please review and approve the document as soon as possible.",
    badge: BadgeType.URGENT,
  },
  {
    title: "New Message",
    message: "Hi, how are you doing today?",
    badge: BadgeType.NONE,
  },
]

const messages = [
  {
    imageKey: "1.jpg",
    message: "Hello, how are you?",
    timeSent: "2024-03-28T12:00:00",
    isSender: true,
    isSeen: true,
  },
  {
    imageKey: "1.jpg",
    message: "Hello, im fine",
    timeSent: "2024-03-28T12:03:00",
    isSender: false,
    isSeen: true,
  },
  {
    imageKey: "1.jpg",
    message: "Wanna grab some food?",
    timeSent: "2024-03-28T12:03:00",
    isSender: true,
    isSeen: true,
  },
  {
    imageKey: "1.jpg",
    message: "okay let's go!",
    timeSent: "2024-03-28T12:03:00",
    isSender: false,
    isSeen: true,
  },
 
]

const ConversationPage = () => {
  return (
    <WidthWrapper className="my-24 lg:pt-6" width="full">
      <div className="flex">
        <div className="w-1/4">
          <ChatSidebar chats={chats} />
        </div>
        <div className="flex-1 hidden md:h-screen bg-gray-50 md:flex flex-col-reverse">
          <MessageConversation messages={messages} />
        </div>
      </div>
    </WidthWrapper>
  )
}

export default ConversationPage
