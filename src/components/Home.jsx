import {
  Box,
  HStack,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import banner from "../assets/Banner.webp";
const Home = () => {
  return (
    <Box w={"full"} height={['fit-content',"88vh"]} py={'8'}>
      <HStack flexDirection={["column-reverse", "row"]}>
        <Flex
          h={"full"}
          w={"full"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={'column'}
          px={'8'}
          gap={'10'}
        >
          <Heading
            fontFamily={"Josefin Sans"}
            fontSize={["x-large", "xxx-large"]}
          >
            Discover Cryptocurrency Insights with CryptoJugad
          </Heading>
          <Text mt={4} fontSize={['md',"xl"]} fontFamily={"Josefin Sans"}>
            Stay informed about the latest cryptocurrency trends, exchange
            rates, and market fluctuations. CryptoJugad provides a comprehensive
            platform to track the performance of various coins, explore
            exchanges, and analyze market data.
          </Text>
        </Flex>
        <Box
          h={"fit-content"}
          py={"10"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image w={"70rem"} src={banner} />
        </Box>
      </HStack>
    </Box>
  );
};

export default Home;
