"use client";
import ArtAPI from "../contextAPI/artAPI";
import Web3WalletConnected from "./web3WalletConnected";

const Provider = ({ children }) => {
  return (
    <>
      <ArtAPI>
        <Web3WalletConnected>{children}</Web3WalletConnected>
      </ArtAPI>
    </>
  );
};

export default Provider;
