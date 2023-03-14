import * as React from "react";
import { Box, StyleProps } from "@chakra-ui/react";

interface IPropsBlob extends StyleProps {}

const Blob: React.FC<IPropsBlob> = ({ ...props }) => {
  return (
    <Box
      backdropFilter="blur(5px)"
      filter="auto"
      blur={"3xl"}
      borderRadius="2rem"
      opacity={".1"}
      position={"absolute"}
      height="20rem"
      width="20rem"
      {...props}
    />
  );
};

export default Blob;
