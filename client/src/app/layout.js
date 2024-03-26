import "./globals.css";
import { Nunito_Sans, Ms_Madi } from "next/font/google";
import { ThemeProvider } from "@/app/providers/MaterialProvider.jsx";

const nunito = Nunito_Sans({
  // Define las opciones de la fuente Jaldi
  subsets: ["latin"],
  weight: ["400", "700"], // Por ejemplo, pesos de fuente 400 y 700
  variable: "--font-nunito",
  display: "swap",
});

const madi = Ms_Madi({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-madi",
  display: "swap",
});

export const metadata = {
  title: "Dating Lab",
  description: "Dating Lab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${nunito.variable} ${madi.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
