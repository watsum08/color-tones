import { Menu, Text, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { useState } from "react";
import colorTones from "../data/colorTones";

const ToneSelector = (props) => {
  const [tone, setTone] = useState("Jewel");

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <Text fontWeight={400} fontSize="1.2rem" textDecor="underline">
            Select a tone
          </Text>
          <MenuButton
            isActive={isOpen}
            as={Button}
            fontSize="2.5rem"
            fontWeight={400}
            transition="0.5s all"
            mt={3}
            mb={4}
            p={12}
            bgColor="transparent"
            outline="1px solid #888"
            _hover={{ bgColor: "#eee", outline: "1px solid #aaa" }}
            w={500}
          >
            {tone} tones
          </MenuButton>
          <MenuList fontSize="2rem" w={500} textAlign="center">
            {Object.entries(colorTones).map(([key]) => {
              return (
                <MenuItem
                  key={key}
                  onClick={() => {
                    props.selectTone(key);
                    setTone(key);
                  }}
                >
                  {key} tones
                </MenuItem>
              );
            })}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default ToneSelector;
