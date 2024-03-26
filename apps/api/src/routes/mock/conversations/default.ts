import { Response ,Request} from "express";
import { conversations } from "./jsons/conversation";
import { ResponseService } from "@/common/service/response";

const response = new ResponseService()
export const getConversationByListingAndUserGuest = async(req:Request, res:Response)=>{
    const listingId = Number(req.params.listingId)
    const userGuestId = Number(req.params.userId)
    const filterConversation = conversations.filter((item)=>{
        return item.listingId===listingId && item.userGuestId === userGuestId
    })
    const messages = filterConversation.map((item)=>(
        {
            isHost:item.Listing.hostName===item.Message.Sender.name,
            sender:item.Message.Sender.name,
            message:item.Message.message,
            createdAt: item.Message.createdAt
        }
    ))
    return res.json(response.success({
        items:messages,
        allItemCount:messages.length
    }))
}

export const addMessage = async(req:Request, res:Response)=>{
    const {
        listingId,
        senderId,
        receiverId
    } = req.body
}