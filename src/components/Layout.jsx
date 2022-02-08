import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "./navigation/Header";

const Layout = () => {
    return (
        <Box>
            <Header />

            <Outlet />
        </Box>
    );
};

export default Layout;
