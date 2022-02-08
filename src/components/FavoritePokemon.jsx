import { useEffect, useState } from "react";
import { Flex, Box, Container, Text } from "@chakra-ui/react";
import PokemonCard from "./PokemonCard";
import StyledListItem from "./lists/StyledListItem";

const FavoritePokemon = ({ favoritePokemon, setFavoritePokemon }) => {
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [pokemonData, setPokemondata] = useState(null);

    useEffect(() => {
        if (currentPokemon) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`)
                .then((response) => response.json())
                .then((data) => setPokemondata(data));
        }
    }, [currentPokemon]);

    return (
        <Container maxW="container.xl" paddingY="8">
            <Flex direction="column">
                {favoritePokemon.length ? (
                    <Box marginBottom="4">
                        <Text
                            fontSize="large"
                            fontWeight="bold"
                            marginBottom="4"
                        >
                            Your Favorite Pokemon
                        </Text>

                        <Flex
                            direction="row"
                            width="100%"
                            overflowX="scroll"
                            px="4"
                        >
                            {favoritePokemon.map((singlePokemon, i) => (
                                <Box marginRight="2" key={i}>
                                    <StyledListItem
                                        onClick={() =>
                                            setCurrentPokemon(singlePokemon.id)
                                        }
                                        title={singlePokemon.name}
                                    />
                                </Box>
                            ))}
                        </Flex>
                    </Box>
                ) : (
                    <Text padding="8">
                        You haven't added any favorite Pokemon
                    </Text>
                )}

                {pokemonData && (
                    <PokemonCard
                        pokemonData={pokemonData}
                        setPokemonData={setPokemondata}
                        favoritePokemon={favoritePokemon}
                        setFavoritePokemon={setFavoritePokemon}
                    />
                )}
            </Flex>
        </Container>
    );
};

export default FavoritePokemon;
