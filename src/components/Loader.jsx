import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <div className="loader-div">
      <Spinner
        w={'30vh'}
        h={'30vh'}
        color="black"
        motion={{
          rotate: [0, 360],
        }}
      />
    </div>
  );
};

export default Loader;
