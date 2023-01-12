import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

const FlexContainer = ({ label, data }) => {
  return (
    <Flex justifyContent="space-between" gap="5rem">
      <Heading fontSize="12px">{label}</Heading>
      <Text fontSize="12px">{data}</Text>
    </Flex>
  );
};

export default FlexContainer;
