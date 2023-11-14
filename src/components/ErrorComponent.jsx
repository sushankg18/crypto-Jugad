import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <Box
      width={"100vw"}
      height={"85vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading>{message}</Heading>
    </Box>
  );
};

export default ErrorComponent;
