"use client"
import Image from "next/image";
export const Header = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <div>
        <Image
                src="/assets/images/logo-FAQ.png"
                width={200}
                height={100}
                alt="icono FAQ"
                className=""
              />
              <div>
                <h1 className="text-3xl font-bold  text-right mb-4 bg-red-400 px-96 py-12">No dudes en ponerte en contacto con nosotros</h1>
                <p>Estaremos en cantados de ayudarte con cualquier duda que tengas </p>
                <p>Envianos un mensaje y nos pondremos en conctacto contigo</p>
                </div>
              </div>
              <div className="text-xl  bg-red-300 px-96 border-8">
              
              </div>
      </div>
    );
  };


  

  