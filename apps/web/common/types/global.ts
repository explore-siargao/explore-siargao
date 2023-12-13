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
  userId: number
  cardNumber: string
  countryRegion: string
  cvv: number
  expirationDate: string
  zipCode: number
  isDefault?: boolean
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
}

//stores
type Email = {
  email: string
}
type Action = {
  updateEmail: (email: Email["email"]) => void
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
