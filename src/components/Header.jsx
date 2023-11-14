import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo2.png";
import { hover } from "@testing-library/user-event/dist/hover";

const Header = () => {
  const hoverEffect = {
    bgColor: "whitesmoke",
    color: "black",
    borderRadius: "10px",
    transition: ".2s",
  };
  return (
    <HStack
      h={"16"}
      w={"full"}
      px={"10"}
      py={"10"}
      fontSize={"large"}
      color={"white"}
      justifyContent={"space-between"}
      bgColor={"#37C38B"}
      textAlign={"start"}
    >
      <Link to={'/'}>
        <Image src={Logo} w={"56"} />
      </Link>
      <HStack gap={"12"} fontWeight={"bold"}>
        <Link to={"/"}>
          <Text _hover={hoverEffect} py={"2"} px={"4"}>
            Home
          </Text>
        </Link>
        <Link to={"/coins"}>
          <Text _hover={hoverEffect} py={"2"} px={"4"}>
            Coins
          </Text>
        </Link>
        <Link to={"/exchanges"}>
          <Text _hover={hoverEffect} py={"2"} px={"4"}>
            Exchanges
          </Text>
        </Link>
        <Link to={"/coin/:id"}>
          <Text _hover={hoverEffect} py={"2"} px={"4"}>
            Coins Details
          </Text>
        </Link>
      </HStack>
    </HStack>
  );
};

export default Header;
