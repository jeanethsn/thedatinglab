"use client";
import Authenticator from "../AutenticationPage/Authenticator";
import { useUser } from "@/app/providers/UserProvider";

export default function withAuthentication(Component) {
  // verificar si existe el user en el localStorage
  return (props) => {
    const { user } = useUser();

    if (!user.email) return <Authenticator />;

    return <Component {...props} />;
  };

  // no esta logueado mostrar Authenticator
}
