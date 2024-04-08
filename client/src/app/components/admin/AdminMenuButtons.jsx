import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useUser } from "@/app/providers/UserProvider.jsx";

export default function AdminMenuButtons() {
    const router = useRouter();
    const { user,handleUserLogout } = useUser();

    const handleLogout = () => {
        handleUserLogout();
        router.push('/dashboard/login'); 
    };

    return (
        <nav className="flex-col flex justify-between h-1/2">
            <div className="flex-col flex justify-between h-1/4">
        
                <Link href="/dashboard/eventos" className="flex font-nunito text-lg font-bold text-white-text gap-2 pr-8">
                        <Image
                            src="/assets/icon/icon-events-white.svg"
                            alt="Icono eventos"
                            width={20}
                            height={20}
                            className="m-auto"
                        />
                        Eventos
                </Link>
                
                <Link href="/dashboard/usuarios" className="flex font-nunito text-lg font-bold text-white-text gap-2 pr-8">
                        <Image
                            src="/assets/icon/user-menu-icon-white.svg"
                            alt="Icono usuarios"
                            width={20}
                            height={20}
                            className="m-auto"
                        />
                        Usuarios
                </Link>
            </div>
            
            {user && Object.keys(user).length > 0 && (
                <button 
                    className="flex font-nunito text-lg font-bold text-white-text gap-2 pr-8"
                    onClick={handleLogout}
                    >
                    <Image
                        src="/assets/icon/logout-icon.svg"
                        alt="Icono logout"
                        width={20}
                        height={20}
                        className="m-auto"
                    />
                    Logout
                </button>
            )}
        </nav>
    );
}