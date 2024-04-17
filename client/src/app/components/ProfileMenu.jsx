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
import { useRouter } from "next/navigation";

export default function ProfileMenu() {
  const router = useRouter();
  const { handleUserLogout, user } = useUser();
  const profileImage = user.profile_image
    ? `http://127.0.0.1:8000/storage/${user.profile_image}`
    : "/assets/image/face-carton-user.svg";

  <button onClick={() => handleClick(user.id)}>Click me</button>;
  return (
    <Menu placement="bottom-end" className="hidden">
      <MenuHandler>
        <Avatar
          variant="circular"
          alt={`${user.name} photo`}
          className="cursor-pointer border-[0.15rem] border-red-orange w-[3rem] h-[3rem]"
          src={profileImage}
        />
      </MenuHandler>
      <MenuList className="text-black font-nunito px-[2rem] rounded-xl shadow-zinc-300 ">
        {user.profile_id && (
          <MenuItem
            className="flex gap-[0.8rem] items-baseline hover:bg-inherit"
            onClick={() => router.push(`/mi-cuenta/?id=${user.profile_id}`)}
          >
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
        )}

        {/* <MenuItem className="flex items-center gap-[0.8rem] hover:bg-inherit">
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
        <hr className="my-2 border-blue-gray-50" /> */}
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
