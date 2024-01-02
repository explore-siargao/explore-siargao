import { ResponseService } from '@/common/service/response'
import { PrismaClient } from '@prisma/client'
import { REQUIRED_VALUE_EMPTY } from '@repo/constants'
import { Request, Response } from 'express'

const prisma = new PrismaClient()
const response = new ResponseService()
export const getWishGroupsByUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  try {
    const isUserExist =
      (await prisma.user.findUnique({
        where: {
          id: userId,
          deletedAt: null,
        },
      })) !== null

    if (isUserExist) {
      const getAllWishGroupByUser = await prisma.wishGroup.findMany({
        where: {
          userId: userId,
        },
      })

      if (getAllWishGroupByUser.length !== 0) {
        res.json(response.success({
          items:getAllWishGroupByUser,
          allItemCount:getAllWishGroupByUser.length,
          message:''
        }))
      } else {
        res.json(response.success({
          items: getAllWishGroupByUser,
          allItemCount:getAllWishGroupByUser.length,
          message:'No data found'
        }))
      }
    } else {
      res.json(response.error({message:'User not exist in our system'}))
    }
  } catch (err: any) {
    res.json(response.error({message:err.message}))
  }
}

export const wishGroupByUserAndTitle = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const title = req.body.title
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (getUser !== null) {
      const getWishGroupByuserAndTitle = await prisma.wishGroup.findMany({
        where: {
          title: title,
          userId: userId,
        },
      })
      res.json(response.success({
        items:getWishGroupByuserAndTitle,
        allItemCount:getWishGroupByuserAndTitle.length,
        message:''
      }))
    } else {
      res.json(response.error({message:'User not exist in our system'}))
    }
  } catch (err: any) {
    res.json(response.error({message:err.message}))
  }
}

export const addWishGroup = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const listingId = Number(req.params.listingId)
  const { title } = req.body
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (getUser) {
      const findWishGroup = await prisma.wishGroup.findMany({
        where: {
          userId: userId,
          deletedAt: null,
        },
      })
      if (findWishGroup.length !== 0) {
        res.json(response.success({
          items: findWishGroup,
          allItemCount:findWishGroup.length,
          message:''
        }))
      } else {
        const findListing = await prisma.listing.findUnique({
          where: {
            id: listingId,
          },
        })
        if (findListing !== null) {
          const newWishGroup = await prisma.wishGroup.create({
            data: {
              title: title,
              userId: userId,
              listingId: listingId,
            },
          })
          res.json(response.success({
            item:newWishGroup,
            allItemCount:1,
            message:"Successfully added to wish group"
          }))
        } else {
          res.json(response.error({message:'Booking item not found in our system'}))
        }
      }
    } else {
      res.json(response.error({message:'User not exist in hour system'}))
    }
  } catch (err: any) {
    res.json(response.error({message:err.message}))
  }
}

export const addToExistingWishGroup = async (req: Request, res: Response) => {
  const listingId = Number(req.params.listingId)
  const userId = Number(req.params.userId)
  const wishGroupId = Number(req.params.wishGroupId)

  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (getUser !== null) {
      const getWishGroup = await prisma.wishGroup.findUnique({
        where: {
          id: wishGroupId,
        },
      })
      if (getWishGroup !== null) {
        const getListing = await prisma.listing.findUnique({
          where: {
            id: listingId,
          },
        })
        if (getListing !== null) {
          const newWishGroup = await prisma.wishGroup.create({
            data: {
              title: getWishGroup.title,
              listingId: listingId,
              userId: userId,
            },
          })
          res.json(response.success({
            item:newWishGroup,
            allItemCount:1,
            message: `Wish list successfully added to ${getWishGroup.title}`,
        }))
        } else {
          res.json(response.error({message:'Invalid booking'}))
        }
      } else {
        res.json(response.error({message:'Wish group not found'}))
      }
    } else {
      res.json(response.error({message:'User not exist in our system'}))
    }
  } catch (err: any) {
    res.json(response.error({message: err.message}))
  }
}

export const addNewWishGroup = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const { title, listingId } = req.body
  try {
    if (title && listingId) {
      const getUser = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      })
      if (getUser !== null) {
        const getWishGroup = await prisma.wishGroup.findFirst({
          where: {
            userId: userId,
            listingId: listingId,
          },
        })
        if (getWishGroup === null) {
          const newWishGroup = await prisma.wishGroup.create({
            data: {
              userId: userId,
              title: title,
              listingId: listingId,
            },
          })
          res.json(response.success({item:newWishGroup, allItemCount:1, message:'new Wish group successfully added'}))
        } else {
          res.json(response.error({message:'Item already exist in wishgroup'}))
        }
      } else {
        res.json(response.error({message:'User not exist in our system'}))
      }
    } else {
      res.json(response.error({message:REQUIRED_VALUE_EMPTY}))
    }
  } catch (err: any) {
    res.json(response.error({message:err.message}))
  }
}

export const deleteWishGroup = async(req:Request, res:Response)=>{
const userId = Number(req.params.userId)
const wishGroupId = Number(req.params.wishGroupId)
  try {
    const getUser = await prisma.user.findUnique({
      where:{
        id:userId
      }
    })
    if (getUser!==null) {
      const findWishGroup = await prisma.wishGroup.findFirst({
        where:{
          id:wishGroupId,
          userId:userId
        }
      })
      if(findWishGroup!==null){
      const removeWishGroup = await prisma.wishGroup.delete({
        where:{
          id:wishGroupId,
          userId:userId
        }
      })
      res.json(response.success({item:removeWishGroup, allItemCount:1, message:"Wishlist successfully deleted"}))
    }else{
      res.json(response.error({message:"Wishlist not found or its already deleted"}))
    }
    } else {
      res.json(response.error({message:"User not found in our system"}))
    }
  } catch (err:any) {
   res.json(response.error({message: err.message}))
  }
}