import { prisma } from '@/common/helpers/prismaClient'

export const highlight = async () => {
  const createHighlights = await prisma.highLights.createMany({
    data: [
      {
        icon: 'wifi',
        title: 'Great for remote work',
        description: 'Fast wifi at 165 Mbps, plus a dedicated workspace.',
      },
      {
        icon: 'clock',
        title: 'Self check-in',
        description: 'You can check in with the building staff.',
      },
      {
        icon: 'wifi',
        title: 'Great location',
        description: '95% of recent guests gave the location a 5-star rating',
      },
      {
        icon: 'clock',
        title: 'Great check-in experience',
        description:
          '100% of recent guests gave the check-in process a 5-star rating.',
      },
      {
        icon: 'wifi',
        title: 'Free cancellation before March 24',
        description: '',
      },
    ],
  })
  console.log({ createHighlights })
}
