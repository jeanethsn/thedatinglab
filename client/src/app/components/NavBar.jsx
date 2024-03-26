"use client";
import Image from "next/image";
// import Menu from "@/app/components/MenuDivider.jsx";
import DrawerWithNavigation from "@/app/components/Drawer.jsx";
import Button from "@/app/components/Button.jsx";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";

export default function NavigationBar() {
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-[2rem] py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <DrawerWithNavigation
          iconButton={(setOpen, open) => (
            <IconButton
              variant="text"
              className="h-[4rem] w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpen(true)}
            >
              {!open && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[4rem] w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          )}
        />
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <Image
            width={180}
            height={60}
            src={"/assets/image/logo-dating-lab.svg"}
            alt="logo de dating lab"
          />
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Button className="hidden lg:inline-block">HOla</Button>
          </div>

          <Button className="lg:hidden">
            <Image
              width={30}
              height={30}
              src={"/assets/image/icon-user.svg"}
              alt="icono de usuario"
              className="lg:hidden"
            />
          </Button>
        </div>
      </div>
    </Navbar>
  );
}
