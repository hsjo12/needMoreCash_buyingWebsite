"use client";
import Link from "next/link";
import { FaTwitterSquare, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center  mx-auto xl:container">
      <div className="font-bold sm:text-xl xl:text-2xl font-alice">
        Copyrightⓒ 2023 All right reserved
      </div>
      <div className="font-bold sm:text-xl xl:text-2xl font-alice">
        by VividPixel
      </div>
      {/* <div className="grid grid-cols-2 gap-2 pt-2 text-2xl sm:text-2xl md:text-3xl xl:text-4xl">
        <Link href={"https://t.me/busprotocol"} target="_blank">
          <FaTelegram />
        </Link>
        <Link href={"https://twitter.com/busprotocol/"} target="_blank">
          <FaTwitterSquare />
        </Link>
      </div> */}
    </footer>
  );
};

export default Footer;
