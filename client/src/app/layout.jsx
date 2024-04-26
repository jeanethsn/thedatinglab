"use client";
import { Nunito_Sans, Ms_Madi } from "next/font/google";
import { ThemeProvider } from "@/app/providers/MaterialProvider.jsx";
import Toast from "@/app/components/Toast.jsx";
import UserProvider from "@/app/providers/UserProvider.jsx";
import "./globals.css";
const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800", "1000"],
  variable: "--font-nunito",
  display: "swap",
});

const madi = Ms_Madi({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-madi",
  display: "swap",
});

// export const metadata = {
//   title: "Dating Lab",
//   description: "Dating Lab",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${nunito.variable} ${madi.variable}`}>
        <UserProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </UserProvider>
        <Toast />
      </body>
    </html>
  );
}
