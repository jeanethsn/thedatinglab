"use client";

import AdminSideMenu from "@/app/components/common/AdminSideMenu";

export default function Layout({ children }) {
  return (
    <>
      <AdminSideMenu/> 
      {children}
    </>
  );
}
