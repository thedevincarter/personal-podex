import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/routes/Layout";
import Search from "./components/routes/Search";
import FavoritePokemon from "./components/routes/FavoritePokemon";

const App = () => {
    const [favoritePokemon, setFavoritePokemon] = useState([]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={
                        <Search
                            favoritePokemon={favoritePokemon}
                            setFavoritePokemon={setFavoritePokemon}
                        />
                    }
                />

                <Route
                    path="favorite-pokemon"
                    element={
                        <FavoritePokemon
                            favoritePokemon={favoritePokemon}
                            setFavoritePokemon={setFavoritePokemon}
                        />
                    }
                ></Route>
            </Route>
        </Routes>
    );
};

export default App;
