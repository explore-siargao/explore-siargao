import { dateToMonth } from "@/common/helpers/dateToMonth";
import { ResponseService } from "@/common/service/response";
import { Request, Response } from "express";

const earnings =[
    {
        id:1,
        earning:22000.25,
        date:'2024-02-01 00:09:08.728'
    },
    {
        id:2,
        earning:11000.00,
        date:'2024-03-22 00:09:08.728'
    },
    {
        id:3,
        earning:6700.00,
        date:'2024-02-25 00:09:08.728'
    },
    {
        id:4,
        earning:12500.00,
        date:'2024-01-22 00:09:08.728'
    },
    {
        id:5,
        earning:22000.00,
        date:'2024-01-11 00:09:08.728'
    },
    {
        id:6,
        earning:16000.00,
        date:'2024-03-16 00:09:08.728'
    },
    {
        id:7,
        earning:2200.00,
        date:'2024-02-29 00:09:08.728'
    },
    
]

const response = new ResponseService()
export const getThisMonthEarnings = async(req:Request, res:Response)=>{
const dateNow = new Date()
const filterThisMonthEarnings = earnings.filter((earning)=>{
    const earningDate = new Date(earning.date)
    return earningDate.getMonth()===dateNow.getMonth() && earningDate.getFullYear()===dateNow.getFullYear()
})
const totalEarnings = filterThisMonthEarnings.reduce((sum, item) => sum + item.earning, 0);
res.json(response.success({
    item:{
        amount:filterThisMonthEarnings,
        earningsCount:filterThisMonthEarnings.length,
        total:parseFloat(totalEarnings.toFixed(2))
    }
}))
}

export const getUpcomingEarnings = async(req:Request, res:Response)=>{
    const dateNow = new Date()
    const filterUpcomingEarning = earnings.filter((earning)=>{
    const earningDate = new Date(earning.date)
    return earningDate.getMonth()>dateNow.getMonth() && earningDate.getFullYear()>=dateNow.getFullYear()
})
const totalEarnings = filterUpcomingEarning.reduce((sum, item) => sum + item.earning, 0);

res.json(response.success({
    item:{
        amount:filterUpcomingEarning,
        earningsCount:filterUpcomingEarning.length,
        total:parseFloat(totalEarnings.toFixed(2))
    }
}))
}

export const getPaidEarnings = async(req:Request, res:Response)=>{
    const dateNow = new Date()
    const filterPaidEarnings = earnings.filter((earning)=>{
    const earningDate = new Date(earning.date)
    return earningDate.getMonth()<dateNow.getMonth() && earningDate.getFullYear()<=dateNow.getFullYear()
})

const totalEarnings = filterPaidEarnings.reduce((sum, item) => sum + item.earning, 0);

res.json(response.success({
    item:{
        amount:filterPaidEarnings,
        earningsCount: filterPaidEarnings.length,
        total:parseFloat(totalEarnings.toFixed(2))
    }
}))
}