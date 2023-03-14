import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Box paddingY={"7rem"} color="#6D7074">
      <Text>
        Built with <Link href="https://nextjs.org/">Next.js</Link> ,{" "}
        <Link href="https://chakra-ui.com/">ChakraUI</Link> and{" "}
        <Link href="http://vercel.com/">Vercel</Link>
      </Text>
    </Box>
  );
};

export default Footer;
