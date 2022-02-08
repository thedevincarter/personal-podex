import React from "react";
import { Box } from "@chakra-ui/react";
import { titleCase } from "../../utils/utils";

const StyledListItem = ({ onClick, title }) => {
    return (
        <Box
            onClick={onClick}
            width="full"
            backgroundColor="gray.200"
            padding="4"
            marginBottom="1"
            borderRadius="4"
            _hover={{
                backgroundColor: "gray.400",
                cursor: "pointer",
            }}
        >
            {titleCase(title)}
        </Box>
    );
};

export default StyledListItem;
