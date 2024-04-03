import Image from "next/image";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { useUser } from "@/app/providers/UserProvider.jsx";

export default function ProfileMenu() {
  const { handleUserLogout } = useUser();
  return (
    <Menu placement="bottom-end" className="hidden">
      <MenuHandler>
        <Avatar
          variant="circular"
          alt="tania andrew"
          className="cursor-pointer border-[0.15rem] border-red-orange "
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      </MenuHandler>
      <MenuList className="text-black font-nunito px-[2rem] rounded-xl shadow-zinc-300 ">
        <MenuItem className="flex gap-[0.8rem] items-baseline hover:bg-inherit">
          <Image
            width={18}
            height={18}
            src={"/assets/icon/icon-user-black.svg"}
            alt="icono de usuario"
          />
          <Typography
            variant="small"
            className="font-medium text-[1.1rem] hover:text-deep-orange-600"
          >
            Mi perfil
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-[0.8rem] hover:bg-inherit">
          <Image
            width={18}
            height={18}
            src={"/assets/icon/icon-match.svg"}
            alt="icono de matches"
          />
          <Typography
            variant="small"
            className="font-medium text-[1.1rem] hover:text-deep-orange-600"
          >
            Matches
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-[0.8rem] hover:bg-inherit">
          <Image
            width={18}
            height={18}
            src={"/assets/icon/icon-experiences.svg"}
            alt="icono de eventos"
          />
          <Typography
            variant="small"
            className="font-medium text-[1.1rem] hover:text-deep-orange-600"
          >
            Experiencias
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem
          className="flex items-center gap-[0.8rem] hover:bg-inherit"
          onClick={handleUserLogout}
        >
          <Image
            width={18}
            height={18}
            src={"/assets/icon/icon-logout.svg"}
            alt="icono de usuario"
          />
          <Typography
            variant="small"
            className="text-[1.1rem] font-medium hover:text-deep-orange-600"
          >
            Logout
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
