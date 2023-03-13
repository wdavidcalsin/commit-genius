import React from "react";
import { Box, Text, useToast } from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";
import { useSnapshot } from "valtio";

import { useColors } from "@/constants";
import { storeMessageEntryCommit } from "@/store";
import { copyText } from "@/utils";

const OutputMessage = () => {
  const { textPrimary, bgPrimary } = useColors();

  const toastCopy = useToast();

  const snap = useSnapshot(storeMessageEntryCommit);

  const handleCopyText = () => {
    if (!snap.outputMessageCommit) return;

    copyText(snap.outputMessageCommit);

    toastCopy({
      title: "Copy commit.",
      status: "info",
      position: "top",
      duration: 2000,
      isClosable: true,
      icon: <FaCopy />,
    });
  };

  return (
    <>
      {snap.outputMessageCommit && (
        <Box
          display={"grid"}
          placeItems="center"
          marginTop={"2rem"}
          bgColor={"rgba(0,0,0,.1)"}
          padding="1.5rem"
          borderRadius={".5rem"}
          position="relative"
        >
          <Box
            color={textPrimary}
            fontSize="1.1rem"
            position={"absolute"}
            top="-.5rem"
            right={"-.5rem"}
            bgColor={bgPrimary}
            padding={".3rem"}
            borderRadius=".2rem"
            transition={"all .5s ease-out"}
            cursor="pointer"
            _hover={{
              boxShadow: "outline",
              transform: "scale(1.2)",
            }}
            onClick={handleCopyText}
          >
            <FaCopy />
          </Box>
          <Text>{snap.outputMessageCommit}</Text>
        </Box>
      )}
    </>
  );
};

export default OutputMessage;
