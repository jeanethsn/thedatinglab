import Image from "next/image";
import AdminMenuButtons from "./AdminMenuButtons";

export default function AdminSideMenu() {

  return (
    <aside className="bg-primary-color h-[100vh] w-1/4 py-[5%] flex-col flex items-end justify-between">
      <div>
        <Image
          src="/assets/image/LogoB.svg"
          alt="Icono home"
          width={250}
          height={250}
          className="m-auto pb-6"
        />
        <p className="text-white text-center font-nunito text-xl w-2/3 m-auto">
          La app de citas donde no existe el swipe
        </p>
      </div>
        {/* <AdminMenuButtons /> falta hacer la logica boton activo, cambiar según la page color y iconos*/}
    </aside>
  );
}