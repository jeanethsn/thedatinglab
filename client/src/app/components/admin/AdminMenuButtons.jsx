import Image from "next/image";

export default function AdminMenuButtons() {
    return (
        <nav className="flex-col flex justify-between h-1/2">
            <div className="flex-col flex justify-between h-1/4">
            <button className="flex font-nunito text-lg font-bold text-white-text gap-2 pr-8">
            <Image
                src="/assets/icon/icon-events-white.svg"
                alt="Icono home"
                width={20}
                height={20}
                className="m-auto"
            />
            Eventos
            </button>
            <button className="flex font-nunito text-lg font-bold text-white-text gap-2 pr-8">
            <Image
                src="/assets/icon/user-menu-icon-white.svg"
                alt="Icono home"
                width={20}
                height={20}
                className="m-auto"
            />
            Usuarios
            </button>
            </div>
            
            <button className="flex font-nunito text-lg font-bold text-white-text gap-2 pr-8">
            <Image
                src="/assets/icon/logout-icon.svg"
                alt="Icono home"
                width={20}
                height={20}
                className="m-auto"
            />
            Logout
            </button>
        </nav>

    );}