"use client";
import Link from "next/link";

import ToastMSG from "../Utils/toastMessage";
import { useContext, useState } from "react";
import { ContextApI } from "../contextAPI/artAPI";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { FaBars } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
const Header = () => {
  const { setUser, user } = useContext(ContextApI);
  const { open, close } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const [isBarOn, setIsBarOn] = useState(false);
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

  const openBars = () => {
    setIsBarOn(!isBarOn);
  };

  return (
    <nav className=" overflow-hidden btnSize font-roboto_Slab xl:container  grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mx-auto gap-4 border-b-2 text-[#f5f5f5]  border-[#726f6f] p-3">
      <div className="flex items-center justify-start col-span-2 logoSize font-rammetto_One logoTextSize">
        <Link href="./">
          <p>ART</p>
        </Link>
      </div>
      {/* This will be visible after xl */}
      <div className="hidden w-full grid-cols-6 border border-red-400 xl:grid md:col-span-6 xl:col-span-6 ">
        <button className="col-start-4 btn2">About</button>
        <button className="btn2">Mint</button>
        <button className="p-2 btn" onClick={() => open()}>
          Connect
        </button>
      </div>
      {/* This will be visible before xl */}
      <div className="flex flex-col items-center justify-center col-start-6 mx-auto xl:hidden">
        <button onClick={openBars}>
          {/* {isBarOn ? null : <FaBars className="text-4xl " />} */}
          {/* <FaBars className="text-4xl " /> */}
          <div className="fixed top-0 right-0 w-screen h-screen  p-5 bg-[#04030852] border border-red-600">
            <div className="flex flex-col items-center justify-start w-full border border-teal-200">
              <button className="" onClick={openBars}>
                <ImCancelCircle className="text-4xl" />
              </button>
              <button className="col-start-4 btn2">About</button>
              <button className="btn2">Mint</button>
              <button className="p-2 btn" onClick={() => open()}>
                Connect
              </button>
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Header;
