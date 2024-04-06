import Image from "next/image";
import AdminMenuButtons from "./AdminMenuButtons";

export default function AdminSideMenu() {

  return (
    <aside className="bg-primary-color min-h-screen w-[400px] py-[5%] flex-col flex items-end gap-40">
      <div className="max-h-screen">
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
    <AdminMenuButtons/>
    </aside>
  );
}