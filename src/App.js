import {
  Text,
  Box,
  Flex,
  Heading,
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import "./App.css";
import ColorCircle from "./components/ColorCircle";
import ToneSelector from "./components/ToneSelector";
import colorTones from "./data/colorTones";

import { useState } from "react";
import hslToHex from "./hooks/hslToHex";

function App() {
  const [tone, setTone] = useState("Jewel");

  const [pageColor, setPageColor] = useState("#fff");
  const [textColor, setTextColor] = useState("#080808");

  const [hue, setHue] = useState(0);
  const handleChange = (value) => setHue(value);
  const currentHue = hslToHex(hue, 69, 69);
  console.log(currentHue);

  const toggleDarkMode = () => {
    if (pageColor === "#fff") {
      setPageColor("#000");
      setTextColor("#fcfcfc");
    } else {
      setPageColor("#fff");
      setTextColor("#080808");
    }
  };

  return (
    <Box
      fontFamily="Josefin Sans"
      bgColor={pageColor}
      color={textColor}
      textAlign="center"
      transition="0.5s all"
      h="100vh"
    >
      <Heading
        fontFamily="Josefin Sans"
        className="app-title"
        textTransform="uppercase"
        fontWeight={300}
        fontSize="4rem"
        mb={6}
        pt={6}
        pb={5}
        borderBottom="1px solid #aaa"
        color={textColor}
      >
        Color Tones
      </Heading>
      <ToneSelector selectTone={(tone) => setTone(tone)} />
      <Flex justify="center" fontSize="1.5rem" textAlign="left" align="center">
        <Box textAlign="center" mr={16}>
          <Text fontWeight={400} fontSize="1.2rem" textDecor="underline">
            Saturation
          </Text>
          {colorTones[tone].sat[0]}% - {colorTones[tone].sat[1]}%
        </Box>
        <Box textAlign="center">
          <Text fontWeight={400} fontSize="1.2rem" textDecor="underline">
            Lightness
          </Text>
          {colorTones[tone].lig[0]}% - {colorTones[tone].lig[1]}%
        </Box>
      </Flex>
      <Box mt={2}>
        <Text fontWeight={400} fontSize="1.2rem" textDecor="underline">
          Hue
        </Text>
        <Flex w="360px" m="auto">
          <Slider
            flex="1"
            focusThumbOnChange={false}
            value={hue}
            onChange={handleChange}
            max={359}
          >
            <SliderTrack bg={currentHue}>
              <SliderFilledTrack bg={currentHue} />
            </SliderTrack>
            <SliderThumb fontSize="sm" boxSize="32px" children={hue} />
          </Slider>
        </Flex>
      </Box>
      <Flex w="full" justify="center" mt={16}>
        <Flex w="1000px" justify="space-evenly">
          <ColorCircle
            hue={hue}
            sat={colorTones[tone].sat[0]}
            lig={colorTones[tone].lig[0]}
          />
          <ColorCircle
            hue={hue}
            sat={(colorTones[tone].sat[0] + colorTones[tone].sat[1]) / 2}
            lig={(colorTones[tone].lig[0] + colorTones[tone].lig[1]) / 2}
          />
          <ColorCircle
            hue={hue}
            sat={colorTones[tone].sat[1]}
            lig={colorTones[tone].lig[1]}
          />
        </Flex>
      </Flex>
      <Box>
        <Text fontWeight={400} fontSize="1.2rem" textDecor="underline" mt={10}>
          Background
        </Text>
        <Flex
          fontSize="1.4rem"
          align="center"
          justify="center"
          fontWeight={400}
          mt={2}
        >
          Dark mode
          <Switch onChange={toggleDarkMode} size="md" ml={2} />
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
