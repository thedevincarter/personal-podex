import React from "react";
import { Tag } from "@chakra-ui/react";

const StyledTag = ({ text }) => {
    return (
        <Tag size="sm" margin="1" colorScheme="blue">
            {text}
        </Tag>
    );
};

export default StyledTag;
