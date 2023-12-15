import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const getWishGroupsByUser =async (req:Request,res:Response) => {
    const prisma = new PrismaClient()
    const userId = Number(req.params.userId)
    try {
    const isUserExist = await prisma.user.findUnique({
        where:{
            id:userId,
            deletedAt:null
        }
    })!== null

    if(isUserExist){
    const getAllWishGroupByUser = await prisma.wishGroup.findMany({
        where:{
            userId:userId
        }
    })

    if(getAllWishGroupByUser.length!==0){
        res.json({
            error: false,
            items: getAllWishGroupByUser,
            itemCount: getAllWishGroupByUser.length,
            message:"",
          }) 
    }else{
        res.json({
            error: false,
            items: getAllWishGroupByUser,
            itemCount: getAllWishGroupByUser.length,
            message:"No data found",
          })  
    }

}else{
    res.json({
        error: true,
        items: null,
        itemCount: 0,
        message:"User is not exist on our system",
      })
}
    } catch (err:any) {
        res.json({
            error: true,
            items: null,
            itemCount: 0,
            message: err.message,
          })
    }
} 