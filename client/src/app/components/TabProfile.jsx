import Image from "next/image";
import TabButton from "./TabButton";
import { useState } from "react";

export default function TabProfile({ handleButtonClick }) {
  const [activeButton, setActiveButton] = useState('A'); // Perfil está activo por defecto

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-1 lg:border-b-red-orange  lg:pb-8 lg:border-2 ">
      <TabButton 
        label="Perfil" 
        onClick={() => {
          handleButtonClick('A');
          setActiveButton('A');
        }} 
        isActive={activeButton === 'A'} 
      />
      <TabButton 
        label="Tus Matches" 
        img={
          <Image 
            src="/assets/image/icon-small-heart.svg" 
            width={24}
            height={24}
            alt="ícono corazón" 
          />
        } 
        onClick={() => {
          handleButtonClick('B');
          setActiveButton('B');
        }} 
        isActive={activeButton === 'B'} 
      />
      <TabButton 
        label="Tus Experiencias" 
        onClick={() => {
          handleButtonClick('C');
          setActiveButton('C');
        }} 
        isActive={activeButton === 'C'} 
      />
      <TabButton 
        label="Test de Compatibilidad" 
        onClick={() => {
          handleButtonClick('D');
          setActiveButton('D');
        }} 
        isActive={activeButton === 'D'} 
      />
    </div>
  );
}