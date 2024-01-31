"use client"
import StarRating from '@/common/components/ui/StarRating'
import React, { useState } from 'react'
import RatingCategoryCard from './RatingCategoryCard'
import { Separator } from '@/common/components/ui/Separator'
import { useForm } from 'react-hook-form'
import { Textarea } from '@/common/components/ui/Textarea'
import { Button } from '@/common/components/ui/Button'
import { useParams } from 'next/navigation'
import useSessionStore from '@/common/store/useSessionStore'
import { WidthWrapper } from '@/common/components/WidthWrapper'
import toast from 'react-hot-toast'
import useAddReview from './hooks/useAddReview'

const AddReview = () => {
  const params = useParams()
  const [cleanLinessRates, setCleanlinessRates] = useState<number>(0)
  const [accuracyRates, setAccuracyRates] = useState<number>(0)
  const [checkInRates, setCheckInRates] = useState<number>(0)
  const [communicationRates, setCommunicationRates] = useState<number>(0)
  const [locationRates, setLocationRates] = useState<number>(0)
  const [valueRates, setValueRates] = useState<number>(0)
  const listingId = Number(params.listingId)

  const userId = useSessionStore((state) => state).id
  const { mutate } = useAddReview(userId as number)
  
  const { register, handleSubmit } = useForm()
  const onSubmit = (values: any) => {
    const formattedValues = {
      listingId,
      cleanLinessRates,
      accuracyRates,
      checkInRates,
      communicationRates,
      locationRates,
      valueRates,
      comment: values.comment
    }

    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          toast.success(data.message)
        } else {
          toast.error(String(data.message))
        }
      },
      onError: (err: any) => {
        toast.error(String(err))
      },
    }
    mutate(formattedValues, callBackReq)
  }

  return (
    <WidthWrapper className="my-24 lg:my-32">
      <div className='flex justify-center'>
        <form className='max-w-3xl flex flex-col gap-y-4' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col items-center justify-center'>
            <RatingCategoryCard description='How would you rate the cleanliness of the accommodation?' />
            <StarRating totalStars={5} size='md' onChange={setCleanlinessRates} />
            <Separator className='bg-gray-200 my-6'/>
          </div>
          <div className='flex flex-col items-center justify-center gap-y-2'>
            <RatingCategoryCard description='How would you rate the accuracy of the information about the accommodation?' />
            <StarRating totalStars={5} size='md' onChange={setAccuracyRates} />
            <Separator className='bg-gray-200 my-6'/>
          </div>
          <div className='flex flex-col items-center justify-center gap-y-2'>
            <RatingCategoryCard description='How would you rate the efficiency of the check-in process at the accommodation?' />
            <StarRating totalStars={5} size='md' onChange={setCheckInRates} />
            <Separator className='bg-gray-200 my-6'/>
          </div>
          <div className='flex flex-col items-center justify-center gap-y-2'>
            <RatingCategoryCard description='How would you rate the responsiveness of communication from the accommodation staff?' />
            <StarRating totalStars={5} size='md' onChange={setCommunicationRates} />
            <Separator className='bg-gray-200 my-6'/>
          </div>
          <div className='flex flex-col items-center justify-center gap-y-2'>
            <RatingCategoryCard description='How would you rate the convenience and accessibility of the location?' />
            <StarRating totalStars={5} size='md' onChange={setLocationRates} />
            <Separator className='bg-gray-200 my-6'/>
          </div>
          <div className='flex flex-col items-center justify-center gap-y-2'>
            <RatingCategoryCard description='How would you rate the overall value for money of your accommodation?' />
            <StarRating totalStars={5} size='md' onChange={setValueRates} />
            <Separator className='bg-gray-200 my-6'/>
          </div>
          <Textarea placeholder='Comment...' {...register("comment")} required />
          <Button type="submit" variant="shaded" size="sm" className="mt-4">
            Submit review
          </Button>
        </form>
      </div>
    </WidthWrapper>
  )
}

export default AddReview