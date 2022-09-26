import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

function Location({ id }) {
  const [location, setLocation] = useState();

  useEffect(() => {
    const getLocation = async () => {
      if (!id) return;
      const response = await fetch(
        `${process.env.REACT_APP_NODE_BACKEND_URL}/api/pokemon-location/${id}`
      );
      setLocation(await response.json());
    };

    getLocation();
  }, [id]);

  return (
    <Box>
      <Typography>{`Name: ${location?.name}`}</Typography>
      <ul>
        {location?.areas.map((area) => (
          <li key={area.name}>{area.name}</li>
        ))}
      </ul>
    </Box>
  );
}

export default Location;
