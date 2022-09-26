import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ component, claims = [], ...propsForComponent }) => {
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();

  const Cp = withAuthenticationRequired(component, {
    claimCheck: async () => {
      if (claims.length === 0) return;
      const accessToken = await getAccessTokenSilently();
      const permissions = decodeToken(accessToken)?.permissions;
      const hasAllRequiredClaims = claims?.every((token) =>
        permissions.includes(token)
      );
      if (!hasAllRequiredClaims) {
        navigate("overview");
      }
    },
  });
  return <Cp {...propsForComponent} />;
};

export default ProtectedRoute;