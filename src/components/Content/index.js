import React, { useContext } from 'react';
import { AuthenticatedContext } from '../../context/authentication';

export default function Content() {
  const { authenticated, setAuthenticated } = useContext(AuthenticatedContext);

  return (
    <div id="content">
      <div id="context-monitor">
        <ul>
          <li>Authenticated: {String(authenticated)}</li>
          <li>setAuthenticated: {String(setAuthenticated)}</li>
        </ul>
      </div>
    </div>
  );
}
