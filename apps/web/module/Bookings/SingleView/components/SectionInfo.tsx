"use client"
import React, { useState } from "react"
import { Typography } from "@/common/components/ui/Typography"
import { Heart, Share, Star } from "lucide-react"
import ImageGallery from "./ImageGallery"
import ImageGalleryModal from "./modals/ImageGalleryModal"
import ShareSave from "./ShareSave"

interface SectionInfoProps {
  title: string
}

const SectionInfo = ({ title }: SectionInfoProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const [galleryModalOpen, setGalleryModalOpen] = useState(false)
  const openModal = () => {
    setGalleryModalOpen(true)
  }
  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  const ImagesDummy = [
    {
      fileKey: "1.jpg",
      alt: "Image 1",
    },
    {
      fileKey: "2.jpg",
      alt: "Image 2",
    },
    {
      fileKey: "3.jpg",
      alt: "Image 3",
    },
    {
      fileKey: "4.jpg",
      alt: "Image 4",
    },
    {
      fileKey: "5.jpg",
      alt: "Image 5",
    },
  ]

  return (
    <>
      <div className="justify-between md:flex text-start items-center">
        <div>
          <Typography variant="h1" fontWeight="semibold">
            {title}
          </Typography>
        </div>
        <ShareSave />
      </div>
      <div className="my-6">
        <ImageGallery imageKeys={ImagesDummy} openModal={openModal} />
      </div>
      <ImageGalleryModal
        isOpen={galleryModalOpen}
        onClose={() => setGalleryModalOpen(false)}
      />
    </>
  )
}

export default SectionInfo
