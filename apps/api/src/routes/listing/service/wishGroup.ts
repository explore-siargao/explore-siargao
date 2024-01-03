import { ResponseService } from '@/common/service/response'
import { PrismaClient } from '@prisma/client'
import { REQUIRED_VALUE_EMPTY, USER_NOT_EXIST } from '@repo/constants'
import { Z_WishGroup } from '@repo/contract'
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
        res.json(
          response.success({
            items: getAllWishGroupByUser,
            allItemCount: getAllWishGroupByUser.length,
            message: '',
          })
        )
      } else {
        res.json(
          response.success({
            items: getAllWishGroupByUser,
            allItemCount: getAllWishGroupByUser.length,
            message: 'No data found',
          })
        )
      }
    } else {
      res.json(response.error({ message: USER_NOT_EXIST }))
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}

export const wishGroupByUserAndTitle = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const title = req.params.title
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
      res.json(
        response.success({
          items: getWishGroupByuserAndTitle,
          allItemCount: getWishGroupByuserAndTitle.length,
          message: '',
        })
      )
    } else {
      res.json(response.error({ message: USER_NOT_EXIST }))
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}

export const addWishGroup = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const isValidInput = Z_WishGroup.safeParse(req.body)
  if(isValidInput.success){
  const { title, listingId } = req.body
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
        res.json(
          response.success({
            items: findWishGroup,
            allItemCount: findWishGroup.length,
            message: '',
          })
        )
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
              note: null,
            },
          })
          res.json(
            response.success({
              item: newWishGroup,
              allItemCount: 1,
              message: 'Successfully added to wish group',
            })
          )
        } else {
          res.json(
            response.error({ message: 'Booking item not found in our system' })
          )
        }
      }
    } else {
      res.json(response.error({ message: USER_NOT_EXIST }))
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}else{
  res.json(response.error({message:isValidInput.error.message}))
}
}

export const addToExistingWishGroup = async (req: Request, res: Response) => {
  const listingId = req.body.listingId
  const userId = Number(req.params.userId)
  const wishGroupId = Number(req.params.wishGroupId)
  const isValidInput = Z_WishGroup.safeParse(req.body)
  if(isValidInput.success){
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
              note: null,
            },
          })
          res.json(
            response.success({
              item: newWishGroup,
              allItemCount: 1,
              message: `Wish list successfully added to ${getWishGroup.title}`,
            })
          )
        } else {
          res.json(response.error({ message: 'Invalid booking' }))
        }
      } else {
        res.json(response.error({ message: 'Wish group not found' }))
      }
    } else {
      res.json(response.error({ message: USER_NOT_EXIST }))
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}else{
  res.json(response.error({message:isValidInput.error.message}))
}
}

export const addNewWishGroup = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const isInputValid = Z_WishGroup.safeParse(req.body)
  if(isInputValid.success){
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
            note: null,
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
          res.json(
            response.success({
              item: newWishGroup,
              allItemCount: 1,
              message: 'new Wish group successfully added',
            })
          )
        } else {
          res.json(
            response.error({ message: 'Item already exist in wishgroup' })
          )
        }
      } else {
        res.json(response.error({ message: USER_NOT_EXIST }))
      }
    } else {
      res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}else{
  res.json(response.error({message: isInputValid.error.message}))
}
}

export const deleteWishGroup = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const wishGroupId = Number(req.params.wishGroupId)
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (getUser !== null) {
      const findWishGroup = await prisma.wishGroup.findFirst({
        where: {
          id: wishGroupId,
          userId: userId,
        },
      })
      if (findWishGroup !== null) {
        const removeWishGroup = await prisma.wishGroup.delete({
          where: {
            id: wishGroupId,
            userId: userId,
          },
        })
        res.json(
          response.success({
            item: removeWishGroup,
            allItemCount: 1,
            message: 'Wishlist successfully deleted',
          })
        )
      } else {
        res.json(
          response.error({
            message: 'Wishlist not found or its already deleted',
          })
        )
      }
    } else {
      res.json(response.error({ message: USER_NOT_EXIST }))
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}

export const addEditWishListNote = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const wishGroupId = Number(req.params.wishGroupId)
  const isValidInput = Z_WishGroup.safeParse(req.body)
  if(isValidInput.success){
  const note = req.body.note
  try {
    const getUser = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    })
    if (getUser !== null) {
      const getWish = await prisma.wishGroup.findFirst({
        where: {
          id: wishGroupId,
        },
      })
      if (getWish !== null) {
        if (note) {
          const addorEditNote = await prisma.wishGroup.update({
            where: {
              userId: userId,
              id: wishGroupId,
            },
            data: {
              note: note,
            },
          })
          res.json(
            response.success({
              item: addorEditNote,
              allItemCount: 1,
              message: 'Note successfully added',
            })
          )
        } else {
          res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
        }
      } else {
        res.json(response.error({ message: 'Wish list not found' }))
      }
    } else {
      res.json(response.error({ message: USER_NOT_EXIST }))
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}else{
res.json(response.error({message:isValidInput.error.message}))
}
}

export const editTitle = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const isValidInput = Z_WishGroup.safeParse(req.body)
  if(isValidInput.success){
    const oldTitle = req.body.oldTitle
    const newTitle = req.body.newTitle
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (getUser !== null) {
      if (oldTitle && newTitle) {
        const updateTtitle = await prisma.wishGroup.updateMany({
          where: {
            userId: userId,
            title: oldTitle,
          },
          data: {
            title: newTitle,
          },
        })
        if (updateTtitle.count !== 0) {
          res.json(
            response.success({
              item: updateTtitle,
              allItemCount: updateTtitle.count,
              message: 'Title successfully updated',
            })
          )
        } else {
          res.json(response.error({ message: 'No title has been updated' }))
        }
      } else {
        res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
      }
    } else {
      res.json(response.error({ message: USER_NOT_EXIST }))
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}else{
  res.json(response.error({message:isValidInput.error.message}))
}
}

export const deleteWishGroupByTitle = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const title = req.params.title
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (getUser !== null) {
      if (title) {
        const deleteWishGroups = await prisma.wishGroup.deleteMany({
          where: {
            userId: userId,
            title: title,
          },
        })
        if (deleteWishGroups.count !== 0) {
          res.json(
            response.success({
              item: deleteWishGroups,
              allItemCount: deleteWishGroups.count,
              message: 'Wish group successfully deleted',
            })
          )
        } else {
          res.json(
            response.error({ message: 'No wish group has been deleted' })
          )
        }
      } else {
        res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
      }
    } else {
      res.json(response.error({ message: USER_NOT_EXIST }))
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}
