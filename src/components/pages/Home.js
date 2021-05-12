import { memo } from "react";
import { Box } from "@chakra-ui/react";
import { HomeMessage } from "../organisms/HomeMessage";
import { HomeButton } from "../organisms/HomeButton";

export const Home = memo(() => {
  return (
    <Box
      h={{ base: "90vh", md: "70vh" }}
      as="div"
      pt={16}
      bgGradient="linear(to-r,green.200,teal.200)"
      color="white"
      textAlign="center"

    >
      <HomeMessage title="SORACHI OKADA" text="Thanks for watching!" />

      <HomeButton   />
    </Box>
  );
});
