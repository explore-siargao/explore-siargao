"use client"
import { StarIcon } from '@heroicons/react/20/solid';
import React, { forwardRef, useState } from 'react';

export interface StarRatingProps {
  totalStars: number;
  className?: string;
  onChange?: (rating: number) => void;
  size?: 'sm' | 'md' | 'lg'
}

const StarRating = forwardRef<HTMLDivElement, StarRatingProps>(
  ({ totalStars, className, onChange, size = 'md' }, ref) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const handleStarClick = (index: number) => {
      const newRating = index + 1;
      setRating(newRating);
      if (onChange) onChange(newRating);
    };

    const handleStarHover = (index: number) => {
      setHoverRating(index + 1);
    };
  
    const handleMouseLeave = () => {
      setHoverRating(0);
    };

    const getStarWidth = () => {
      switch (size) {
        case 'sm':
          return 24;
        case 'md':
          return 34;
        case 'lg':
          return 44;
        default:
          return 34; // Medium as default
      }
    };

    return (
      <div className='flex'>
        {[...Array(totalStars)].map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer ${
              (index < hoverRating || index < rating) ? 'text-secondary-500' : 'text-gray-400'
            }`}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
            onMouseLeave={handleMouseLeave}
          >
            <StarIcon width={getStarWidth()} />
          </span>
        ))}
      </div>
    );
  }
);

StarRating.displayName = "StarRating";

export default StarRating;