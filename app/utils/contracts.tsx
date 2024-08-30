// lib/contracts.ts
import { ethers } from 'ethers';
import CiviCoinABI from '../../abis/CiviCoin.json';
import TownHallDAOABI from '../../abis/TownHallDAO.json';

export function getCiviCoinContract(provider: ethers.JsonRpcSigner, contractAddress: string) {
  return new ethers.Contract(contractAddress, CiviCoinABI, provider);
}

export function getTownHallDAOContract(provider: ethers.JsonRpcSigner, contractAddress: string) {
  return new ethers.Contract(contractAddress, TownHallDAOABI, provider);
}
