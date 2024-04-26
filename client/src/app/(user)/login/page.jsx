"use client";
import { useState, useEffect } from "react";
import AuthenticatorRegister from "@/app/components/AutenticationPage/AuthenticatorRegister.jsx";
import AuthenticatorLogin from "@/app/components/AutenticationPage/AuthenticatorLogin.jsx";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function Page() {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "Login";
  });

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const data = [
    {
      label: "Iniciar sesion",
      value: "Login",
      desc: <AuthenticatorLogin />,
    },
    {
      label: "Crear cuenta",
      value: "Register",
      desc: <AuthenticatorRegister />,
    },
  ];
  console.log({ activeTab });
  return (
    <section
      className={`flex justify-center pt-[2rem] ${
        activeTab === "Login"
          ? "pb-[10rem] xxxl:pb-[22rem]"
          : "pb-[4rem] xxxl:pb-[6rem]"
      }`}
    >
      <div className="rounded-xl border-2 border-gray-500 w-[20rem] mx-auto py-[1rem] sm:w-[25rem] lg:w-[30rem]">
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 "
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none font-nunito border-b-4 border-primary-color",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={
                  activeTab === value
                    ? "text-primary-color font-bold"
                    : "font-bold"
                }
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value} className="sm:px-[1.8rem]">
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </section>
  );
}
