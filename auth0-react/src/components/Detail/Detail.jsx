import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Chip, Stack, Tab, Tabs, Typography } from "@mui/material";
import Moves from "./components/Moves";
import Stats from "./components/Stats";
import Location from "./components/Location";
import TabPanel from "./components/TabPanel";
import Header from "../header";

function Detail() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [pokemonDetail, setPokemonDetail] = useState();
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_NODE_BACKEND_URL}/api/pokemon/${name}`
      );
      setPokemonDetail(await response.json());
    };

    fetchPokemonDetail();
  }, [name]);

  const tabProps = (index) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });

  return (
    <>
      <Header />
      <Button onClick={() => navigate(-1)}>Return to list</Button>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        marginBottom={4}
        padding={2}
      >
        <Box display="flex" flexDirection="column" justifyContent="center">
          <img alt="Pokemon" src={pokemonDetail?.sprites.front_default} />
          <Typography textAlign="center">{pokemonDetail?.name}</Typography>
          <Stack direction="row" spacing={1}>
            {pokemonDetail?.types.map(({ type }) => (
              <Chip key={type.name} label={type.name} />
            ))}
          </Stack>
        </Box>
      </Box>
      <Box padding={2}>
        <Tabs
          value={selectedTab}
          onChange={(event, newValue) => {
            setSelectedTab(newValue);
          }}
          aria-label="basic tabs example"
        >
          <Tab label="Moves" {...tabProps(0)} />
          <Tab label="Stats" {...tabProps(1)} />
          <Tab label="Location" {...tabProps(1)} />
        </Tabs>
        <TabPanel value={selectedTab} index={0}>
          <Moves pokemonDetail={pokemonDetail} />
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          <Stats pokemonDetail={pokemonDetail} />
        </TabPanel>
        <TabPanel value={selectedTab} index={2}>
          <Location id={pokemonDetail?.id} />
        </TabPanel>
      </Box>
    </>
  );
}

export default Detail;
