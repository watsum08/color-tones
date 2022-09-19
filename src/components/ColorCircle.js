import { Box, Text, Flex } from "@chakra-ui/react";

function hslToHex(h, s, l) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

const ColorCircle = (props) => {
  const hexCode = hslToHex(props.hue, props.sat, props.lig);

  return (
    <Box textAlign="center">
      <Flex fontSize="1.5rem" align="center">
        <Text fontWeight={800} fontSize="1rem">RGB :</Text>&nbsp;{hexCode}
      </Flex>
      <Flex fontSize="1.5rem" align="center">
        <Text fontWeight={800} fontSize="1rem">HSL: </Text>&nbsp;hsl({props.hue}, {props.sat}%, {props.lig}%)
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
