import { Image, Text, VStack } from "@chakra-ui/react";
import { Scale } from "chart.js";
import React from "react";

const ExchangeCard = ({ name, image, market_cap_rank }) => {
  return (
    <VStack
      bgColor={"whitesmoke"}
      borderRadius={"8"}
      p={"4"}
      width={"40"}
      justifyContent={"space-evenly"}
      shadow={'lg'}
      transition={'all .2s'}
      _hover={{
        transform : 'scale(1.1)'
      }}
    >
      <Image src={image} w={"10"} borderRadius={"50%"} />
      <Text fontWeight={"semibold"}>{market_cap_rank}</Text>
      <Text fontWeight={"bold"} textAlign={"center"} noOfLines={"1"}>
        {name}
      </Text>
    </VStack>
  );
};

export default ExchangeCard;
