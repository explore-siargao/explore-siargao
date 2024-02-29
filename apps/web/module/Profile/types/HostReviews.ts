export type Review = {
  id: number
  userId: number
  cleanLinessRates: number
  accuracyRates: number
  checkInRates: number
  communicationRates: number
  locationRates: number
  valueRates: number
  comment: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
  listingId: number
  user: {
    profilePicture: string
    personalInfo: {
      firstName: string
      lastName: string
    }
  }
}

export type HostReviewsProps = {
  name: string
  reviews: Review[]
  reviewsCount: number
}
