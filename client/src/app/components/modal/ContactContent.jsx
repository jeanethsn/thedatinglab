import Image from "next/image";
export default function ContactContent() {
  return (
    <div>
      <h1>¡Contáctanos!</h1>
      <p>
        Estaremos encantados de ayudarte con qualquier duda que tengas. Envianos
        un mensaje y nos pondremos en contacto contigo
      </p>
      <div className="flex items-center">
        <Image
          src={"/assetss/icon/icon-whassapp-modal.svg"}
          width={30}
          height={30}
          alt="icon de whatsapp"
        />
        <p>+34 669945836</p>
      </div>
      <div className="flex items-center">
        <Image
          src={"/assetss/icon/icon-contact-modal.svg"}
          width={30}
          height={30}
          alt="icon de whatsapp"
        />
        <p>info@thedatinglab.es</p>
      </div>
    </div>
  );
}
