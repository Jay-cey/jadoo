// ServiceCard.jsx
"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`hover:shadow-lg rounded-3xl items-center px-10 py-10 grid justify-items-center text-center bg-white relative cursor-pointer`} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      key={service.id}
    >
      <div className="h-32 grid items-center">
        <Image src={service.img} alt={service.title} width={service.width} height={200} className="" />
      </div>
      <h4 className="opensans lg:text-lg font-semibold">{service.title}</h4>
      <p className="font-medium text-[#5E6282] text-sm">{service.text}</p>

      {/* Conditional rendering based on hover state */}
      {isHovered && (
        <Image 
          src="/red-patch.svg" 
          alt="" 
          width={75} 
          height={75} 
          className="absolute -left-7 -bottom-7 -z-10 "
        />
      )}
    </div>
  );
};

export default ServiceCard;
