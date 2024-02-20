import { prisma } from "@/common/helpers/prismaClient";

export const reportListing = async()=>{
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
      
    const createReportListings = await prisma.reportListing.createMany({
        data: [
          {
            listingId: getListings[1]?.id || 0,
            name: 'Scam',
            reason: 'Not same on picture',
            description: 'Host post false images',
            reportedBy: getUsers[4]?.id || 0,
          },
          {
            listingId: getListings[1]?.id || 0,
            name: 'Scam',
            reason: 'Not same on picture',
            description: 'Host post false images',
            reportedBy: getUsers[3]?.id || 0,
          },
          {
            listingId: getListings[4]?.id || 0,
            name: 'bad service',
            reason: 'Crew is not good',
            description: 'They do not work properly',
            reportedBy: getUsers[3]?.id || 0,
          },
          {
            listingId: getListings[4]?.id || 0,
            name: 'bad service',
            reason: 'Crew is not good',
            description: 'They do not work properly',
            reportedBy: getUsers[4]?.id || 0,
          },
          {
            listingId: getListings[1]?.id || 0,
            name: 'Waste of money',
            reason: 'Food so pricy',
            description: 'The price of place is not as expected from price',
            reportedBy: getUsers[3]?.id || 0,
          },
        ],
      })
      console.log({createReportListings})
}