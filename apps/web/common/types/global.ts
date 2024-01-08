export interface IUser {
  id?: number
  role?: UserRole
  registrationType?: RegistrationType
  email: string
  address?: string
  password?: string
  contactNumber?: number
  birthDate?: string
  createdAt?: string
  deletedAt?: string
  updatedAt?: string
}

export interface IPersonalInfo {
  id?: number
  userId?: number
  firstName?: string
  lastName?: string
  middleName?: string
  birthDate?: string
  governmentId?: string
  phoneNumber?: string
  address?: IAddress
  emergencyContact?: IEmergencyContact[]
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
}

export interface IAddress {
  id?: number
  peronalInfoId?: number
  streetAddress: string
  city: string
  province: string
  zipCode: number
  country: string
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
}

export interface IEmergencyContact {
  id?: number
  peronalInfoId?: number
  name?: string
  relationship?: string
  email?: string
  phoneNumber?: string
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
}

export interface IPaymentMethod {
  id?: number
  userId?: number
  cardNumber?: string
  countryRegion?: string
  cvv?: number
  expirationDate?: string
  zipCode?: number
  isDefault?: boolean
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
}

export interface ICoupon {
  id?: number
  createdBy?: number
  usedBy?: number | null
  code?: string
  expirationDate?: string
  reward?: string
  isUsed: boolean
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
}

export interface IWishGroup {
  id?: number
  title?: string
  newTitle?: string
  oldTitle?: string
  listingId?: number
  note?: string
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
}

export interface ComponentProps {
  onClick: () => void
  icon?: React.ReactNode
  text?: string
  note?: string
  id?: string
}

//stores
type Email = {
  email: string
}
type Action = {
  updateEmail: (email: Email["email"]) => void
}

export interface DetailsType {
  id: number,
  link: string
  img: string
  title: string
  address: string
  description: string
  price: string
  note: string
  isNight: boolean
}

enum UserRole {
  Admin,
  Host,
  User,
}

export enum RegistrationType {
  "Manual",
  "Facebook",
  "Google",
}
