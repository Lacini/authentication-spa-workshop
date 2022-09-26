import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

function Auth0ProviderWithCallback({ children, ...props }) {
  const navigate = useNavigate();
  const handleRedirectCallback = (appState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  return (
    <Auth0Provider onRedirectCallback={handleRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
}

export default Auth0ProviderWithCallback;
