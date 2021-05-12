import { Box,  Heading } from "@chakra-ui/layout";

import { HeaderNav } from "../HeaderNav";
import { SelfDrawer } from "./SelfDrawer";
export const Header = () => {
  return (
    <Box
      as="div"
      bg="teal.500"
      color="gray.50"
      pr={2}
      pt={6}
      pb={6}
      textAlign="center"
      display={{ base: "flex", md: "block" }}
      w="100%"
      // h={{ base: "20vh", md: "30vh" }}
    >
      <Heading as="h1" fontSize={{ base: "x-large", md: "xxx-large" }}>
        Welcome to My Portfolio !
      </Heading>
      
      <HeaderNav/>
      <SelfDrawer />
    </Box>
  );
};
