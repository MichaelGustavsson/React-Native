import { createContext, useState } from 'react';

// Steg 1. skapar vi vår context function
// och definierar data samt funktioner...
export const CustomerContext = createContext({
  // Data som hanteras centralt...
  customers: [],
  // funktioner som manipulerar datat
  addCustomer: (name) => {},
  removeCustomer: (name) => {},
});

// Steg 2. Skapar vi vår provider...
const CustomerContextProvider = ({ children }) => {
  // Använd useState för att signalera ändringar i datat...
  const [customers, setCustomers] = useState([]);

  // Skapar funktioner som manipulerar tillståndet(datat)...
  function addCustomer(name) {
    setCustomers((currentItems) => [...currentItems, name]);
  }

  function removeCustomer(name) {
    setCustomers((currentItems) =>
      currentItems.filter((item) => item !== name)
    );
  }

  // Exponera tillståndet och funktioner
  const config = {
    customerList: customers,
    add: addCustomer,
    remove: removeCustomer,
  };

  // Skapa JSX...
  return (
    <CustomerContext.Provider value={config}>
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
