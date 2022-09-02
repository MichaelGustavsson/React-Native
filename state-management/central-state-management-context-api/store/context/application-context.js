import { createContext, useState } from 'react';

// Steg 1. skapar vi vår context function
// och definierar data samt funktioner...
export const ApplicationContext = createContext({
  // Data som hanteras centralt...
  userInfo: {},
  isLoggedIn: false,
});
