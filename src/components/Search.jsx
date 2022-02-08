/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Box, Input, Container, Spinner, Center } from "@chakra-ui/react";
import PokemonCard from "./PokemonCard";
import StyledListItem from "./lists/StyledListItem";

const Search = ({ favoritePokemon, setFavoritePokemon }) => {
    const [pokemonList, setPokemonList] = useState(null);
    const [searchResults, setSearchResults] = useState(null);
    const [pokemonData, setPokemonData] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [isHidden, setIsHidden] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // There are only 1118 results so lets just frontload them all to keep it simple
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=2000")
            .then((response) => response.json())
            .then((data) => {
                setPokemonList(data.results);
                setLoading(false);
            });
    }, []);

    let debounced;
    const onHandleSearch = (val) => {
        if (!debounced) {
            // Debounce input so we dont call with each keystroke
            // Set to resonable time for these purposes
            debounced = _.debounce(() => {
                if (val === "") {
                    setSearchResults(null);
                    return;
                } else {
                    let filteredPokemon = pokemonList.filter((pokemon) =>
                        pokemon["name"].includes(val)
                    );
                    setSearchResults(filteredPokemon);
                }
            }, 300);
        }

        debounced();
    };

    useEffect(() => {
        onHandleSearch(inputValue);
    }, [inputValue]);

    const onFetchPokemonDetails = (url) => {
        setInputValue("");
        setIsHidden(true);
        setLoading(true);

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setPokemonData(data);
                setSearchResults(null);
                setLoading(false);
            });
    };

    if (loading) {
        return (
            <Center marginTop="8">
                <Spinner size="lg" />
            </Center>
        );
    }

    return (
        <Container maxW="container.lg" paddingTop="8">
            {!isHidden && (
                <Input
                    placeholder="Enter a Pokemon name"
                    value={inputValue}
                    size="lg"
                    onChange={(e) => setInputValue(e.target.value)}
                />
            )}

            <Box maxHeight="xl" overflowY="scroll">
                {searchResults &&
                    searchResults.map((pokemon, i) => (
                        <StyledListItem
                            key={i}
                            onClick={() => onFetchPokemonDetails(pokemon.url)}
                            title={pokemon.name}
                        />
                    ))}
            </Box>

            {pokemonData && (
                <PokemonCard
                    isPreview={true}
                    pokemonData={pokemonData}
                    setPokemonData={setPokemonData}
                    favoritePokemon={favoritePokemon}
                    setFavoritePokemon={setFavoritePokemon}
                    setIsHidden={setIsHidden}
                />
            )}
        </Container>
    );
};

export default Search;
