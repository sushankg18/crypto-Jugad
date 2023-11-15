import React, { useState, useEffect } from "react";
import {
  Container,
  VStack,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Progress,
  HStack,
} from "@chakra-ui/react";
import Loader from "./Loader.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
const CoinDetails = () => {
  const [Coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = useParams();
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${params.id}`
        );
        console.log(data);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, []);

  if (error)
    return (
      <ErrorComponent
        message={"Error while fetching Coin data. Please try again Later !"}
      />
    );
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <VStack alignItems={"flex-start"} py={"20"}>
            <Text alignSelf={"center"}>
              Last Update On {Date(Coin.last_updated).split("G")[0]}
            </Text>
             
            <Badge fontSize={'large'} margin={'4'}>
              {`#${Coin.market_cap_rank}`}
            </Badge>
            <Image
              src={Coin.image.large}
              w={"16"}
              h={"16"}
              objectFit={"contain"}
            />

            <Stat>
              <StatLabel>{Coin.name}</StatLabel>
              <StatNumber>₹{Coin.market_data.current_price.inr}</StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    Coin.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {Coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>

            <CustomBar high={`₹${Coin.market_data.high_24h.inr}`} low={`₹${Coin.market_data.low_24h.inr}`}  border={'2px solid blue'} />
          </VStack>
        </>
      )}
    </Container>
  );
};

const CustomBar = ({high,low}) =>(
  <VStack>
    <Progress value={50} colorScheme="teal" w={'full'} />
    <HStack>
      <Badge children={low} colorScheme="red"/>
      <Text>24Hrs Range</Text>
      <Badge children={high} colorScheme="green"/>
    </HStack>
  </VStack>
);
export default CoinDetails;
