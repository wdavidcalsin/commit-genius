import React from "react";
import { Box, Container } from "@chakra-ui/react";

import { Footer } from "../footer";
import { Navbar } from "../navbar";

import { useColors } from "@/constants";

interface IPropsLayout {
  children: React.ReactNode;
}

const Layout: React.FC<IPropsLayout> = ({ children }) => {
  const { bgPrimary } = useColors();
  return (
    <Box width={"100%"} minHeight={"100vh"} bgColor={bgPrimary}>
      <Container maxW="container.sm">
        {/* <Navbar /> */}
        <Box paddingTop={"5rem"}>{children}</Box>
        <Footer />
      </Container>
    </Box>
  );
};

export default Layout;
