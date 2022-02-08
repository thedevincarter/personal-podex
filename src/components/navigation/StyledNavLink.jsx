import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
const StyledNavLink = ({ linkText, to }) => {
    return (
        <Link
            as={NavLink}
            padding="2"
            borderRadius="4"
            _hover={{ backgroundColor: "gray.100" }}
            style={({ isActive }) => {
                return {
                    background: isActive ? "lightblue" : null,
                };
            }}
            to={to}
        >
            {linkText}
        </Link>
    );
};

export default StyledNavLink;
