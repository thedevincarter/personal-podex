import React from "react";
import {
    Image,
    Text,
    Button,
    ButtonGroup,
    Container,
    Flex,
    Tag,
    useToast,
} from "@chakra-ui/react";
import { titleCase, formatTag } from "../utils/textUtils";

export default function PokemonCard({
    pokemonData,
    setPokemonData,
    favoritePokemon,
    setFavoritePokemon,
    isPreview,
    setIsHidden,
}) {
    const toast = useToast();

    const onHandleRemoveFavorite = (id) => {
        try {
            const newFavoritePokemon = favoritePokemon.filter(
                (item) => item.id !== id
            );

            setFavoritePokemon(newFavoritePokemon);
            setPokemonData(null);

            toast({
                title: "Pokemon removed from favorites",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (e) {
            toast({
                title: "There was an error removing this pokemon from your favorites",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const onHandleAddFavorite = () => {
        const favoriteExists = favoritePokemon.filter(
            (item) => item.id === pokemonData.id
        );

        try {
            if (favoriteExists.length) {
                toast({
                    title: "This pokemon is already one of your favorites",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });

                return;
            } else {
                setFavoritePokemon([
                    ...favoritePokemon,
                    {
                        id: pokemonData.id,
                        name: pokemonData.name,
                    },
                ]);
            }

            toast({
                title: "Pokemon added to favorites",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (e) {
            toast({
                title: "There was an error adding this pokemon to your favorites",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Container maxW={"container.xl"}>
            <Flex direction="column" padding="4" shadow="dark-lg">
                <ButtonGroup>
                    {isPreview && (
                        <>
                            <Button
                                colorScheme="red"
                                onClick={() => {
                                    setPokemonData(null);
                                    setIsHidden(false);
                                }}
                            >
                                Close
                            </Button>

                            <Button
                                colorScheme="green"
                                onClick={() => onHandleAddFavorite()}
                            >
                                Add to favorites
                            </Button>
                        </>
                    )}

                    {!isPreview && (
                        <Button
                            colorScheme="red"
                            onClick={() =>
                                onHandleRemoveFavorite(pokemonData.id)
                            }
                        >
                            Remove from favorites
                        </Button>
                    )}
                </ButtonGroup>

                <Flex justifyContent="center">
                    <Image
                        height={"250px"}
                        width={"250px"}
                        src={pokemonData.sprites.front_default}
                    />
                </Flex>

                <Text>
                    <b>Name:</b> {titleCase(pokemonData.name)}
                </Text>
                <Text>
                    <b>Height (m):</b> {pokemonData.height / 10}
                </Text>
                <Text>
                    <b>Weight (kg):</b> {pokemonData.weight / 10}
                </Text>

                {!isPreview && (
                    <>
                        <Text>
                            <b>Base Experience: </b>
                            {pokemonData.base_experience}
                        </Text>
                        <Text>
                            <b>Species:</b> {pokemonData.species.name}
                        </Text>
                    </>
                )}

                <Flex direction="column">
                    <Text fontWeight="bold">Moves</Text>

                    <Flex flexWrap="wrap">
                        {pokemonData.moves.map((move, i) => (
                            <Tag
                                key={i}
                                size="sm"
                                margin="1"
                                colorScheme="blue"
                            >
                                {formatTag(move.move.name)}
                            </Tag>
                        ))}
                    </Flex>
                </Flex>

                {!isPreview && (
                    <>
                        <Flex direction="column">
                            <Text fontWeight="bold">Abilities:</Text>

                            <Flex flexWrap="wrap">
                                {pokemonData.abilities.map((ability, i) => (
                                    <Tag
                                        key={i}
                                        size="sm"
                                        margin="1"
                                        colorScheme="blue"
                                    >
                                        {formatTag(ability.ability.name)}
                                    </Tag>
                                ))}
                            </Flex>
                        </Flex>

                        <Flex direction="column">
                            <Text fontWeight="bold">Forms:</Text>

                            <Flex flexWrap="wrap">
                                {pokemonData.forms.map((form, i) => (
                                    <Tag
                                        key={i}
                                        size="sm"
                                        margin="1"
                                        colorScheme="blue"
                                    >
                                        {form.name}
                                    </Tag>
                                ))}
                            </Flex>
                        </Flex>

                        <Flex direction="column">
                            <Text fontWeight="bold">Stats:</Text>
                            <Flex flexWrap="wrap">
                                {pokemonData.stats.map((stat, i) => (
                                    <Tag
                                        key={i}
                                        size="sm"
                                        margin="1"
                                        colorScheme="blue"
                                    >
                                        {stat.stat.name}: {stat.base_stat}
                                    </Tag>
                                ))}
                            </Flex>
                        </Flex>
                    </>
                )}
            </Flex>
        </Container>
    );
}
