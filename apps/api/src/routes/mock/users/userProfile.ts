import { ResponseService } from '@/common/service/response'
import { Request, Response } from 'express'
let profiles = [
  {
    id: 1,
    imageKey: '1.jpg',
    imageFile: null,
    school: '',
    work: '',
    live: '',
    language: '',
    decadeWereBorn: '',
    favoriteSong: '',
    obsessedWith: '',
    funFact: '',
    uselessSkill: '',
    biography: '',
    spendTime: '',
    pets: '',
    aboutMe: '',
  },
  {
    id: 2,
    imageKey: '1.jpg',
    imageFile: null,
    school: 'Laguna State Polytechnic University',
    work: 'IT',
    live: '',
    language: 'English, French',
    decadeWereBorn: '80s',
    favoriteSong: 'I believe',
    obsessedWith: 'Her',
    funFact: '',
    uselessSkill: '',
    biography: '',
    spendTime: '',
    pets: 'Cat',
    aboutMe: 'I am nice person',
  },
  {
    id: 3,
    imageKey: '1.jpg',
    imageFile: null,
    school: 'SMNHS',
    work: 'Programmer',
    live: '',
    language: 'English',
    decadeWereBorn: '',
    favoriteSong: '',
    obsessedWith: '',
    funFact: '',
    uselessSkill: '',
    biography: 'To see is to believe',
    spendTime: '',
    pets: '',
    aboutMe: '',
  },
  {
    id: 4,
    imageKey: '1.jpg',
    imageFile: null,
    school: '',
    work: '',
    live: '',
    language: '',
    decadeWereBorn: '',
    favoriteSong: '',
    obsessedWith: '',
    funFact: '',
    uselessSkill: 'None',
    biography: 'Never give up',
    spendTime: '',
    pets: 'Dog, Cat',
    aboutMe: 'I am amazing',
  },
  {
    id: 5,
    imageKey: '1.jpg',
    imageFile: null,
    school: 'LSPU',
    work: 'Zkript',
    live: 'Santa Maria Laguna',
    language: 'English, Tagalog',
    decadeWereBorn: '',
    favoriteSong: '',
    obsessedWith: '',
    funFact: '',
    uselessSkill: '',
    biography: '',
    spendTime: '',
    pets: '',
    aboutMe: '',
  },
]

const response = new ResponseService()

export const getProfile = async (req: Request, res: Response) => {
  const userId = Number(req.params.id)
  const getUserProfile = profiles.find((profile) => profile.id === userId)
  if (getUserProfile === undefined) {
    return res.json(response.error({ message: 'This profile not found' }))
  }
  res.json(
    response.success({
      item: getUserProfile,
      allItemCount: 1,
      message: '',
    })
  )
}
