import React, { useContext } from 'react';
import { AuthenticatedContext } from '../../context/authentication';
export default function NavBar() {
  const { authenticated, setAuthenticated } = useContext(AuthenticatedContext);

  const handleChangeAuth = () => setAuthenticated(!authenticated);

  return (
    <div id="navbar">
      <div className="navbar-brand">React-Context</div>
      <div className="navbar-nav">
        <button onClick={handleChangeAuth} type="button">
          {authenticated ? 'Logout' : 'Login'}
        </button>
      </div>
    </div>
  );
}
