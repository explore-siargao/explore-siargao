import { ResponseService } from "@/common/service/response";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()
const response = new ResponseService()

export const getReviewByListing = async(req:Request, res:Response)=>{

}

export const getReviewById = async(req:Request, res:Response)=>{
    
}

export const addReview = async(req:Request, res:Response)=>{
    
}

export const updateReview = async(req:Request, res:Response)=>{
    
}

export const deleteReview = async(req:Request, res:Response)=>{
    
}