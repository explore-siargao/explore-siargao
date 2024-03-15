// This is the shape and type of bookings data
export interface IBookingsData {
  id: number
  listingId: number
  Listing: {
    title: string
    imageKey: string
    address: string
  }
  fromDate: string
  toDate: string
  guestCount: number
  totalFee: number
  transactionId: number
  Transaction: {
    status: string
  }
  createdAt: string
}

// This is the shape and type of listings data
export interface IListingsData {
  id: number
  hostId: number
  title: string
  address: string
  imageKey: string
  status: string
}

// This is the shape and type of paymentHistoryBookingsData
export interface PaymentHistoryBookingsData {
  bookings: {
    listing: string
    user: {
      id: number
      firstName: string
      lastName: string
    }
    dateFrom: string
    dateTo: string
    earnings: number
    status: string
  }
}