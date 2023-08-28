"use client";
const projectId = "bbb595edfc3299244917678b9896a47a";
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const WalletProvider = () => {
  return (
    <>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};
