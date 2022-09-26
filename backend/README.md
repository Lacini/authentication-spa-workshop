
# Authenticated backend

## Usage
This is a node backend that authenticates against an auth0 provider.

There are currently 3 available API calls.

`/api/pokemon-list`
This is a private call return a list of all the Pokémon

`/api/pokemon/:name`
This is a private call requiring the permission `pokemon:trainer`

`/api/pokemon-locatin/:name`
This is a private call requiring the permission `pokemon:master`

## Installation

`npm install`

## Run application
`npm run start`
