import { ResponseService } from "@/common/service/response";
import { Request, Response } from "express";
import { earnings } from "./jsons/earnings";

const response = new ResponseService();

export const getUpcomingBookings = async(req: Request, res: Response) => {
    // Get the current date
    const currentDate = new Date();
    
    // Filter bookings for months after the current month
    const filteredBookings = earnings.filter(earning => {
        const earningDate = new Date(earning.date);
        return (
            earningDate.getFullYear() > currentDate.getFullYear() ||
            (earningDate.getFullYear() === currentDate.getFullYear() &&
                earningDate.getMonth() > currentDate.getMonth())
        );
    });

    // Sort filtered bookings by date in ascending order
    filteredBookings.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const totalEarnings = filteredBookings.reduce((sum, item) => sum + (item?.earning as number), 0);
    const adjustment = 1000;
    const tax = 1000;
    const service = 10000;

    res.json(response.success({
        item:{
            bookings: filteredBookings,
            pageItemCount: 1,
            allItemCount: filteredBookings.length,
            summary:{
                gross: parseFloat(totalEarnings.toFixed(2)),
                adjustments: adjustment,
                service: service,
                taxes: tax,
                totalEarnings: parseFloat(totalEarnings.toFixed(2)) + tax + adjustment + service,
            }
        }
    }));
};
