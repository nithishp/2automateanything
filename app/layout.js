import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./_components/sidebar/Sidebar";
import Image from "next/image";
import { NavbarDemo } from "./_components/navbar/Navbar";
import TailFooter from "./_components/TailFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "2AutomateAnything",
  description: "Created by 2AutomateAnything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:hidden lg:hidden xl:hidden">
        <div>
            <Sidebar />
          <Image
          className="mx-auto"
            src="/logos/logo-black-new.svg"
            width={100}
            height={70}
            alt="Logo"
          />
        </div>
        </div>

        <NavbarDemo />
        {children}
        <TailFooter />
      </body>
    </html>
  );
}
