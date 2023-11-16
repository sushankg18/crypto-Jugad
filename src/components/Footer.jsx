import { VStack, Box, Avatar, Text, HStack, Flex } from "@chakra-ui/react";
import React from "react";
import photo from "../assets/Me.jpg";

const Footer = () => {
  return (
    <Box
      w={"full"}
      p={"4"}
      fontFamily={"Josefin Sans"}
      h={"fit-content"}
      bgColor={"black"}
      color={"white"}
    >
      <VStack>
        <Avatar w={"16"} h={"16"} src={photo} />
        <Text>SUSHANK GAUTAM</Text>
      </VStack>
      <Flex
        flexDirection={['column-reverse','column-reverse','column-reverse','row']}
        justifyContent={"space-between"}
        gap={'1'}
      >
        <Text fontSize={["sm","md"]} textAlign={'center'}>
          Cryptocurrency data provided by ©CoinGecko
        </Text>
        <HStack justifyContent={'center'} >
          <Text>Founder : </Text>
          <a href="https://github.com/sushankg18" target="_blank">
            Github |
          </a>
          <a href="https://dev.to/sushankg18" target="_blank">
            DevCommunity |
          </a>
          <a href="https://twitter.com/sushank_xo" target="_blank">
            Twitter
          </a>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
