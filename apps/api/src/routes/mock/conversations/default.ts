import { Response ,Request} from "express";
import { conversations } from "./jsons/conversation";
import { ResponseService } from "@/common/service/response";
import { T_Conversation } from "@repo/contract";
import { REQUIRED_VALUE_EMPTY } from "@/common/constants";

const response = new ResponseService()

export const getConversations = async (req: Request, res: Response) => {
    const userId = 1
    const filterConvo = conversations.filter((item) => item.hostId === userId || item.guestId===userId);

    const groupedConversations: { [key: number]: T_Conversation[] } = {};
    filterConvo.forEach((conversation) => {
        if (conversation && conversation.Listing && conversation.Listing.id !== undefined) {
            const listingId = conversation.Listing.id;
            if (!groupedConversations[listingId]) {
                groupedConversations[listingId] = [];
            }
            //@ts-ignore
            groupedConversations[listingId].push(conversation);
        }
    });

    const groupedConversationsWithLast: T_Conversation[] = [];
    for (const key in groupedConversations) {
        if (Object.hasOwnProperty.call(groupedConversations, key)) {
            const convos = groupedConversations[key];
            if (convos && convos.length > 0) {
                const lastConvo = convos[convos.length - 1];
                //@ts-ignore
                groupedConversationsWithLast.push(lastConvo);
            }
        }
    }

    const convos = groupedConversationsWithLast.map((item)=>({
        asHost : item.Listing.hostId===userId,
        listingTitle:item.Listing.title,
        imageKey:item.Listing.imageKey,
        snippet:item.Message.message,
        createdAt:item.Message.createdAt
    })).sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateA - dateB;
    });

    return res.json(response.success({ items: convos, allItemCount:convos.length }));
}

export const addMessage = async(req:Request, res:Response)=>{
    const senderId = 5
    const now = new Date()
    const {listingId,message, receiverId} = req.body
    if(!listingId || !message && !receiverId){
        return res.json(response.error({message:REQUIRED_VALUE_EMPTY}))
    }
    const messageData = {
        id:10,
        senderId:senderId,
        receiverId:receiverId,
        message:message,
        Sender:{
            id:senderId,
            name:"Mark Hernandez"
        },
        Receiver:{
            id:receiverId,
            name:"Jhay Hernandez"
        },
        createdAt : `${now.getFullYear()}:${(now.getMonth() + 1).toString().padStart(2, '0')}:${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`    
    }

    const GuestData ={
        id:1,
        name:"Jhay Hernandez",
        imageKey:"1.jpg"
    }
    const HostData ={
        id:5,
        name:"Mark Hernandez",
        imageKey:"2.jpg"
    }
    const ListingData={
        id:7,
        hostId:5,
        title:"Cool Resort",
        address:"Siargao City",
        hostName:"Mark Hernandez"
    }
    const newConversation = {
        id:7,
        listingId:listingId as number,
        messageId:messageData.id,
        guestId:1,
        hostId:ListingData.hostId,
        Guest:GuestData,
        Host:HostData,
        Listing:ListingData,
        Message:messageData,
        createdAt : `${now.getFullYear()}:${(now.getMonth() + 1).toString().padStart(2, '0')}:${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`    
    }
    //@tes-ignore
    conversations.push(newConversation)

    res.json(response.success({item:newConversation, message:"Message successfully sent"}))
}
