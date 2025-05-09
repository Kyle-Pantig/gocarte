"use client";
import Link from "next/link";
import Center from "./Center";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  return (
    <div className="bg-white sticky top-0 z-50 inset-x-0 h-16">
      <header className="relative bg-white">
        <Center>
          <div className="border-b border-gray-200">
            <div className="flex justify-between items-center px-4 h-16">
              <Link href={"/"}>
                <Image src={"/Logo.png"} alt="Logo" width={32} height={32} />
              </Link>
              <nav className="flex gap-8 items-center text-sm">
                <Link href={"/"} className={path === "/" ? " active " : " "}>
                  Home
                </Link>
                <Link
                  href={"/policy"}
                  className={path === "/policy" ? " active " : " "}
                >
                  Policy
                </Link>
                <Link
                  href={"/services"}
                  className={path === "/services" ? " active " : " "}
                >
                  Customer Services
                </Link>
                <Link
                  href={"/explore"}
                  className={path === "/explore" ? " active " : " "}
                >
                  Explore
                </Link>
              </nav>
              <div className="flex items-center gap-3">
                <Link href={"/cart"} className="relative">
                  <FontAwesomeIcon icon={faCartShopping} className="w-4 h-4" />
                  <span className="absolute -top-3 -right-3 text-white bg-red-500 text-xs py-1 px-2 rounded-full leading-3 aspect-square">
                    1
                  </span>
                </Link>
                <Link href={"/account"}>
                  <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Center>
      </header>
    </div>
  );
};

export default Header;
