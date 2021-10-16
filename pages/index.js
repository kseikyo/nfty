import { useWeb3React } from '@web3-react/core'
import axios from 'axios'
import Head from 'next/head'
import { injected } from '../components/wallet/connectors'

await axios.post('/api/auth/login', {
  address: await web3.getSigner().getAddress(),
  signature: await web3.getSigner().signMessage(message),
})

export default function Home() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }


  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-12">
      <Head>
        <title>NFTY</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/d36e6b2199.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>


      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <p className="text-center text-green-500 text-8xl"><i class="fa-duotone fa-poo-storm"></i></p>
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">NFTY</h2>
        <p className="mt-2 text-sm text-center text-gray-600">
          Tools for your NFTs
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <p className="mb-5">
            <button onClick={connect}
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Connect to MetaMask
            </button>
          </p>
          <p className="text-center">
            {active ? <span>Connected with <b>{account}</b></span> : <span> No wallet currently connected</span>}
          </p>
        </div>
      </div>
    </div>
  )
}
