import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons"

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return(
  <HStack>
    <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode} />

    {/* <Text whiteSpace="nowrap"></Text> */}
  </HStack>)
};

export default ColorModeSwitch;
