import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers, providers } from "ethers";
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Web3Modal from 'web3modal';
import Layout, { siteTitle } from '../components/layout'


export default function Home(props) {
  const [web3Modal, setWeb3Modal] = useState(null)
  const [address, setAddress] = useState("")

  useEffect(() => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.INFURA_ID,
        }
      },
    };

    const newWeb3Modal = new Web3Modal({
      cacheProvider: true, // very important
      network: "mainnet",
      providerOptions,
    });

    setWeb3Modal(newWeb3Modal)
  }, [])

  useEffect(() => {
    // connect automatically and without a popup if user is already connected
    if (web3Modal && web3Modal.cachedProvider) {
      connectWallet()
    }
  }, [web3Modal])


  async function connectWallet() {
    const provider = await web3Modal.connect();

    addListeners(provider);

    const ethersProvider = new providers.Web3Provider(provider)
    const userAddress = await ethersProvider.getSigner().getAddress()
    setAddress(userAddress)
  }

  async function addListeners(provider) {

    provider.on("accountsChanged", (accounts) => {
      window.location.reload()
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
      window.location.reload()
    });
  }


  return (
    <Layout home>
      <Head>
        <title>NFTY</title>
      </Head>
      <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <p className="text-center text-green-500 text-8xl"><i className="fa-duotone fa-poo-storm"></i></p>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">NFTY</h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            Tools for your NFTs
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            {address.length <= 0 &&
              <p className="mb-5">

                <button
                  onClick={connectWallet}
                  type="submit"
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Connect your wallet
                </button>
              </p>
            }

            {address.length > 0 &&
              <p className="text-center">
                <b>You're connected!</b>
              </p>
            }

            <p className="text-center">
              {address ? <span>{address}</span> : <span>No wallet currently connected</span>}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
