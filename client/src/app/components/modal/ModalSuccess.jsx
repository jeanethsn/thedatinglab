import Image from "next/image";
import Button from "@/app/components/Button.jsx";

export default function ModalSucess({ handleCloseModalAuth }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={"/assets/icon/modal-icon-successfull.svg"}
        width={50}
        height={100}
        alt="imagen de registrado corectamente"
      />
      <h3 className="font-nunito font-bold mt-[1rem] text-[1rem] text-[#181818]">
        ¡Cuenta creada correctamente!
      </h3>
      <p className="font-nunito font-medium text-[0.9rem]">
        Empieza a disfrutar en Dating lab
      </p>
      <Button
        color="secondary"
        onClick={handleCloseModalAuth}
        children="Continuar"
        className="flex justify-center gap-[0.8rem] text-white text-[0.9rem] py-[0.3rem] font-semibold lg:mt-[1.4rem] lg:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1rem]"
        style={{
          transition:
            "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
        }}
      />
    </div>
  );
}
