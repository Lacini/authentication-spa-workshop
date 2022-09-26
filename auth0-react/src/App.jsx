import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Auth0ProviderWithCallback from './auth0/Auth0ProviderWithCallback';

function App() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithCallback
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        redirectUri={`${window.location.origin}/login`}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      >
        <AppRouter />
      </Auth0ProviderWithCallback>
    </BrowserRouter>
  );
}

export default App;
