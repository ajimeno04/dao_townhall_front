import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export function useWeb3() {
  const [provider, setProvider] = useState<ethers.JsonRpcProvider | null>(null);
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    if (window.ethereum) {
      const web3Provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
      setProvider(web3Provider);

      window.ethereum.request({ method: 'eth_requestAccounts' }).then((accounts: string[]) => {
        setAccount(accounts[0]);
      });
    } else {
      console.error('No Ethereum wallet detected. Please install MetaMask!');
    }
  }, []);

  return { provider, account };
}
