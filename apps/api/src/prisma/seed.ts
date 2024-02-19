import {prisma} from "@/common/helpers/prismaClient"
import { encryptKey } from '@/common/config'
import CryptoJS from 'crypto-js'

const main = async()=>{
    const createUsers = await prisma.user.createMany({
        data:[
            {
                email:"test@test.com",
                password:String(CryptoJS.AES.encrypt("test",encryptKey)),
                registrationType:"Manual",
                role:"Host",
            },
            {
                email:"ramilkaharian25@gmail.com",
                registrationType:"Google",
                role:"Host"
            },
            {
                email:"jp.madrigal07@gmail.com",
                registrationType:"Google",
                role:"Host"
            },
            {
                email:"richard.delapena19@gmail.com",
                registrationType:"Google",
                role:"User"
            },
            {
                email:"arjayandal93@gmail.com",
                registrationType:"Google",
                role:"User"
            },
        ]
    })
    const getUsers = await prisma.user.findMany({
        where:{
            deletedAt:null
        }
    })

    const createPersonalInfos = await prisma.personalInfo.createMany({
        data:[
            {
                firstName:"test",
                lastName:"account",
                birthDate:"2014-02-19T12:34:56.789Z",
                userId:getUsers[0]?.id ? getUsers[0].id : 0,
                phoneNumber:"09092558726",
                country:"PH",
                currency:"PHP",
                language:"English"
            },
            {
                firstName:"Ramil",
                lastName:"Kaharian",
                birthDate:"2014-02-19T12:34:56.789Z",
                userId:getUsers[1]?.id ? getUsers[1].id : 0,
                phoneNumber:"09092558726",
                country:"PH",
                currency:"PHP",
                language:"English"
            },
            {
                firstName:"John",
                lastName:"Madrigal",
                birthDate:"2014-02-19T12:34:56.789Z",
                userId:getUsers[2]?.id ? getUsers[2].id : 0,
                phoneNumber:"09092558726",
                country:"PH",
                currency:"PHP",
                language:"English"
            },
            {
                firstName:"Richard",
                lastName:"Dela pena",
                birthDate:"2014-02-19T12:34:56.789Z",
                userId:getUsers[3]?.id ? getUsers[3].id : 0,
                phoneNumber:"09092558726",
                country:"PH",
                currency:"PHP",
                language:"English"
            },
            {
                firstName:"Arjhay",
                lastName:"Andal",
                birthDate:"2014-02-19T12:34:56.789Z",
                userId:getUsers[4]?.id ? getUsers[4].id : 0,
                phoneNumber:"09092558726",
                country:"PH",
                currency:"PHP",
                language:"English"
            }
        ]
    })

    const getPersonalInfos = await prisma.personalInfo.findMany({
        where:{
            deletedAt:null
        }
    })

    const createAddresses = await prisma.addresses.createMany({
        data:[
            {
                peronalInfoId:getPersonalInfos[0]?.id || 0,
                aptSuite:null,
                streetAddress:"anywhere street",
                city:"Kahit saan",
                stateProvince:"Mindoro",
                country:"PH",
                zipCode:1000
            },
            {
                peronalInfoId:getPersonalInfos[1]?.id || 0,
                aptSuite:null,
                streetAddress:"Looban street",
                city:"Santa Maria",
                stateProvince:"Laguna",
                country:"PH",
                zipCode:4026
            },
            {
                peronalInfoId:getPersonalInfos[2]?.id || 0,
                aptSuite:null,
                streetAddress:"Gitna street",
                city:"Paete",
                stateProvince:"Laguna",
                country:"PH",
                zipCode:4016
            },
            {
                peronalInfoId:getPersonalInfos[3]?.id || 0,
                aptSuite:null,
                streetAddress:"San jose street",
                city:"Kalayaan",
                stateProvince:"laguna",
                country:"PH",
                zipCode:4015
            },
            {
                peronalInfoId:getPersonalInfos[4]?.id || 0,
                aptSuite:null,
                streetAddress:"JP rizal street",
                city:"Sta. Cruz",
                stateProvince:"Laguna",
                country:"PH",
                zipCode:4009
            }
        ]
    })

    const createTaxes = await prisma.tax.createMany({
        data:[
            {
                vatId:"1111",
                userId:getUsers[0]?.id ? getUsers[0].id : 0,
                nameOnRegistration:"test Account",
                addressLine1:"Brgy JP Rizal",
                addressLine2:"Brgy Tres",
                city:"Paete",
                provinceRegion:"Laguna",
                zipPostalCode:"4016",
                countryRegion:"PH"
            },
            {
                vatId:"1112",
                userId:getUsers[1]?.id ? getUsers[1].id : 0,
                nameOnRegistration:"Ramil Kaharian",
                addressLine1:"Brgy JP Rizal",
                addressLine2:"Brgy Tres",
                city:"Paete",
                provinceRegion:"Laguna",
                zipPostalCode:"4016",
                countryRegion:"PH"
            },
            {
                vatId:"1113",
                userId:getUsers[2]?.id ? getUsers[2].id : 0,
                nameOnRegistration:"John Madrigal",
                addressLine1:"Brgy JP Rizal",
                addressLine2:"Brgy Tres",
                city:"Paete",
                provinceRegion:"Laguna",
                zipPostalCode:"4016",
                countryRegion:"PH"
            },
            {
                vatId:"1114",
                userId:getUsers[3]?.id ? getUsers[3].id : 0,
                nameOnRegistration:"Richard",
                addressLine1:"Brgy JP Rizal",
                addressLine2:"Brgy Tres",
                city:"Paete",
                provinceRegion:"Laguna",
                zipPostalCode:"4016",
                countryRegion:"PH"
            },
            {
                vatId:"1115",
                userId:getUsers[4]?.id ? getUsers[4].id : 0,
                nameOnRegistration:"Arjhay",
                addressLine1:"Brgy JP Rizal",
                addressLine2:"Brgy Tres",
                city:"Paete",
                provinceRegion:"Laguna",
                zipPostalCode:"4016",
                countryRegion:"PH"
            }
        ]
    })

    const createEmergencyContact = await prisma.emergencyContacts.createMany({
        data:[
            {
                name:"Who ever",
                peronalInfoId:getPersonalInfos[0]?.id || 0,
                relationship:"Father",
                email:"whoiam@gmail.com",
                phoneNumber:"09090909099"
            },
            {
                name:"Julita Kaharian",
                peronalInfoId:getPersonalInfos[1]?.id || 0,
                relationship:"Mother",
                email:"julita@gmail.com",
                phoneNumber:"09090909097"
            },
            {
                name:"Patrick",
                peronalInfoId:getPersonalInfos[2]?.id || 0,
                relationship:"Father",
                email:"patrick@gmail.com",
                phoneNumber:"09090909090"
            },
            {
                name:"Chad",
                peronalInfoId:getPersonalInfos[3]?.id || 0,
                relationship:"Brother",
                email:"chad@gmail.com",
                phoneNumber:"09090909094"
            },
            {
                name:"Jenny",
                peronalInfoId:getPersonalInfos[4]?.id || 0,
                relationship:"Sister",
                email:"jenn@gmail.com",
                phoneNumber:"09090909095"
            }
        ]
    })

     const createPaymentmethod = await prisma.paymentMethod.createMany({
        data:[
            {
                userId:getUsers[0]?.id || 0,
                cardNumber:"5000000000",
                countryRegion:"PH",
                cvv:100,
                expirationDate:"02/27",
                zipCode:4000,
                isDefault:true
            },
            {
                userId:getUsers[1]?.id || 0,
                cardNumber:"5000000010",
                countryRegion:"PH",
                cvv:101,
                expirationDate:"07/29",
                zipCode:4022,
                isDefault:false
            },
            {
                userId:getUsers[2]?.id || 0,
                cardNumber:"5000000050",
                countryRegion:"PH",
                cvv:106,
                expirationDate:"04/30",
                zipCode:4016,
                isDefault:false
            },
            {
                userId:getUsers[3]?.id || 0,
                cardNumber:"5000000009",
                countryRegion:"PH",
                cvv:226,
                expirationDate:"12/25",
                zipCode:4015,
                isDefault:true
            },
            {
                userId:getUsers[4]?.id || 0,
                cardNumber:"5000000440",
                countryRegion:"PH",
                cvv:305,
                expirationDate:"04/29",
                zipCode:4009,
                isDefault:true
            }
        ]
     })

    const createAboutPlaces = await prisma.basicAboutPlace.createMany({
        data:[
            {
                guests:10,
                beds:10,
                bathRooms:2,
                bedRooms:3,
            },
            {
                guests:20,
                beds:10,
                bathRooms:4,
                bedRooms:10,
            },
            {
                guests:4,
                beds:2,
                bathRooms:2,
                bedRooms:1,
            },
            {
                guests:15,
                beds:6,
                bathRooms:3,
                bedRooms:2,
            },
            {
                guests:5,
                beds:2,
                bathRooms:1,
                bedRooms:1,
            },
        ]
    })

    const createHighlights = await prisma.highLights.createMany({
        data:[
            {
                icon:"Wifi",
                title:"Great for remote work",
                details:"Fast wifi at 165 Mbps, plus a dedicated workspace."
            },
            {
                icon:"Clock",
                title:"Self check-in",
                details:"You can check in with the building staff."
            },
            {
                icon:"MapPin",
                title:"Great location",
                details:"95% of recent guests gave the location a 5-star rating"
            },
            {
                icon:"Clock",
                title:"Great check-in experience",
                details:"100% of recent guests gave the check-in process a 5-star rating.",
            },
            {
                icon:"calendar",
                title:"Free cancellation before March 24",
                details:"",
            }
        ]
    })

    console.log({
        createUsers,
        createPersonalInfos,
        createTaxes,
        createAboutPlaces,
        createHighlights,
        createAddresses,
        createEmergencyContact,
        createPaymentmethod
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })