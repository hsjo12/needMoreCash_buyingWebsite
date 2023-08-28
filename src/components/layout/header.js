"use client";
import Link from "next/link";

import ToastMSG from "../Utils/toastMessage";
import { useContext } from "react";
import { ContextApI } from "../contextAPI/lotteryAPI";
import { Web3Button } from "@web3modal/react";
const Header = () => {
  const { setUser, user } = useContext(ContextApI);
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
    <nav className="xl:container grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mx-auto gap-4 border-b-2 text-[#f5f5f5]  border-[#eab308] p-3">
      <div className="font-rammetto_One logoTextSize col-span-2 flex justify-start items-center">
        <Link href="./">
          <p>ART</p>
        </Link>
      </div>

      <div className="w-full grid-cols-1  md:col-span-3 xl:col-span-5"></div>
      {/* Wallet 연결시 보이기 */}
      {/* <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="col-span-1 sm:block sm:col-span-2 md:col-span-1 flex items-center justify-center navMenu "
      >
        My page
      </button> */}
      <Web3Button />
      {/* <div className="font-noto_Sans_KR walletBtnTextSize col-span-1  flex justify-end items-center">
        {user ? (
          <p className="">{`${user.slice(0, 4)}...${user.slice(-4)}`}</p>
        ) : (
          <button
            onClick={connect}
            className="btn p-1 sm:p-2 walletBtnTextSize justify-end"
            href="./"
          >
            지갑연결
          </button>
        )}
      </div> */}
    </nav>
  );
};

export default Header;
