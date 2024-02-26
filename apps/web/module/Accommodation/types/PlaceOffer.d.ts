import { T_PlaceOffers } from "@repo/contract"

export type T_Offer = {
  id?:number
  placeOffer:T_PlaceOffers
}

export type T_OfferModal = {
  title: string
  offers: T_Offer[]
}

export type T_PlaceOfferProps = {
  offers: T_Offer[]
  group: T_OfferModal[]
}
