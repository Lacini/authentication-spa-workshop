import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Header from "./header";

function Overview() {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch("http://localhost:3000/api/pokemon-list");
      setPokemons(await response.json());
    };

    fetchPokemon();
  }, []);

  return (
    <>
      <Header />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pokémon</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemons.map((pokemon) => (
              <TableRow key={pokemon.name}>
                <TableCell>{pokemon.name}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => navigate(`/detail/${pokemon.name}`)}>
                    More info
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Overview;
