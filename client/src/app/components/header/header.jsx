"use client"
import Image from "next/image";
import styles from "./styles.module.css";

export const Header = () => {
    return (
      <div className="flex flex-col">
        <div className="relative flex bg-red-300 px-40 shadow-inner md:block flex-grow pb-5">
          <dir className="flex justify-center absolute ml-2 py-2" >
        <Image
                src={"/assets/image/logo-encabezado-fqa.svg"}
                width={200}
                height={100}
                alt="icono FAQ"
                
              />
         </dir>
              <div className="ml-80  pt-10 pb-5 text-white">
                <h1 className={styles.h1} >No dudes en ponerte en contacto con nosotros</h1>
                <br />
                <br />
                <p className={styles.p}>Estaremos encantados de ayudarte con cualquier duda que tengas <br /> Envianos un mensaje y nos pondremos en conctacto contigo</p>
                </div>
              </div>
              <div className="bg-red-200 py-4 text-red-200 flex-shrink-0 md:block">
              <h1>.</h1> 
              </div>
      </div>
    );
  };




  

  