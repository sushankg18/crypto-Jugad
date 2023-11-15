import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, image, currentPrice, symbol }) => {
  return (
    <Link to={`/coin/${id}`} target="_blank" rel="noreferrer">
      <VStack
        bgColor={"whitesmoke"}
        borderRadius={"8"}
        p={"4"}
        width={"40"}
        justifyContent={"space-evenly"}
        shadow={"lg"}
        transition={"all .2s"}
        _hover={{
          transform: "scale(1.1)",
        }}
      >
        <Image src={image} w={"10"} borderRadius={"50%"} />
        <Text fontWeight={"semibold"}>{symbol}</Text>
        <Text fontWeight={"bold"} textAlign={"center"} noOfLines={"1"}>
          {name}
        </Text>
        <Text fontWeight={"semibold"}>
          {currentPrice ? `₹${currentPrice}` : "NA"}
        </Text>
      </VStack>
    </Link>
  );
};

export default CoinCard;
