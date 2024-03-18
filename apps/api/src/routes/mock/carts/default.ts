import {Request, Response} from "express"
import { carts } from "./jsons/carts"
import { ResponseService } from "@/common/service/response"
import { REQUIRED_VALUE_EMPTY } from "@/common/constants"

const response = new ResponseService()
export const getCartsByUser = async(req:Request, res:Response)=>{
const userId = Number(req.params.userId)
const filterCarts = carts.filter((item)=>{
    return userId === item.userId
}) 
res.json(response.success({items:filterCarts, allItemCount:filterCarts.length}))
}

export const getCartsByHost = async(req:Request, res:Response)=>{
    const hostId = Number(req.params.hostId)
    const filterCarts = carts.filter((item)=>{
        return hostId === item.Listing.hostId
    }) 
    res.json(response.success({items:filterCarts, allItemCount:filterCarts.length}))
}

export const getCartsByListing = async(req:Request, res:Response)=>{
    const listingId = Number(req.params.listingId)
    const filterCarts = carts.filter((item)=>{
        return listingId === item.listingId
    }) 
    res.json(response.success({items:filterCarts, allItemCount:filterCarts.length}))
}

export const addCart = async(req:Request, res:Response)=>{
    const userId = Number(req.params.userId)
    const {listingId, guestCounts, totalFee, dateFrom,dateTo} = req.body
    const listing = {
        id:listingId,
        hostId:1,
        title:"Amazing World",
        address:"Siargao City",
        imageKey: "5.jpg",
        serviceFee: 300,
        cleaningFee: 200,
        fee: 8000
    }
    const user ={
        id:userId,
        firstName:"James",
        lastName:"Gomez"
    }
    if(!listingId || !guestCounts || !totalFee || !dateFrom || !dateTo){
        return res.json(response.error({message:REQUIRED_VALUE_EMPTY}))
    }
    const cartsData = {
        id:10,
        userId:userId,
        User:user,
        listingId:listingId,
        listing:listing,
        guestCounts:JSON.stringify(guestCounts),
        totalFee:totalFee,
        dateFrom:dateFrom,
        dateTo:dateTo
    }
   
    //@ts-ignore
    const newCart = carts.push(cartsData)
    res.json(response.success({item:cartsData, message:"New item successfully added to cart."}))

}

export const updateCart = async(req:Request, res:Response)=>{
    const cartId = Number(req.params.cartId)
    const {guestCounts, totalFee, dateFrom,dateTo} = req.body
    const findCart = carts.findIndex((item)=>item.id===cartId)
    if(findCart===-1){
        return res.json(response.error({message:"No cart found or already deleted"}))
    }
    const updatedcart =  {
        ...carts[findCart],
        guestCounts:JSON.stringify(guestCounts),
        totalFee:totalFee,
        dateFrom:dateFrom,
        dateTo:dateTo
    }
    //@ts-ignore
    carts[findCart] = updatedcart
    res.json(response.success({item:carts[findCart],message:"Cart details successfully updated"}))
}

export const deleteCart = async(req:Request, res:Response)=>{
    const cartId = Number(req.params.cartId);
    const findCartIndex = carts.findIndex((item) => item.id === cartId);
    
    if (findCartIndex === -1) {
        return res.json(response.error({ message: "No cart found or already deleted" }));
    }

    carts.splice(findCartIndex, 1);

    return res.json({ message: "Cart deleted successfully" });
}