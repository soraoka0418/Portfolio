import { Image } from "@chakra-ui/image";
import { Box, Heading, Text } from "@chakra-ui/layout";
export const Card = (props) => {
  
  return (
    <Box _hover={{transition:"0.5s",bg:"green.300",color:"white"}}  borderColor="gray.500" borderWidth="1px" borderRadius="lg" textAlign="center" pt="3" mb={{base:"3",md:"8"}} >
      <Heading as="h3" pb="6" borderBottom="1px" borderColor="teal.500" >{props.title}</Heading>
      <Box w="100%"  overflow="hidden" m="auto" >
        <Image  src={props.image}  />
      </Box>
      <Text borderTop="1px" borderColor="teal.500"  fontSize="xl" pt="3" pb="3" lineHeight="2" >{props.text}</Text>
    </Box>
  );
};
