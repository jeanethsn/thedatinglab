"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/Button.jsx";
import ModalContact from "@/app/components/modal/ModalContact.jsx";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

export default function DrawerWithNavigation({ closeDrawer, open }) {
  const [drawerSize, setDrawerSize] = useState(600);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 500) {
        setDrawerSize(280);
      }
    });
  }, []);
  return (
    <>
      {/* render prop  */}
      {/* {iconButton(setOpen, open)} */}

      <Drawer
        size={drawerSize}
        open={open}
        onClose={closeDrawer}
        className="w-full"
      >
        <div className="mb-2 flex items-center justify-between pt-[3rem] px-[1.5rem]">
          <Image
            width={180}
            height={60}
            src={"/assets/image/logo-dating-lab.svg"}
            alt="logo de dating lab"
          />
          <IconButton variant="text" color="black" onClick={closeDrawer}>
            <Image
              width={15}
              height={15}
              src={"/assets/icon/icon-close.svg"}
              alt="icono de cerrar"
            />
          </IconButton>
        </div>
        <List className="px-[1rem]">
          <Button as="Link" href="/" className="!py-0 !mt-[1rem]">
            <ListItem className="text-black font-nunito text-[1.1rem] font-semibold items-baseline ">
              <ListItemPrefix>
                <Image
                  width={28}
                  height={28}
                  src={"/assets/icon/icon-home.svg"}
                  alt="icono de home"
                />
              </ListItemPrefix>
              Home
            </ListItem>
          </Button>
          <Button as="Link" href="/eventos" className="!py-0 !mt-[0.5rem]">
            <ListItem className="text-black font-nunito text-[1.1rem] font-semibold">
              <ListItemPrefix>
                <Image
                  width={25}
                  height={25}
                  src={"/assets/icon/icon-event.svg"}
                  alt="icono de evento "
                />
              </ListItemPrefix>
              Eventos
            </ListItem>
          </Button>
          <Button as="Link" href="/preguntas-frecuentes" className="!py-0 !mt-[0.5rem]">
            <ListItem className="text-black font-nunito text-[1.1rem] font-semibold">
              <ListItemPrefix>
                <Image
                  width={25}
                  height={25}
                  src={"/assets/icon/icon-info.svg"}
                  alt="icono de info"
                />
              </ListItemPrefix>
              FAQs
            </ListItem>
          </Button>
          <ModalContact
            renderContactModal={(handleOpenModalMobile) => (
              <Button
                onClick={() => {
                  closeDrawer();
                  handleOpenModalMobile();
                }}
                className="!py-0 !mt-[0.5rem]"
              >
                <ListItem className="text-black font-nunito text-[1.1rem] font-semibold">
                  <ListItemPrefix>
                    <Image
                      width={25}
                      height={25}
                      src={"/assets/icon/icon-contacto.svg"}
                      alt="icono de contacto"
                    />
                  </ListItemPrefix>
                  Contacto
                </ListItem>
              </Button>
            )}
          />
        </List>
      </Drawer>
    </>
  );
}
