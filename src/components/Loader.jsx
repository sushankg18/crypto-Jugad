import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <div className="loader-div">
      <Spinner
        w={'20vh'}
        height={'20vh'}
        borderRadius={'50%'}
        color="#000"
        motion={{
          rotate: [0, 360],
        }}
      />
    </div>
  );
};

export default Loader;
