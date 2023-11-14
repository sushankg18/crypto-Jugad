import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo2.png";

const Header = () => {
  const hoverEffect = {
    color: "white",
    borderRadius: "3px",
    transition: ".2s",
    borderTop: "2px solid white",
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
      <Link to={"/"}>
        <Image src={Logo} w={"56"} />
      </Link>
      <HStack gap={['','','8',"20"]} fontWeight={"bold"} display={["none", "flex"]}>
        <Link to={"/"}>
          <Text
            _hover={hoverEffect}
            fontSize={["none", "", "1rem", "1.1rem"]}
            color={"black"}
            letterSpacing={"1px"}
            py={"2"}
          >
            Home
          </Text>
        </Link>
        <Link to={"/coins"}>
          <Text
            _hover={hoverEffect}
            fontSize={["none", "", "1rem", "1.1rem"]}
            color={"black"}
            py={"2"}
            letterSpacing={"1px"}
          >
            Coins
          </Text>
        </Link>
        <Link to={"/exchanges"}>
          <Text
            _hover={hoverEffect}
            fontSize={["none", "", "1rem", "1.1rem"]}
            color={"black"}
            py={"2"}
            letterSpacing={"1px"}
          >
            Exchanges
          </Text>
        </Link>
        <Link to={"/coin/:id"}>
          <Text
            _hover={hoverEffect}
            fontSize={["none", "", "1rem", "1.1rem"]}
            color={"black"}
            py={"2"}
            letterSpacing={"1px"}
          >
            Coins Details
          </Text>
        </Link>
      </HStack>
    </HStack>
  );
};

export default Header;
