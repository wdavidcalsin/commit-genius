import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useSnapshot } from "valtio";

import { EntryForm } from "../entry-form";
import { OutputMessage } from "../output-message";

import { storeMessageEntryCommit } from "@/store";

const ContentHome = () => {
  const snap = useSnapshot(storeMessageEntryCommit);

  return (
    <Box>
      <Box>
        <Heading textAlign={"center"}>Commit Genius</Heading>
        <EntryForm />
        <OutputMessage />
      </Box>
    </Box>
  );
};

export default ContentHome;
