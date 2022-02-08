import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const TagList = ({ label, children }) => {
    return (
        <Flex direction="column">
            <Text fontWeight="bold">{label}:</Text>

            <Flex flexWrap="wrap">{children}</Flex>
        </Flex>
    );
};

export default TagList;
