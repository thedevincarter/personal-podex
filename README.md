## Solution :tada:

I built this solution using React, Chakra UI, and the fetch API.

#### Setup Steps
1. Run `npm install` from the root directory of the project to install a few dependencies.
2. Run `npm run build` from the root directory to generate a production bundle and output it to the `build` directory
   1. Run `serve -s build` to serve this bundle at `http://localhost:3000`

#### General Overview

1. `App.jsx` 
   1. To keep things simple for this demo, `App` houses routes and the overarching state for a users list of favorite Pokemon.
2. `Search.jsx`
   1. To keep things simple for this demo `Search` frontloads the name and url for all 1118 Pokemon and stores it in state.
   2. As a user enters a search, this state is searched in realtime and a list of possible matches is presented.
3. `FavoritePokemon.jsx`
   1. This route displays a list of the users favorite Pokemon.
4. `PokemonCard.jsx`
   1. This resusable component is used on the search page to show basic details about a Pokemon. It is also used on the favorite Pokemon page to show in depth details about a Pokemon.

#### Possible Refactor Points

1. For this demo, `App` is the main parent component. In a real world scenario, or a larger application we'd want to move the overall logic into a component of its own.
2. This app is pretty straightforward, but already into a bit of prop drilling by passing the `FavoritePokemon` state and its setter through a few different components. In a real world scenario or larger application, it may be worth looking into putting this into Context.

**Cheers!**

---

Head over to https://pokeapi.co/. This API can be used to get all the information you could ever want to know about Pokémon. Your task is to build a web app so that users can more easily explore this API. The app should have the following: 

Page 1: 
 - allow finding a Pokémon by name
 - once found it should display:
   - an image of the Pokémon
   - its height and weight
   - the names of the moves available to the Pokémon
 - allow adding a Pokémon to the user's list of favorite Pokémon

Page 2: 
 - display a list of the user's favorite Pokémon
 - allow them to easily get more information about these Pokémon
 - allow removing Pokémon from their list of favorites


Don't worry about creating a backend to persist this information. 
Please create a public GitHub repository for this project and send us the link once you're finished.
We will build and run the web app locally to evaluate it, and then discuss your solution in a follow up interview.