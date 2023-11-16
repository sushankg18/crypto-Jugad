import React, { useState } from "react";
import { Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/New Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaCoins, FaExchangeAlt } from "react-icons/fa";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const Header = () => {
  const hoverEffect = {
    borderBottom: "1px solid white",
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <HStack
        h={"16"}
        w={"full"}
        px={["4", "10"]}
        py={"10"}
        fontSize={"large"}
        color={"white"}
        justifyContent={"space-between"}
        bgColor={"#000"}
        textAlign={"start"}
      >
        <Link to={"/"}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <Image
              className="logo-img"
              src={Logo}
              w={["40", "48"]}
              filter={"grayscale(1)"}
              borderRadius={"5px"}
            />
            <Text
              _hover={{ color: "white" }}
              fontSize={["none", ".8rem", "1rem", "1.1rem"]}
              color={"#fff"}
              fontWeight={"semibold"}
              letterSpacing={"1px"}
              py={"2"}
              px={"4"}
              position="absolute"
              top="0"
              right="0"
            >
              <sup
                style={{
                  fontSize: "0.6rem",
                  marginLeft: "10px",
                  position: "absolute",
                  marginTop: "8px",
                  fontFamily: "Josefin Sans",
                }}
              >
                IND
              </sup>
            </Text>
          </div>
        </Link>

        <Button
          color={"black"}
          display={["block", "block","none"]}
          onClick={handleDrawerOpen}
        >
          <GiHamburgerMenu />
        </Button>
        <HStack
          gap={["", "", "8", "20"]}
          fontWeight={"bold"}
          display={["none", "none", "flex", "flex"]}
        >
          <Link to={"/"}>
            <Flex alignItems={"center"}>
              <FaHome />

              <Text
                _hover={hoverEffect}
                fontSize={["none", ".8rem", "1rem", "1.1rem"]}
                color={"#fff"}
                fontWeight={"semibold"}
                letterSpacing={"1px"}
                py={"2"}
                px={"4"}
              >
                Home
              </Text>
            </Flex>
          </Link>

          <Link to={"/coins"}>
            <Flex alignItems={"center"}>
              <FaCoins />
              <Text
                _hover={hoverEffect}
                fontSize={["none", ".8rem", "1rem", "1.1rem"]}
                color={"fff"}
                px={"4"}
                py={"2"}
                fontWeight={"semibold"}
                letterSpacing={"1px"}
              >
                Coins
              </Text>
            </Flex>
          </Link>

          <Link to={"/exchanges"}>
            <Flex alignItems={'center'}>
              <FaExchangeAlt />
              <Text
                _hover={hoverEffect}
                fontWeight={"semibold"}
                fontSize={["none", ".8rem", "1rem", "1.1rem"]}
                color={"fff"}
                py={"2"}
                objectFit={"contain"}
                px={"4"}
                letterSpacing={"1px"}
              >
                Exchanges
              </Text>
            </Flex>
          </Link>
        </HStack>
      </HStack>

      {/* Drawer for smaller screens */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent
          bg={"black"}
          color={"white"}
          height={"fit-content"}
          borderRadius={"10px"}
          marginTop={"6"}
          mr={"4"}
        >
          <DrawerCloseButton />
          <DrawerHeader alignSelf={"center"}>Menu</DrawerHeader>
          <DrawerBody>
            <Link to={"/"}>
              <Flex alignItems={"center"} gap={"4"}>
                <FaHome />
                <Text
                  fontSize="1rem"
                  color="white"
                  fontWeight="semibold"
                  letterSpacing="1px"
                  py="2"
                >
                  Home
                </Text>
              </Flex>
            </Link>
            <Link to={"/coins"}>
              <Flex alignItems={"center"} gap={"4"}>
                <FaCoins />
                <Text
                  fontSize="1rem"
                  color="white"
                  fontWeight="semibold"
                  letterSpacing="1px"
                  py="2"
                >
                  Coins
                </Text>
              </Flex>
            </Link>
            <Link to={"/exchanges"}>
              <Flex alignItems={"center"} gap={"4"}>
                <FaExchangeAlt />
                <Text
                  fontSize="1rem"
                  color="white"
                  fontWeight="semibold"
                  letterSpacing="1px"
                  py="2"
                >
                  Exchanges
                </Text>
              </Flex>
            </Link>
          </DrawerBody>
          <DrawerFooter>
            {/* Add any additional footer content here */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
