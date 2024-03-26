"use client";
import Image from "next/image";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export default function MenuDivider() {
  return (
    <Menu>
      <MenuHandler>
        <Button className="bg-transparent shadow-inherit hover:shadow-inherit">
          <Image
            width={35}
            height={35}
            src={"/assets/image/icon-user.svg"}
            alt="icono de usuario"
            className="lg:hidden"
          />
        </Button>
      </MenuHandler>
      <MenuList className="text-black font-nunito">
        <MenuItem className="text-[1rem]">Mi Perfil</MenuItem>
        <MenuItem>Editar Perfil</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
