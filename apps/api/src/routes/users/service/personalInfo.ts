import { Response, Request } from 'express'
import { PrismaClient } from '@prisma/client'
import { REQUIRED_VALUE_EMPTY } from '@repo/constants'
import { Z_GovernmentId } from '@repo/contract'

export const getPersonalInfo = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient()
    const getPersonalInfo = await prisma.personalInfo.findFirst({
      where: { userId: Number(req?.params?.userId) },
      include: {
        user: true,
        emergrncyContacts: true,
        address: true,
      },
    })
    if (getPersonalInfo !== null) {
      res.json({
        error: false,
        items: getPersonalInfo,
        itemCount: 1,
        message: '',
      })
    } else {
      res.json({
        error: false,
        items: null,
        itemCount: 0,
        message: 'No data found',
      })
    }
  } catch (err: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: err.message,
    })
  }
}

export const updatePersonalInfo = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient()
    const {
      firstName,
      lastName,
      middleName,
      birthDate,
      governmentId,
      phoneNumber,
    } = req.body
    const userId = Number(req.params.userId)
    const editPersonalInfo = await prisma.personalInfo.update({
      where: {
        userId: userId,
      },
      data: {
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
        birthDate: birthDate,
        governMentId: governmentId,
        phoneNumber: phoneNumber,
      },
    })
    res.json({
      error: false,
      items: editPersonalInfo,
      itemCount: 1,
      message: 'Sucessfully updated',
    })
  } catch (err: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: err.message,
    })
  }
}

export const addEmergencyContact = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient()
    const { email, phoneNumber, name, relationship } = req.body
    const personalInfoId = Number(req.params.personalInfoId)
    if (name && relationship && (email || phoneNumber)) {
      const getPersonalInfo = await prisma.personalInfo.findFirst({
        where: {
          id: personalInfoId,
          deletedAt: null,
        },
      })

      if (getPersonalInfo) {
        const newEmergencyContact = await prisma.emergencyContacts.create({
          data: {
            peronalInfoId: personalInfoId,
            email: email,
            phoneNumber: phoneNumber,
            name: name,
            relationship: relationship,
          },
        })

        res.json({
          error: false,
          items: newEmergencyContact,
          itemCount: 1,
          message: 'Emergency Contact Successfully Added',
        })
      } else {
        res.json({
          error: true,
          items: getPersonalInfo,
          itemCount: 0,
          message: 'No personal information data found',
        })
      }
    } else {
      res.json({
        error: true,
        items: null,
        itemCount: 0,
        message: REQUIRED_VALUE_EMPTY,
      })
    }
  } catch (err: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: err.message,
    })
  }
}

export const removeEmergencyContact = async (req: Request, res: Response) => {
  const prisma = new PrismaClient()
  const personId = Number(req.params.peronalInfoId)
  const emergencyContactId = Number(req.params.emergencyContactId)
  try {
    const personalInfo = await prisma.personalInfo.findFirst({
      where: {
        id: personId,
      },
    })
    if (personalInfo !== null) {
      const personInfoId = personalInfo.id
      const emergencyContactExist =
        (await prisma.emergencyContacts.findFirst({
          where: {
            id: emergencyContactId,
            peronalInfoId: personInfoId,
          },
        })) !== null
      if (emergencyContactExist) {
        const deleteEmergencyContact = await prisma.emergencyContacts.delete({
          where: {
            id: emergencyContactId,
            peronalInfoId: personInfoId,
          },
        })
        res.json({
          error: false,
          items: deleteEmergencyContact,
          itemCount: 1,
          message: 'Sucessfully deleted emergency contact',
        })
      } else {
        res.json({
          error: true,
          items: null,
          itemCount: 0,
          message: 'Emergency contact already deleted',
        })
      }
    } else {
      res.json({
        error: true,
        items: null,
        itemCount: 0,
        message: 'User does not exist to our system',
      })
    }
  } catch (err: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: err.message,
    })
  }
}

export const addAddress = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient()
    const { country, streetAddress, city, province, zipCode } = req.body
    const personalInfoId = Number(req.params.personalInfoId)
    if (streetAddress && city && province && zipCode) {
      const getPersonalInfo = await prisma.personalInfo.findFirst({
        where: {
          id: personalInfoId,
          deletedAt: null,
        },
        include: {
          address: true,
        },
      })

      if (getPersonalInfo) {
        let returnAddress = null
        if (getPersonalInfo.address === null) {
          const newAddress = await prisma.addresses.create({
            data: {
              peronalInfoId: personalInfoId,
              country: country,
              streetAddress: streetAddress,
              city: city,
              province: province,
              zipCode: zipCode,
            },
          })
          returnAddress = newAddress
        } else {
          const updateAddress = await prisma.addresses.update({
            where: {
              peronalInfoId: getPersonalInfo.id,
              id: getPersonalInfo.address?.id,
            },
            data: {
              streetAddress: streetAddress,
              city: city,
              province: province,
              country: country,
              zipCode: zipCode,
            },
          })
          returnAddress = updateAddress
        }
        res.json({
          error: false,
          items: returnAddress,
          itemCount: 1,
          message: 'Address successfully updated',
        })
      } else {
        res.json({
          error: true,
          items: getPersonalInfo,
          itemCount: 0,
          message: 'No personal information data found',
        })
      }
    } else {
      res.json({
        error: true,
        items: null,
        itemCount: 0,
        message: REQUIRED_VALUE_EMPTY,
      })
    }
  } catch (err: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: err.message,
    })
  }
}

export const editAddress = async (req: Request, res: Response) => {
  const prisma = new PrismaClient()
  const { streetAddress, city, province, zipCode, country } = req.body
  const userId = Number(req.params.userId)
  try {
    if (streetAddress && city && province && zipCode && country) {
      const personalInfo = await prisma.personalInfo.findUnique({
        where: {
          userId: userId,
        },
        include: {
          address: true,
        },
      })
      if (personalInfo) {
        const updateAddress = await prisma.addresses.update({
          where: {
            peronalInfoId: personalInfo.id,
            id: personalInfo.address?.id,
          },
          data: {
            streetAddress: streetAddress,
            city: city,
            province: province,
            country: country,
            zipCode: zipCode,
          },
        })
        res.json({
          error: false,
          items: updateAddress,
          itemCount: 1,
          message: 'Address successfully updated',
        })
      } else {
        res.json({
          error: true,
          items: null,
          itemCount: 0,
          message: 'User does not exist to our system',
        })
      }
    } else {
      res.json({
        error: true,
        items: null,
        itemCount: 0,
        message: REQUIRED_VALUE_EMPTY,
      })
    }
  } catch (err: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: err.message,
    })
  }
}

export const getAllGovernmentIdByPersonInfoId = async (
  req: Request,
  res: Response
) => {
  const prisma = new PrismaClient()
  const personId = Number(req.params.personId)
  try {
    const getPersonInfoId = await prisma.personalInfo.findUnique({
      where: {
        id: personId,
      },
    })
    if (getPersonInfoId) {
      res.json({
        error: false,
        items: JSON.parse(getPersonInfoId?.governMentId as string),
        itemCount:
          getPersonInfoId?.governMentId === null
            ? 0
            : JSON.parse(getPersonInfoId?.governMentId as string).length,
        message: '',
      })
    } else {
      res.json({
        error: true,
        items: null,
        itemCount: 0,
        message: 'This person not found in our system',
      })
    }
  } catch (err: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: err.message,
    })
  }
}

export const addGovernmentId = async (req: Request, res: Response) => {
  const personId = Number(req.params.personId)
  const { imagePath, type } = req.body
  const prisma = new PrismaClient()
  const isValidInput = Z_GovernmentId.safeParse(req.body)
  try {
    const getPersonIfo = await prisma.personalInfo.findUnique({
      where: {
        id: personId,
      },
    })
    if (getPersonIfo) {
      if (isValidInput.success) {
        if (getPersonIfo.governMentId === null) {
          const addNewGovernmentId = await prisma.personalInfo.update({
            where: {
              id: personId,
            },
            data: {
              governMentId: JSON.stringify([
                { imagePath: imagePath, type: type, createdAt: new Date() },
              ]),
            },
          })
          res.json({
            error: false,
            items: JSON.parse(addNewGovernmentId.governMentId as string),
            itemCount: 1,
            message: 'Government Id successfully added',
          })
        } else {
          const updatedGovernmentId = JSON.parse(getPersonIfo.governMentId)
          const typeAlreadyExists = updatedGovernmentId.some(
            (govId: any) => govId.type === type
          )
          if (!typeAlreadyExists) {
            updatedGovernmentId.push({
              imageUrl: imagePath,
              type: type,
              createdAt: new Date(),
            })
            const updateGovId = await prisma.personalInfo.update({
              where: {
                id: personId,
              },
              data: {
                governMentId: null, //JSON.stringify(updatedGovernmentId)
              },
            })
            res.json({
              error: false,
              items: JSON.parse(updateGovId.governMentId as string),
              itemCount: 1,
              message: 'Government Id successfully added',
            })
          } else {
            res.json({
              error: true,
              items: null,
              itemCount: 0,
              message: 'This type of id already exists',
            })
          }
        }
      } else {
        res.json({
          error: true,
          items: null,
          itemCount: 0,
          message: JSON.parse(isValidInput.error.message),
        })
      }
    } else {
      res.json({
        error: true,
        items: null,
        itemCount: 0,
        message: 'This person not found in our system',
      })
    }
  } catch (err: any) {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: err.message,
    })
  }
}
