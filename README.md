## Solution :tada:

I built this solution using React, Chakra UI, and the fetch API.

#### Setup Steps
1. Run `npm install` from the root directory of the project to install a few dependencies.
2. Run `npm run build` from the root directory to generate a production bundle and output it to `build`
   1. Run `serve -s build` to serve this bundle at `http://localhost:3000`

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