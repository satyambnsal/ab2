import { getSchnorrAccount } from '@aztec/accounts/schnorr'
import {
  AccountWalletWithSecretKey,
  Contract,
  createPXEClient,
  Fr,
  GrumpkinScalar,
  PXE,
  waitForPXE,
} from '@aztec/aztec.js'
import { useAtomValue } from 'jotai'
import { pxeAtom } from '../atoms.js'
import { RPC_URL } from '../constants.js'
import { TokenContract, TokenContractArtifact } from '@aztec/noir-contracts.js'
// import { NFTContract, NFTContractArtifact } from '@aztec/noir-contracts.js/NFT'
import { NFTContract } from '../artifacts/NFT.js'

export const useAccount = () => {
  // const pxe = useAtomValue(pxeAtom)
  const createAccount = async (pxe: PXE) => {
    try {
      const pxeClient = createPXEClient(RPC_URL)
      await waitForPXE(pxeClient)
      const secretKey = Fr.random()
      const signingPrivateKey = GrumpkinScalar.random()
      const wallet = await getSchnorrAccount(pxeClient!, secretKey, signingPrivateKey).waitSetup()
      // const deployedContract = await wallet.deploy()
      console.log('Account created', wallet.getAddress().toShortString())
      return wallet
    } catch (e) {
      console.error('Account error', e)
      return null
    }
  }

  const deployToken = async (owner: AccountWalletWithSecretKey) => {
    const ownerAddress = owner.getAddress()
    const deployedContract = await TokenContract.deploy(owner, ownerAddress, 'TokenName', 'TKN', 18)
      .send()
      .deployed()

    const token = await TokenContract.at(deployedContract.address, owner)
    return token
  }

  const deployNFTContract = async (
    admin: AccountWalletWithSecretKey,
    name: string,
    symbol: string
  ) => {
    const adminAddress = admin.getAddress()

    const deployedContract = await NFTContract.deploy(admin, adminAddress, name, symbol)
      .send()
      .deployed()

    const nft = await NFTContract.at(deployedContract.address, admin)
    return nft
  }

  return { createAccount, deployToken, deployNFTContract }
}
