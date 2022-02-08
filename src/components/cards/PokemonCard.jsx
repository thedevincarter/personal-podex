import React from "react";
import {
    Image,
    Button,
    ButtonGroup,
    Container,
    Flex,
    useToast,
} from "@chakra-ui/react";
import PokeStat from "../text/PokeStat";
import TagList from "../lists/TagList";
import StyledTag from "../text/StyledTag";
import { titleCase, formatTag, formatNumber } from "../../utils/utils";

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

                <PokeStat label="Name" stat={titleCase(pokemonData.name)} />

                <PokeStat
                    label="Height (m)"
                    stat={formatNumber(pokemonData.height)}
                />

                <PokeStat
                    label="Weight (kg)"
                    stat={formatNumber(pokemonData.weight)}
                />

                {!isPreview && (
                    <>
                        <PokeStat
                            label="Base Experience"
                            stat={pokemonData.base_experience}
                        />

                        <PokeStat
                            label="Species"
                            stat={titleCase(pokemonData.species.name)}
                        />
                    </>
                )}

                <TagList label="Moves">
                    {pokemonData.moves.map((move, i) => (
                        <StyledTag key={i} text={formatTag(move.move.name)} />
                    ))}
                </TagList>

                {!isPreview && (
                    <>
                        <TagList label="Abilities">
                            {pokemonData.abilities.map((ability, i) => (
                                <StyledTag
                                    key={i}
                                    text={formatTag(ability.ability.name)}
                                />
                            ))}
                        </TagList>

                        <TagList label="Forms">
                            {pokemonData.forms.map((form, i) => (
                                <StyledTag key={i} text={form.name} />
                            ))}
                        </TagList>

                        <TagList label="Stats">
                            {pokemonData.stats.map((stat, i) => (
                                <StyledTag
                                    key={i}
                                    text={`${formatTag(stat.stat.name)}: ${
                                        stat.base_stat
                                    }`}
                                />
                            ))}
                        </TagList>

                        <TagList label="Types">
                            {pokemonData.types.map((type, i) => (
                                <StyledTag
                                    key={i}
                                    text={formatTag(type.type.name)}
                                />
                            ))}
                        </TagList>
                    </>
                )}
            </Flex>
        </Container>
    );
}
