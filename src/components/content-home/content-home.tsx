import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { useSnapshot } from "valtio";

import { EntryForm } from "../entry-form";
import { OutputMessage } from "../output-message";

import { storeMessageEntryCommit } from "@/store";
import { Blob, CustomPopover, ExampleCommit } from "@/sub-components";

const ContentHome = () => {
  const snap = useSnapshot(storeMessageEntryCommit);

  return (
    <Box>
      <Box>
        <Stack spacing={"1rem"}>
          <Heading
            textAlign={"center"}
            fontWeight="extrabold"
            fontSize={["2.5rem", "3.5rem", "5rem"]}
            display={"flex"}
            justifyContent="center"
            gap={"1rem"}
            position="relative"
            bgGradient="linear(to-b, #ffffff, #9D9FA2)"
            bgClip={"text"}
          >
            Commit
            <Box
              position="relative"
              bgGradient="linear(to-b, #CC9CFB,  #AF86D7, #742BB2)"
              bgClip={"text"}
            >
              Genius
              <Blob
                position={"absolute"}
                right={"0"}
                top="-130%"
                bgColor={"#742BB2"}
              />
            </Box>
          </Heading>
          <Text fontSize={"1.1rem"} textAlign="center" color={"#9D9FA2"}>
            A commit generator based on the Linux repository commits, for
            effective Git project commit messages with good practices.
          </Text>
          <Box
            display={"flex"}
            justifyContent="center"
            gap={"1rem"}
            alignItems="center"
          >
            Example
            <CustomPopover>
              <ExampleCommit />
            </CustomPopover>
          </Box>
        </Stack>
        <EntryForm />
        <OutputMessage />
      </Box>
    </Box>
  );
};

export default ContentHome;
