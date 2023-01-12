import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Box color="#000" bg="gray.200" position="relative">
      <Box minH="100vh" overflowX="hidden">
        <Header />
        <Box minW="fit-content" pt={90} minH="100vh" px={50}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
