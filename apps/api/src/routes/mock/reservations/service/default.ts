import { Request, Response } from 'express'
import { reservations } from './jsons/reservations'
import { ResponseService } from '@/common/service/response'
import { REQUIRED_VALUE_EMPTY } from '@/common/constants'

const response = new ResponseService()

export const getReservationsByGuest = async(req: Request, res: Response) => {
    const guestId = Number(req.params.guestId)

    const filterReservations = reservations.filter((item) => {
        return guestId === item.mainGuestId
    })
    
    res.json(
        response.success({ items: filterReservations, allItemCount: filterReservations.length })
    )
}

export const getReservationsByHost = async(req: Request, res: Response) => {
    const hostId = Number(req.params.hostId)

    const filterReservations = reservations.filter((reservation) => {
        return reservation.bookedUnits.some((unit) => unit.hostId === hostId);
    })
    
    res.json(
        response.success({ items: filterReservations, allItemCount: filterReservations.length })
    )
}