import { prisma } from "@/common/helpers/prismaClient";

export const reservationListing = async()=>{
    const getPaymentMethods = await prisma.paymentMethod.findMany({
        where: {
          deletedAt: null,
        },
      })

      const getUsers = await prisma.user.findMany({
        where: {
          deletedAt: null,
        },
      })

      const getListings = await prisma.listing.findMany({
        where: {
          deletedAt: null,
        },
      })

      const createReservationListings = await prisma.reservationListing.createMany({
        data: [
          {
            listingId: getListings[0]?.id || 0,
            guestCount: JSON.stringify({
              children: 2,
              adult: 2,
              infants: 0,
            }),
            currentFee: 1000,
            reservationDate: '2024-03-29T03:01:27.936Z',
            userId: getUsers[3]?.id || 0,
            paymentMethodId: getPaymentMethods[3]?.id || 0,
            isNight: false,
            status: 'Pending',
            totalFee: 4000,
            messageToHost: '',
          },
          {
            listingId: getListings[0]?.id || 0,
            guestCount: JSON.stringify({
              children: 1,
              adult: 2,
              infants: 0,
            }),
            currentFee: 1000,
            reservationDate: '2024-03-29T03:01:27.936Z',
            userId: getUsers[4]?.id || 0,
            paymentMethodId: getPaymentMethods[3]?.id || 0,
            isNight: false,
            status: 'Pending',
            totalFee: 3000,
            messageToHost: '',
          },
          {
            listingId: getListings[1]?.id || 0,
            guestCount: JSON.stringify({
              children: 2,
              adult: 3,
              infants: 0,
            }),
            currentFee: 500,
            reservationDate: '2024-03-29T03:01:27.936Z',
            userId: getUsers[3]?.id || 0,
            paymentMethodId: getPaymentMethods[3]?.id || 0,
            isNight: false,
            status: 'Pending',
            totalFee: 2500,
            messageToHost: '',
          },
          {
            listingId: getListings[2]?.id || 0,
            guestCount: JSON.stringify({
              children: 1,
              adult: 1,
              infants: 0,
            }),
            currentFee: 1500,
            reservationDate: '2024-03-29T03:01:27.936Z',
            userId: getUsers[3]?.id || 0,
            paymentMethodId: getPaymentMethods[3]?.id || 0,
            isNight: false,
            status: 'Pending',
            totalFee: 3000,
            messageToHost: '',
          },
          {
            listingId: getListings[4]?.id || 0,
            guestCount: JSON.stringify({
              children: 0,
              adult: 1,
              infants: 0,
            }),
            currentFee: 1500,
            reservationDate: '2024-03-29T03:01:27.936Z',
            userId: getUsers[4]?.id || 0,
            paymentMethodId: getPaymentMethods[3]?.id || 0,
            isNight: false,
            status: 'Pending',
            totalFee: 1500,
            messageToHost: '',
          },
        ],
      })
      console.log({createReservationListings})
}