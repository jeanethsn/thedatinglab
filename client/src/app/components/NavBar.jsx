"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
// import Menu from "@/app/components/MenuDivider.jsx";
import DrawerWithNavigation from "@/app/components/Drawer.jsx";
import Button from "@/app/components/Button.jsx";
import { usePathname } from "next/navigation";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import Modal from "./modal/Modal";
import LoginContent from "@/app/components/modal/LoginContent";
import RegistroContent from "@/app/components/modal/RegistroContent";

export default function NavigationBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeDrawer = () => setOpen(false);
  const [ShowModal, setShowModal] = useState(false);

  const isHomePage = pathname === "/";
  const isFaqsPage = pathname === "/faqs"; // cambiar ruta
  const isEventsPage = pathname === "/events"; // cambiar ruta
  const handleModal = () => {
    setShowModal(true);
    console.log("hola")
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const scrollInTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  const navList = (
    <>
      <ul className="flex lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-[3rem] text-black ">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`${
            isHomePage ? "border-b-2 border-primary-color rounded-none" : ""
          } font-semibold text-[1rem]`}
        >
          <Button
            href="#"
            className={`${
              isHomePage ? "text-primary-color" : ""
            } flex items-center  font-nunito `}
          >
            Home
          </Button>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`${
            isFaqsPage ? "border-b-2 border-primary-color rounded-none" : ""
          } font-semibold text-[1rem]`}
        >
          <Button
            onClick={() => scrollInTo("sectionStepsInfo")}
            className={`${
              isFaqsPage ? "text-primary-color" : ""
            } flex items-center  font-nunito`}
          >
            ¿Como Funciona?
          </Button>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`${
            isEventsPage ? "border-b-2 border-primary-color rounded-none" : ""
          } font-semibold text-[1rem]`}
        >
          <Button
            onClick={() => scrollInTo("sectionEvents")}
            className={`${
              isEventsPage ? "text-primary-color" : ""
            } flex items-center  font-nunito`}
          >
            Eventos
          </Button>
        </Typography>
      </ul>
      <div className="flex items-center">
        <Button className="hidden lg:inline-block lg:font-semibold text-[1rem]  font-nunito lg:text-primary-color lg:border-[0.15rem] lg:border-primary-color lg:py-[0.5rem] lg:px-[1.6rem]" onClick={handleModal}>
          Accede
        </Button>
      </div>

      {
  ShowModal && 
  (
    <div
      className=""
      style={{ backgroundColor: "#000000cc" }}
    >
      <Modal>
        <LoginContent />
      </Modal>  
    </div>
  )
      }
        

    </>
  );

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-[1rem] py-[1rem] lg:px-[4rem] lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <IconButton
            variant="text"
            className="basis-[15%] w-[2.5rem] max-w-none text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpen(true)}
          >
            {!open && (
              <Image
                width={40}
                height={40}
                src={"/assets/image/icon-hamburger.svg"}
                alt="icono de menu mobile"
                className="w-full"
              />
            )}
          </IconButton>
          <Button
            as="Link"
            href="/"
            className="basis-[70%] cursor-pointer py-1.5 flex justify-center lg:basis-[20%] lg:justify-start"
          >
            <Image
              width={180}
              height={60}
              src={"/assets/image/logo-dating-lab.svg"}
              alt="logo de dating lab"
            />
          </Button>
          <div className="flex items-center lg:basis-[80%] lg:justify-end">
            <div className=" hidden lg:flex lg:gap-[3rem]">{navList}</div>
          </div>
          <Button className="lg:hidden basis-[15%] w-[2rem] flex justify-center">
            <Image
              width={25}
              height={25}
              src={"/assets/image/icon-user.svg"}
              alt="icono de usuario"
              className="lg:hidden"
            />
          </Button>
        </div>
      </Navbar>
      <DrawerWithNavigation closeDrawer={closeDrawer} open={open} />
    </>
  );
}
