const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");
const { auth, claimCheck } = require("express-oauth2-jwt-bearer");

const CLAIMS = {
  POKEMON_TRAINER: "pokemon:trainer",
  POKEMON_MASTER: "pokemon:master",
};

const pokeApiUrl = "https://pokeapi.co/api/v2";

const app = express();
app.use(cors());
app.options("*", cors());

const needsAuth = auth({
    audience: ['http://localhost:3000', 'http://localhost:4200'],
    issuerBaseURL: '',
});

app.get("/api/pokemon-list", needsAuth, async function (req, res) {
  const response = await fetch(`${pokeApiUrl}/pokemon`);
  const pokemonJson = await response.json();
  const pokemon = pokemonJson.results
    .sort(() => 0.5 - Math.random())
    .slice(0, 20);
  res.json(pokemon);
});

const isPokemonTrainer = claimCheck((claims) => {
  return claims.permissions.includes(CLAIMS.POKEMON_TRAINER);
});

app.get(
  "/api/pokemon/:name",
  needsAuth,
  isPokemonTrainer,
  async function (req, res) {
    const response = await fetch(`${pokeApiUrl}/pokemon/${req.params.name}`);
    res.json(await response.json());
  }
);

const isPokemonMaster = claimCheck((claims) => {
  return claims.permissions.includes(CLAIMS.POKEMON_MASTER);
});

app.get(
  "/api/pokemon-location/:name",
  needsAuth,
  isPokemonMaster,
  async function (req, res) {
    const response = await fetch(`${pokeApiUrl}/location/${req.params.name}`);
    res.json(await response.json());
  }
);

app.listen(3000, function () {
  console.log("Listening on http://localhost:3000");
});
