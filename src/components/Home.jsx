import {
  Box,
  HStack,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import banner from "../assets/Banner.webp";
const Home = () => {
  return (
    <Box w={"full"} height={"88vh"}>
      <HStack
        height={"80%"}
        flexDirection={['column-reverse','row']}
      >
        <Flex h={'full'} w={"full"} justifyContent={"center"} alignItems={"center"}>
          <Heading fontFamily={'Josefin Sans'} fontSize={['large','xxx-large']}>BUY TRADE ON CRYPTOJUGAD</Heading>
        </Flex>
        <Box  h={'full'}>
          <Image w={"xl"} src={banner} />
        </Box>
      </HStack>
    </Box>
  );
};

export default Home;
