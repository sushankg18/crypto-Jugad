import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader.jsx";
import ExchangeCard from "./ExchangeCard.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import { Box, Center, HStack, VStack } from "@chakra-ui/react";
const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=200"
        );
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (error)
    return (
      <ErrorComponent
        message={"Error while fetching Exchanges. Please try again Later"}
      />
    );

  return (
    <Center>
      <VStack w={["full", "70vw"]} py={"6"} gap={"10"}>
        <HStack HStack flexWrap={"wrap"} justifyContent={"center"} gap={"10"}>
          {loading ? (
            <Loader />
          ) : (
            exchanges.map((i) => (
              <ExchangeCard
                image={i.image}
                name={i.id}
                market_cap_rank={i.market_cap_rank}
              />
            ))
          )}
        </HStack>
      </VStack>
    </Center>
  );
};

export default Exchanges;
