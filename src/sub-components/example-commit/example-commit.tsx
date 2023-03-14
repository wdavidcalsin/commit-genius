import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { BsPlus } from "react-icons/bs";

const ExampleCommit = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={["column", "row"]}
      alignItems="center"
      gap={".3rem"}
      fontSize=".7rem"
    >
      <Box display={"grid"} placeItems="center">
        <Text>Fix</Text>
        <Text fontStyle={"italic"}>Infinitive Verb</Text>
      </Box>
      <BsPlus />
      <Box display={"grid"} placeItems="center">
        <Text>bug</Text>
        <Text fontStyle={"italic"}>Object</Text>
      </Box>
      <BsPlus />
      <Box display={"grid"} placeItems="center">
        <Text>in login authentication</Text>
        <Text fontStyle={"italic"}>Description</Text>
      </Box>
    </Box>
  );
};

export default ExampleCommit;
