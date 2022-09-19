import { Box, Text, Flex } from "@chakra-ui/react";
import hslToHex from "../hooks/hslToHex";

const ColorCircle = (props) => {
  const hexCode = hslToHex(props.hue, props.sat, props.lig);

  return (
    <Box textAlign="center">
      <Flex fontSize="1.6rem" align="center">
        <Text fontWeight={400} color="#666" fontSize="0.8rem">RGB :</Text>&nbsp;{hexCode}
      </Flex>
      <Flex fontSize="1.6rem" align="center">
        <Text fontWeight={400} color="#666" fontSize="0.8rem">HSL :</Text>&nbsp;hsl({props.hue}, {props.sat}%, {props.lig}%)
      </Flex>
      <Box
        m="auto"
        mt={8}
        w="200px"
        h="200px"
        borderRadius="100px"
        bgColor={hexCode}
      ></Box>
    </Box>
  );
};

export default ColorCircle;
