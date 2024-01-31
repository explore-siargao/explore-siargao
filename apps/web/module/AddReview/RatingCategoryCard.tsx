import React from 'react'

interface RatingCategoryCardProps {
  description: string
}

const RatingCategoryCard = ({ description }: RatingCategoryCardProps) => {
  return (
    <div className='flex w-full h-24 justify-center text-left items-center p-4 border rounded-lg bg-transparent'>
      <div className=''>
        {description}
      </div>
    </div>
  )
}

export default RatingCategoryCard