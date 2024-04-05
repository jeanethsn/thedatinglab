"use client"
const Header = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <Image
                src={"/assets/images/logo-FAQ.png"}
                width={20}
                height={20}
                alt="icono FAQ"
              />
        <h1 className="text-3xl font-bold text-center">No dudes en ponerte en contacto con nosotros</h1>
          <div>
            <p>Estaremos en cantados de ayudarte con cualquier duda que tengas </p>
            <p>Envianos un mensaje y nos pondremos en conctacto contigo</p>
          </div>
      </div>
    );
  };
  
  export default Header;
  