import { Box, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import { BiSun } from "react-icons/bi";

import { useColors } from "@/constants";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const { textPrimary } = useColors();
  return (
    <Box
      display={"flex"}
      justifyContent="space-between"
      height={"6rem"}
      alignItems="center"
    >
      <Box width={"3rem"}>
        <Image
          src="/image/logo.png"
          alt="Picture of the author"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        fontSize={"2.8rem"}
        color={textPrimary}
        onClick={toggleColorMode}
        cursor="pointer"
        transition={"all .3s ease-out"}
        _hover={{
          transform: "scale(1.2)",
        }}
      >
        <BiSun />
      </Box>
    </Box>
  );
};

export default Navbar;
