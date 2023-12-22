import { PrismaClient } from '@prisma/client'
import { REQUIRED_VALUE_EMPTY } from '@repo/constants'
import { Request, Response } from 'express'

const prisma = new PrismaClient()
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
        res.json({
          error: false,
          items: getAllWishGroupByUser,
          itemCount: getAllWishGroupByUser.length,
          message: '',
        })
      } else {
        res.json({
          error: false,
          items: getAllWishGroupByUser,
          itemCount: getAllWishGroupByUser.length,
          message: 'No data found',
        })
      }
    } else {
      res.json({
        error: true,
        items: null,
        itemCount: 0,
        message: 'User is not exist on our system',
      })
    }
  } catch (err: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: err.message,
    })
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
        res.json({
          error: false,
          items: findWishGroup,
          itemCount: findWishGroup.length,
          message: '',
        })
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
          res.json({
            error: false,
            item: newWishGroup,
            itemCount: 1,
            message: 'Added to wish list',
          })
        } else {
          res.json({
            error: true,
            items: null,
            itemCount: 0,
            message: 'Booking item not found to our system',
          })
        }
      }
    } else {
      res.json({
        error: true,
        items: null,
        itemCount: 0,
        message: 'User not found to our system',
      })
    }
  } catch (err: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: err.message,
    })
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
          res.json({
            error: false,
            item: newWishGroup,
            itemCount: 1,
            message: `Wish list successfully added to ${getWishGroup.title}`,
          })
        } else {
          res.json({
            error: true,
            items: null,
            itemCount: 0,
            message: 'Invalid booking',
          })
        }
      } else {
        res.json({
          error: true,
          items: null,
          itemCount: 0,
          message: 'Wish group not found',
        })
      }
    } else {
      res.json({
        error: true,
        items: null,
        itemCount: 0,
        message: 'User not exist to our system',
      })
    }
  } catch (err: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: err.message,
    })
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
          res.json({
            error: false,
            item: newWishGroup,
            itemCount: 1,
            message: 'New wish group successfully added',
          })
        } else {
          res.json({
            error: true,
            items: null,
            itemCount: 0,
            message: 'Item already exist in wish list group',
          })
        }
      } else {
        res.json({
          error: true,
          items: null,
          itemCount: 0,
          message: 'User not exist to our system',
        })
      }
    } else {
      res.json({
        error: true,
        items: null,
        itemCount: 0,
        message: REQUIRED_VALUE_EMPTY,
      })
    }
  } catch (err: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: err.message,
    })
  }
}
