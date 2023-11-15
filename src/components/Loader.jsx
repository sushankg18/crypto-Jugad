import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <div className="loader-div">
      <Spinner
        w={['15vh','30vh']}
        h={['15vh','30vh']}
        color="#37C38B"
        motion={{
          rotate: [0, 360],
        }}
      />
    </div>
  );
};

export default Loader;
