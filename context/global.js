import React from 'react';

const GlobalContext = React.createContext({
  address: null,
  update: (data) => { }
})

export default GlobalContext