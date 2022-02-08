import React from "react";
import { HStack, Heading, Flex } from "@chakra-ui/react";
import StyledNavLink from "./StyledNavLink";

const Header = () => {
    return (
        <Flex
            direction={["column", "row"]}
            borderBottom="1px"
            borderBottomColor="gray.300"
            p="2rem"
        >
            <Heading marginBottom="2" marginRight="4">
                Personal Podedex
            </Heading>

            <HStack as="nav">
                <StyledNavLink linkText="Search" to="/" />

                <StyledNavLink
                    linkText="Favorite Pokemon"
                    to="favorite-pokemon"
                />
            </HStack>
        </Flex>
    );
};

export default Header;
