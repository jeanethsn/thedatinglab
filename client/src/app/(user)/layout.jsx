"use client";
import Footer from "@/app/components/common/Footer.jsx";
import NavigationBar from "@/app/components/common/NavBar.jsx";

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
