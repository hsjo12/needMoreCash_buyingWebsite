"use client";
import Link from "next/link";

import ToastMSG from "../Utils/toastMessage";
import { useContext, useEffect, useState } from "react";
import { ContextApI } from "../contextAPI/artAPI";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { FaBars } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
const Header = () => {
  const { setUser, user } = useContext(ContextApI);
  const { open, close } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);
  const [isBarOn, setIsBarOn] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const openBars = () => {
    setIsBarOn(!isBarOn);
  };

  return (
    mounted && (
      <nav className="btnSize font-roboto_Slab xl:container grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mx-auto gap-4 border-b-2 text-[#f5f5f5]  border-[#f5f5f5] p-3 ">
        <div className="flex items-center justify-start col-span-2 logoSize font-rammetto_One logoTextSize">
          <Link href="./">
            <p>ART</p>
          </Link>
        </div>
        {/* This will be visible after xl */}
        <div className="hidden w-full grid-cols-6 xl:grid md:col-span-6 xl:col-span-6 ">
          <button className="col-start-4 navMenu">About</button>
          <button className="navMenu">Mint</button>

          {isConnected && address ? (
            <button
              className="flex flex-col items-center justify-center p-2 mx-auto navMenu"
              onClick={() => open()}
            >
              {address.slice(0, 4)}...{address.slice(-4)}
            </button>
          ) : (
            <button className="p-2 navMenu" onClick={() => close()}>
              Connect
            </button>
          )}
        </div>
        {/* This will be visible before xl */}
        <div className="flex flex-col items-center justify-center col-start-6 mx-auto xl:hidden">
          {isBarOn ? null : (
            <FaBars className="text-4xl cursor-pointer" onClick={openBars} />
          )}

          {isBarOn ? (
            <div className="fixed top-0 right-0 w-screen h-screen  p-5 bg-[#04030852]  leftToRight">
              <div className="flex flex-col items-end w-full h-full ">
                <ImCancelCircle
                  className="text-4xl cursor-pointer"
                  onClick={openBars}
                />
                <div className="flex flex-col items-center justify-center w-full h-full ">
                  {isConnected && address ? (
                    <>
                      <button
                        className="flex flex-col items-center justify-center p-2 mx-auto navMenu btn"
                        onClick={() => close()}
                      >
                        {address.slice(0, 4)}...{address.slice(-4)}
                      </button>
                      <button className="col-start-4 p-2 navMenu">About</button>
                      <button className="p-2 navMenu">Mint</button>
                    </>
                  ) : (
                    <>
                      <button className="col-start-4 p-2 navMenu">About</button>
                      <button className="p-2 navMenu">Mint</button>
                      <button className="p-2 navMenu" onClick={() => open()}>
                        Connect
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    )
  );
};

export default Header;
