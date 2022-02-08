import React from "react";
import { Text } from "@chakra-ui/react";

const PokeStat = ({ label, stat }) => {
    return (
        <Text>
            <b>{label}: </b> {stat}
        </Text>
    );
};

export default PokeStat;
