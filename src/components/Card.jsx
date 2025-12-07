import React from 'react'

const Card = ({ text, className = '', style = {}, image }) => {
  if (image && !text) {
    return (
      <img 
        src={image}
        alt={image.split('/').pop().replace(/-/g, ' ').replace('.png', '').replace('.jpg', '')}
        className={`absolute w-16 h-16 object-contain cursor-pointer ${className}`}
        style={style}
      />
    );
  }
  
  return (
    <div 
      className={`absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-48 cursor-pointer ${className}`}
      style={style}
    >
      {text}
    </div>
  );
};

export default Card;