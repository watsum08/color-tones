import { Box, Flex, Heading } from "@chakra-ui/react";
import "./App.css";
import ColorCircle from "./components/ColorCircle";
import colorTones from "./data/colorTones";

function App() {
  const tone = "Jewel";

  return (
    <Box fontFamily="Josefin Sans" bgColor="#eee" textAlign="center">
      <Heading fontFamily="Josefin Sans" className="app-title" textTransform="uppercase" fontWeight={300}>
        Color Tones
      </Heading>
      <Box mt={20} fontSize="3rem" fontWeight={400}>{tone} tones</Box>
      <Flex w="full" justify="center" mt={20}>
        <Flex w="1000px" justify="space-evenly">
          <ColorCircle
            hue={0}
            sat={colorTones[tone].sat[0]}
            lig={colorTones[tone].lig[0]}
          />
          <ColorCircle
            hue={0}
            sat={(colorTones[tone].sat[0] + colorTones[tone].sat[1]) / 2}
            lig={(colorTones[tone].lig[0] + colorTones[tone].lig[1]) / 2}
          />
          <ColorCircle
            hue={0}
            sat={colorTones[tone].sat[1]}
            lig={colorTones[tone].lig[1]}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
