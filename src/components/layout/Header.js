import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { BsCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <Box pos="fixed" bg="blue" w="100%" zIndex="5" p={3}>
      <Flex opacity={0.5} fontSize="0.8rem" gap=".5rem">
        <BsCircleFill color="#fff" />
        <BsCircleFill color="#fff" />
        <BsCircleFill color="#fff" />
      </Flex>
    </Box>
  );
};

export default Header;
