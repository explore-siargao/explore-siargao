import { ResponseService } from '@/common/service/response'
import { PrismaClient } from '@prisma/client'
import { REQUIRED_VALUE_EMPTY, USER_NOT_EXIST } from '@/common/constants'
import { Z_ReportListing } from '@repo/contract'
import { Request, Response } from 'express'

const prisma = new PrismaClient()
const response = new ResponseService()

export const getAllReports = async (req: Request, res: Response) => {
  try {
    const getAllReportsListing = await prisma.reportListing.findMany({
      where: {
        deletedAt: null,
        listing: {
          id: {
            not: undefined,
          },
        },
      },
      include: {
        user: true,
        listing: true,
      },
    })
    if (getAllReportsListing.length !== 0) {
      res.json(
        response.success({
          items: getAllReportsListing,
          allItemCount: getAllReportsListing.length,
          message: '',
        })
      )
    } else {
      res.json(
        response.success({
          items: getAllReportsListing,
          allItemCount: getAllReportsListing.length,
          message: 'No reports found',
        })
      )
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}

export const getReportsByListing = async (req: Request, res: Response) => {
  const listingId = Number(req.params.listingId)
  try {
    const getListing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
    })
    if (!getListing) {
      return res.json(response.error({ message: 'Listing not found' }))
    }
    const reportsByListingId = await prisma.reportListing.findMany({
      where: {
        listingId: listingId,
      },
      include: {
        user: true,
        listing: true,
      },
    })
    if (reportsByListingId.length !== 0) {
      res.json(
        response.success({
          items: reportsByListingId,
          allItemCount: reportsByListingId.length,
          message: '',
        })
      )
    } else {
      res.json(response.error({ message: 'No reports found' }))
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}

export const getReport = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  try {
    const getReportById = await prisma.reportListing.findFirst({
      where: {
        id: id,
        deletedAt: null,
        listing: {
          id: {
            not: undefined,
          },
        },
      },
      include: {
        user: true,
        listing: true,
      },
    })
    if (getReportById) {
      res.json(
        response.success({
          item: getReportById,
          allItemCount: 1,
          message: '',
        })
      )
    } else {
      res.json(
        response.error({
          message: 'Report already deleted or report data not found',
        })
      )
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}

export const addReport = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const { name, reason, description, listingId } = req.body
  const isInputValid = Z_ReportListing.safeParse(req.body)
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (!getUser) {
      return res.json(response.error({ message: USER_NOT_EXIST }))
    }
    if (!isInputValid.success) {
      return res.json(
        response.error({ message: JSON.parse(isInputValid.error.message) })
      )
    }
    const getListing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
    })
    if (!getListing) {
      return res.json(
        response.error({
          message: 'The listing you are trying to report was not found',
        })
      )
    }
    const newReport = await prisma.reportListing.create({
      data: {
        name: name,
        reason: reason,
        description: description,
        listingId: listingId,
        reportedBy: userId,
      },
    })
    res.json(
      response.success({
        item: newReport,
        allItemCount: 1,
        message: 'Report successfully submitted',
      })
    )
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}

export const updateReport = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const id = Number(req.params.id)
  const { name, reason, description } = req.body
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    const getReport = await prisma.reportListing.findUnique({
      where: {
        id: id,
      },
    })
    if (!getUser) {
      return res.json(response.error({ message: USER_NOT_EXIST }))
    }
    if (!getReport) {
      return res.json(
        response.error({
          message: 'Report that you are trying to update was not found',
        })
      )
    }
    if (reason || description) {
      const updateReportById = await prisma.reportListing.update({
        where: {
          id: id,
        },
        data: {
          name: name,
          reason: reason,
          description: description,
        },
      })
      res.json(
        response.success({
          item: updateReportById,
          allItemCount: 1,
          message: 'Report successfully updated',
        })
      )
    } else {
      res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
    }
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}

export const deleteReport = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)
  const id = Number(req.params.id)
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    const getReport = await prisma.reportListing.findUnique({
      where: {
        id: id,
      },
    })
    if (!getUser) {
      return res.json(
        response.error({
          message: USER_NOT_EXIST,
        })
      )
    }
    if (!getReport) {
      return res.json(
        response.error({
          message: 'Report not found or already deleted',
        })
      )
    }
    const removeReport = await prisma.reportListing.delete({
      where: {
        id: id,
      },
    })
    res.json(
      response.success({
        item: removeReport,
        allItemCount: 1,
        message: 'Report sucessfully deleted',
      })
    )
  } catch (err: any) {
    res.json(response.error({ message: err.message }))
  }
}
