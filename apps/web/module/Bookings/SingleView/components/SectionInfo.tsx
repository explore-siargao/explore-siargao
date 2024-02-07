"use client"
import { WidthWrapper } from '@/common/components/WidthWrapper'
import React, { useState } from 'react'
import { TitleSection } from './TitleSection'
import { Typography } from '@/common/components/ui/Typography'
import Link from 'next/dist/client/link'
import { Heart, HeartCrack, Share, Star, Upload } from 'lucide-react';
import IconDescription from './IconDescription'

interface SectionInfoProps {
    title: string,
    address: string,
    guest: number,
    bedroom: number,
    beds: number,
    baths: number,
    reviews: number,
    stars: number
}

const SectionInfo = ({ title, address,guest,bedroom,beds,baths,reviews, stars }:SectionInfoProps) => {

    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
      };
    
  return (
    <>
    <div>
        <WidthWrapper className="flex flex justify-between" width={"medium"}>
            <div className="justify-between md:flex text-start">
                <div className="text-right">
                    <h1 className="text-2xl font-semibold md:flex text-start">{title}</h1>
                </div>
                    <div className="flex gap-5">
                    <Link
                    href={""}
                    className="mb-1 hover:duration-300 cursor-pointer"
                    >
                        <div className='flex gap-2 underline underline-offset-1 text-sm pt-1 md:flex'>
                            <Share size={20} ></Share>
                            <Typography className=''>Share</Typography>
                        </div>
                    </Link>{" "}

                    <Link onClick={handleClick}
                    href={""}
                    className="mb-1  hover:duration-300 cursor-pointer"
                    >
                        {isClicked ? (
                            <div className='flex gap-2 underline underline-offset-1 text-sm pt-1 md:flex'>
                            <Heart size={20} fill='red' ></Heart>
                            <Typography>Saved</Typography>
                            </div>
                        ) : (
                            <div className='flex gap-2 underline underline-offset-1 text-sm pt-1 md:flex'>
                            <Heart size={20} fill='white'></Heart>
                            <Typography>Save</Typography>
                            </div>
                        )}
                  
                    </Link>{" "}
            </div>
            </div>
           
            <div className=" grid lg:grid-cols-3 mt-4 gap-3 h-auto lg:h-96 md:h-96">
                    <div className="bg-gray-300 py-4 row-span-2 border  "></div>
                    <div className="bg-gray-300 py-2 border "></div>
                    <div className="bg-gray-300 py-2 border "></div>
                    <div className="bg-gray-300 py-2 border "></div>
                    <div className="bg-gray-300 py-2 border "></div>
            </div>
            <div>
                <TitleSection title="" className='mt-4 text-xl font-semibold'>{address}</TitleSection>
            <div className="flex gap-1 md:flex-1">
                <Link
                href={""}
                className="mb-1 hover:underline hover:duration-300 cursor-pointer"
                >
                <Typography className="text-sm md:flex">{guest} Guests</Typography>
                </Link>{" "}

                <Typography className="text-sm md:flex">&middot;</Typography>
                <Link
                href={""}
                className="mb-1 hover:underline hover:duration-300 cursor-pointer"
                >
                <Typography className="text-sm md:flex">{bedroom} Bedrooms</Typography>
                </Link>{" "}
                 <Typography className="text-sm md:flex">&middot;</Typography>
                <Link
                href={""}
                className="mb-1 hover:underline hover:duration-300 cursor-pointer"
                >
                <Typography className="text-sm md:flex">{beds} Beds</Typography>
                </Link>{" "}
                <Typography className="text-sm md:flex">&middot;</Typography>
                <Link
                href={""}
                className="mb-1 hover:underline hover:duration-300 cursor-pointer"
                >
                <Typography className="text-sm md:flex">{baths} Baths</Typography>
                </Link>{" "}
            </div>

            <div className="flex gap-2">
                <Link
                href={""}
                className="mb-1 hover:underline hover:duration-300 cursor-pointer"
                >
                      <div className='flex gap-2 md:flex'>
                            <Star size={20} fill=''></Star>
                            <Typography>{stars}</Typography>
                        </div>
                </Link>{" "}
                <Typography className="text-sm">&middot;</Typography>

                <Link
                href={""}
                className="mb-1 hover:underline hover:duration-300 cursor-pointer"
                >
                <Typography className="text-md md:flex">{reviews} Reviews</Typography>
                </Link>{" "}
               
            </div>

            </div>
        </WidthWrapper>
    </div>
    </>
  )
}

export default SectionInfo