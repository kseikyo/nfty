import { Web3ReactProvider } from '@web3-react/core'
import 'tailwindcss/tailwind.css'
import Web3 from 'web3'
import GlobalContext from '../context/global';
import { useEffect, useState } from 'react';

function getLibrary(provider) {
  return new Web3(provider)
}

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({
    address: null,
    update
  })

  function update(data) {
    setState(Object.assign({}, state, data));
  }

  return (
    <GlobalContext.Provider value={state}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </GlobalContext.Provider>
  )
}

export default MyApp
