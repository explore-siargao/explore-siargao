export interface IUser {
  id?: number
  firstName: string
  middleName?: string
  lastName: string
  role?: UserRole
  registrationType?: RegistrationType
  email: string
  address?: string
  password: string
  contactNumber?: number
  birthDate: string
  createdAt?: string
  deletedAt?: string
  updatedAt?: string
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
