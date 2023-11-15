import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/CryptoJugad.png";

const Header = () => {
  const hoverEffect = {
    color: "white",
    transition: ".2s",
    border: "1px solid white",
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
      bgColor={"#000"}
      textAlign={"start"}
    >
      <Link to={"/"}>
        <Image src={Logo} w={"48"} borderRadius={'5px'} />
      </Link>
      <HStack gap={['','','8',"20"]} fontWeight={"bold"} display={["none", "flex"]}>
        <Link to={"/"}>
          <Text
            _hover={hoverEffect}
            fontSize={["none", "", "1rem", "1.1rem"]}
            color={"#fff"}
            borderRadius={'10px'}
            letterSpacing={"1px"}
            py={"2"}
            px={'4'}
          >
            Home
          </Text>
        </Link>
        <Link to={"/coins"}>
          <Text
            _hover={hoverEffect}
            fontSize={["none", "", "1rem", "1.1rem"]}
            color={"fff"}
            px={'4'}
            borderRadius={'10px'}
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
            borderRadius={'10px'}
            color={"fff"}
            py={"2"}
            objectFit={'contain'}
            px={'4'}
            letterSpacing={"1px"}
          >
            Exchanges
          </Text>
        </Link>
       
      </HStack>
    </HStack>
  );
};

export default Header;
