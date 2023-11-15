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
  Box,
  Button,
} from "@chakra-ui/react";
import Loader from "./Loader.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import  Chart from "./Chart.jsx";

const CoinDetails = () => {
  const [Coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [days, setDays] = useState('24hrs')
  const [charArray, setChartArray] = useState([])

  const btns = ['24h' , '7days' , '14days' , '30days' , '60days' , '200days' , '1yr' ,'max']
  const switchChartStats = (key)=>{
    
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true)
        break;

        case "7days":
        setDays("7days");
        setLoading(true)
        break;

        case "14days":
        setDays("14days");
        setLoading(true)
        break;

        case "30days":
        setDays("30days");
        setLoading(true)
        break;

        case "60days":
        setDays("60days");
        setLoading(true)
        break;

        case "200days":
        setDays("200days");
        setLoading(true)
        break;

        case "1yr":
        setDays("1yr");
        setLoading(true)
        break;
    
      default :
      setDays("24h");
      setLoading(true)
        break;
    }
  }
  const params = useParams();
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${params.id}`
        );

        const {data: Chartdata } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=inr&days=${days}`

        );
        setCoin(data);
        setChartArray(Chartdata.prices)
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id , days]);

  if (error)
    return (
      <ErrorComponent
        message={"Error while fetching Coin data. Please try again Later !"}
      />
    );
  return (
    <Container maxW={"full"} >
      {loading ? (
        <Loader />
      ) : (
        <>
          <VStack alignItems={"flex-start"} py={"0"}  w={"full"}>
            <Text alignSelf={"center"} fontSize={'small'}>
              Last Update On {Date(Coin.last_updated).split("G")[0]}
            </Text>
            <HStack w={'full'} flexDirection={['column-reverse','column-reverse','column-reverse','row']} gap={['4','4','4','20']} >
              <VStack w={"80"} px={['2','0']}>
                <Badge fontSize={"large"} margin={"4"}>
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

                <CustomBar
                  high={`₹${Coin.market_data.high_24h.inr}`}
                  low={`₹${Coin.market_data.low_24h.inr}`}
                />

                <Box w={"full"}>
                  <Item
                    title={"Max Supply:"}
                    value={Coin.market_data.max_supply}
                  />
                  <Item
                    title={"Circulating Supply:"}
                    value={Coin.market_data.circulating_supply}
                  />
                  <Item
                    title={"Market Cap:"}
                    value={`₹${Coin.market_data.market_cap.inr}`}
                  />
                  <Item
                    title={"All Time Low:"}
                    value={`₹${Coin.market_data.atl.inr}`}
                  />
                  <Item
                    title={"All Time High:"}
                    value={`₹${Coin.market_data.ath.inr}`}
                  />
                </Box>
              </VStack>
              <VStack w={'full'}>
                <Chart arr={charArray} days={days}/>
                <HStack wrap={'wrap'} p={'4'} gap={'4'}>
                  {
                  btns.map((i)=>(
                    <Button key={i} fontSize={['small','','','md']} onClick={()=>switchChartStats(i)}>{i}</Button>
                    ))
                  }
                </HStack>
              </VStack>
            </HStack>
          </VStack>
        </>
      )}
    </Container>
  );
};

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Josefin Sans"}>{title}</Text>
    <Text fontFamily={"Josefin Sans"}>{value}</Text>
  </HStack>
);
const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} colorScheme="teal" w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme="red" />
      <Text fontSize={'small'}>24Hrs Range</Text>
      <Badge children={high} colorScheme="green" />
    </HStack>
  </VStack>
);
export default CoinDetails;
