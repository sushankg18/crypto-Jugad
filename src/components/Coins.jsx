import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader.jsx";
import CoinCard from "./CoinCard.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import { Button, HStack, VStack, Center } from "@chakra-ui/react";

const Coins = () => {
  const [Coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const changePage = (page) => {
    setPage(page);
    setLoading(false);
  };

  const btns = new Array(110).fill(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  if (error)
    return (
      <ErrorComponent
        message={"Error while fetching Coins. Please try again Later !"}
      />
    );

  return (
    <Center>
      <VStack w={["full","70vw"]} py={'6'} gap={"10"}>
        <HStack flexWrap={"wrap"} justifyContent={"center"} gap={"10"}>
          {loading ? (
            <Loader />
          ) : (
            Coins.map((i) => (
              <CoinCard
                image={i.image}
                name={i.id}
                currentPrice={i.current_price}
                symbol={i.symbol}
              />
            ))
          )}
        </HStack>
        <HStack overflowX={"auto"} w={"full"}>
          {btns.map((item, index) => (
            <Button
              bgColor={"black"}
              color={"white"}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        </HStack>
      </VStack>
    </Center>
  );
};

export default Coins;
