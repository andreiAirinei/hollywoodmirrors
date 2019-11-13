import React, { useState, useEffect, createContext } from 'react';
import Client from 'shopify-buy';

export const ClientContext = createContext({
  client: null
});

const ClientProvider = ({ children }) => {
  const [client, setClient] = useState(null);

  // Needed for useEffect, otherwize it would have looped infinitely.
  useEffect(() => {
    const cl = Client.buildClient({
      storefrontAccessToken: 'ea2a8854901dc0285f30515803e46c6f',
      domain: 'hwmirrors.myshopify.com'
    });
    setClient(cl);
  }, []);

  return (
    <ClientContext.Provider value={{ client }}>
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
