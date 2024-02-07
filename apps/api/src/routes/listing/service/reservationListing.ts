import { prisma } from "@/common/helpers/prismaClient";
import { Z_ReservationListing } from "@repo/contract";
import { Request, Response } from "express";
import { ResponseService } from "@/common/service/response";
import { UNKNOWN_ERROR_OCCURRED, USER_NOT_EXIST } from "@/common/constants";
const response = new ResponseService()

export const addReservation = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId)
    const {
        reservationDate,
        currentFee,
        totalFee,
        guestCount,
        status,
        isNight,
        messageToHost,
        paymentMethodId,
        listingId
    } = req.body

    const isValidInput = Z_ReservationListing.safeParse(req.body)
    try {
        const getUser = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        })

        if (!getUser) {
            return res.json(response.error({message: USER_NOT_EXIST}))
        }
        if (!isValidInput.success) {
            return res.json(response.error({message: JSON.parse(isValidInput.error.message)}))
        }

        const newReservation = await prisma.reservationListing.create({
            data: {
                userId:userId,
                listingId: listingId,
                paymentMethodId: paymentMethodId,
                reservationDate: reservationDate,
                currentFee: currentFee,
                totalFee: totalFee,
                guestCount: guestCount,
                status: status,
                isNight: isNight,
                messageToHost: messageToHost,
            },
        })
        res.json(
            response.success({
                item: [newReservation],
                allItemCount: 1,
                message: 'Reservation successfully added',
            })
        )
    } catch (err: any) {
        const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
        res.json(response.error({ message: message }))
      }
}