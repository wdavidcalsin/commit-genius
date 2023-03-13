import { useColorModeValue } from "@chakra-ui/react";

export const useColors = () => {
  const bgPrimary = useColorModeValue("#DDF4FF", "#22272E");
  const bgSecondary = useColorModeValue("#FFFFFF", "#3B3436");
  const textPrimary = useColorModeValue("#24292F", "#ADBAC7");
  const txtSecondary = useColorModeValue("#24292F", "#539BF5");
  const customPrimary = useColorModeValue("#312E81", "#312E81");
  const customSecondary = useColorModeValue("#D8D8D9", "#3F3F46");

  return {
    bgPrimary,
    bgSecondary,
    textPrimary,
    txtSecondary,
    customPrimary,
    customSecondary,
  };
};
