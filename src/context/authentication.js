import React, { createContext, useState } from 'react';

export const AuthenticatedContext = createContext(false);
AuthenticatedContext.displayName = 'AuthContext';

export default function Provider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthenticatedContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthenticatedContext.Provider>
  );
}
