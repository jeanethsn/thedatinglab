import React from 'react';

export default function TabButton({ img, label, onClick, isActive }) {
  return (
    <button className={`flex items-center gap-2 h-10 lg:w-[18rem] justify-center font-nunito text-xl rounded-lg ${isActive ? 'bg-pink-grey text-red-orange border-none' : 'bg-white text-grey-dark  border-red-orange border-[0.05rem]'}`} onClick={onClick}>
      {img && <span>{img}</span>} 
      {label}
    </button>
  );
}