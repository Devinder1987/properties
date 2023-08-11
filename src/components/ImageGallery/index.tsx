'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ProductDetailsProps {
  images: string[]; // Add an array of image URLs
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className='bg-white shadow-md'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='col-span-2'>
          <Image
            src={selectedImage}
            alt={selectedImage}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100vw', height: '16rem' }}
          />
        </div>
        <div className='col-span-2'>
          <div className='flex overflow-scroll w-full'>
            {images.map((imageUrl, index) => (
              <Image
                key={index}
                src={imageUrl}
                width={0}
                height={0}
                alt={`Image ${index + 1}`}
                sizes='20vw'
                style={{ width: '5rem', height: '4rem' }}
                className={`p-2 object-cover cursor-pointer ${
                  selectedImage === imageUrl ? 'border-2 border-blue-500' : ''
                }`}
                onClick={() => handleThumbnailClick(imageUrl)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
