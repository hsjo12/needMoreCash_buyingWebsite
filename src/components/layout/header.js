"use client";
import Link from "next/link";

import ToastMSG from "../Utils/toastMessage";
import { useContext } from "react";
import { ContextApI } from "../contextAPI/artAPI";

import { useWeb3Modal } from "@web3modal/react";
const Header = () => {
  const { setUser, user } = useContext(ContextApI);
  const { open, close } = useWeb3Modal();

  const connect = async () => {
    try {
      if (typeof window != undefined) {
        if (window.klaytn) {
          const accounts = await window.klaytn.enable();
          setUser(accounts[0]);
          console.log(accounts);
        } else {
          return ToastMSG("카이카스를 설치하세요.", "warn");
        }
      }
    } catch (error) {}
  };

  return (
    <nav className="font-roboto_Slab xl:container btnSize grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mx-auto gap-4 border-b-2 text-[#f5f5f5]  border-[#726f6f] p-3">
      <div className="logoSize font-rammetto_One logoTextSize col-span-2 flex justify-start items-center">
        <Link href="./">
          <p>ART</p>
        </Link>
      </div>

      <div className="w-full grid-cols-1  md:col-span-3 xl:col-span-3"></div>
      <button className="btn2">About</button>
      <button className="btn2">Mint</button>
      <button className="btn p-2" onClick={() => open()}>
        Connect
      </button>
    </nav>
  );
};

export default Header;
