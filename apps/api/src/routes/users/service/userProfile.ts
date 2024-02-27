import { REQUIRED_VALUE_EMPTY, UNKNOWN_ERROR_OCCURRED, USER_NOT_AUTHORIZED, USER_NOT_EXIST } from '@/common/constants'
import { prisma } from '@/common/helpers/prismaClient'
import { ResponseService } from '@/common/service/response'
import { Request, Response } from 'express'
const profiles = [
  {
    id:1,
    school: '',
    work: '',
    live: '',
    language: '',
    born: '',
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
    id:2,
    school: 'Laguna State Polytechnic University',
    work: 'IT',
    live: '',
    language: 'English, French',
    born: '80s',
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
    id:3,
    school: 'SMNHS',
    work: 'Programmer',
    live: '',
    language: 'English',
    born: '',
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
    id:4,
    school: '',
    work: '',
    live: '',
    language: '',
    born: '',
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
    id:5,
    school: 'LSPU',
    work: 'Zkript',
    live: 'Santa Maria Laguna',
    language: 'English, Tagalog',
    born: '',
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
    const userId = Number(req.params.userId)
    const getUserProfile =  profiles.find((profile)=>profile.id===userId)
    if(getUserProfile===undefined){
        return res.json(response.error({message:"This profile not found"}))
    }
    res.json(response.success({
        item:getUserProfile,
        allItemCount:1,
        message:""
    }))
}


export const updateProfile = async(req:Request, res:Response)=>{
    const userId = Number(req.params.userId)
    const {school, work,live,language,born,favoriteSong,obsessedWith,funFact,uselessSkill,biography,spendTime,pets,aboutMe} = req.body
    try {
        const getUser = await prisma.user.findFirst({
            where:{
            personalInfo:{
                userId:userId
            }
            },
            include:{
                personalInfo:true
            }
        })
        if(!getUser){
            return res.json(response.error({message:USER_NOT_EXIST}))
        }   
        if(school || work || live ||language || born || favoriteSong || obsessedWith ||  funFact ||
            uselessSkill || biography || spendTime || pets || aboutMe){
        const patchProfile = await prisma.personalInfo.update({
            where:{
                id:getUser.personalInfo?.id,
                deletedAt:null
            },
            data:{
                profile:JSON.stringify({
                    school: 'LSPU',
                    work: 'Zkript',
                    live: 'Santa Maria Laguna',
                    language: 'English, Tagalog',
                    born: '90s',
                    favoriteSong: 'I believe',
                    obsessedWith: 'her',
                    funFact: 'Be honest',
                    uselessSkill: 'None',
                    biography: 'To see is to believed',
                    spendTime: 'Studying',
                    pets: 'Cat, Dog',
                    aboutMe: 'Im a honest person'
                })
            }
        })
        res.json(response.success({
            item:JSON.parse(patchProfile.profile as string),
            allItemCount:1,
            message:"Profile successfully updated"
        }))
    }else{
        res.json(response.error({message:REQUIRED_VALUE_EMPTY}))
    }
    } catch (err:any) {
        const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
    }
}