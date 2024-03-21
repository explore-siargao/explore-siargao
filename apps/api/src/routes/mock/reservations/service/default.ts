import { Request, Response } from 'express'
import { reservations } from './jsons/reservations'
import { ResponseService } from '@/common/service/response'
import { REQUIRED_VALUE_EMPTY } from '@/common/constants'

const response = new ResponseService()

export const getReservationsByGuest = async (req: Request, res: Response) => {
  const guestId = Number(req.params.guestId)

  const filterReservations = reservations.filter((item) => {
    return guestId === item.mainGuestId
  })

  res.json(
    response.success({
      items: filterReservations,
      allItemCount: filterReservations.length,
    })
  )
}

export const getReservationsByHost = async (req: Request, res: Response) => {
  const hostId = Number(req.params.hostId)

  const filterReservations = reservations.filter((item) => {
    return item.bookedUnits.some((unit) => unit.hostId === hostId)
  })

  res.json(
    response.success({
      items: filterReservations,
      allItemCount: filterReservations.length,
    })
  )
}

export const getReservationsById = async (req: Request, res: Response) => {
  const reservationId = Number(req.params.id)

  const filterReservations = reservations.filter((item) => {
    return reservationId === item.id
  })

  res.json(
    response.success({
      items: filterReservations,
      allItemCount: filterReservations.length,
    })
  )
}

export const addReservation = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId)

  const { propertyId, startDate, endDate, guestList, bookedUnits } = req.body

  if (!propertyId || !startDate || !endDate || !guestList || !bookedUnits) {
    return res.json(response.error({ message: REQUIRED_VALUE_EMPTY }))
  }

  const reservationData = {
    id: 4,
    propertyId: propertyId,
    property: {
      propertyName: 'Property 4',
      propertyDescription: 'Property description 4',
      propertyPhotos: [
        {
          id: 1,
          key: '1.jpg',
          thumbKey: '1.jpg',
          caption: 'Amazing',
        },
        {
          id: 2,
          key: '2.jpg',
          thumbKey: '2.jpg',
          caption: 'Beautiful',
        },
        {
          id: 3,
          key: '3.jpg',
          thumbKey: '3.jpg',
          caption: 'Refreshing',
        },
        {
          id: 4,
          key: '4.jpg',
          thumbKey: '4.jpg',
          caption: 'Nature',
        },
        {
          id: 5,
          key: '5.jpg',
          thumbKey: '5.jpg',
          caption: 'Glamorous',
        },
      ],
    },
    mainGuestId: userId,
    status: 'no_show',
    startDate: startDate,
    endDate: endDate,
    guestList: guestList,
    bookedUnits: bookedUnits,
  }

  const newReservation = reservations.push(reservationData)
  res.json(
    response.success({
      item: reservationData,
      message: 'New reservation has been successfully added.',
    })
  )
}

export const updateReservation = async (req: Request, res: Response) => {
  const reservationId = Number(req.params.reservationId)

  const { propertyId, startDate, endDate, guestList, bookedUnits } = req.body
  const findReservation = reservations.findIndex(
    (item) => item.id === reservationId
  )

  if (findReservation === -1) {
    return res.json(
      response.error({ message: 'No reservation found or already deleted' })
    )
  }

  const updatedReservation = {
    ...reservations[findReservation],
    propertyId: propertyId,
    startDate: startDate,
    endDate: endDate,
    guestList: guestList,
    bookedUnits: bookedUnits,
  }
  // @ts-ignore
  reservations[findReservation] = updatedReservation
  res.json(
    response.success({
      item: reservations[findReservation],
      message: 'Reservation successfully updated',
    })
  )
}

export const deleteReservation = async (req: Request, res: Response) => {
  const reservationId = req.body.reservationId

  if (!reservationId) {
    return res.json(response.error({ message: 'No reservation id provided' }))
  }

  const findReservationIndex = reservations.findIndex(
    (item) => item.id === reservationId
  )
  // @ts-ignore
  const deletedReservation = []

  if (findReservationIndex !== -1) {
    deletedReservation.push(reservations.splice(findReservationIndex, 1)[0])
  }

  if (deletedReservation.length === 0) {
    return res.json(
      response.error({ message: 'No reservation found with provided ID' })
    )
  }

  return res.json({
    message: 'Reservation deleted successfully',
    items: deletedReservation,
  })
}
