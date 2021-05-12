import { memo } from "react";
import {
  Box,
  Button,
  Heading,
  Slide,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { SelfIntroduction } from "../organisms/SelfIntroduction";
export const Home = memo(() => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      h={{ base: "80vh", md: "70vh" }}
      as="div"
      display={{ base: "block" }}
      pt={{ base: "16" }}
      bgGradient="linear(to-r,green.200,teal.200)"
    >
      <Box color="white" w={{ base: "100%" }} textAlign="center">
        <Heading as="h1" size="2xl">
          SORACHI OKADA
        </Heading>
        <Text mt="6" fontSize="3xl">
          Thanks for watching!
        </Text>
      </Box>

      <Box
        w={{ base: "80%", md: "50%" }}
        m="auto"
        mt={{ base: "12" }}
        textAlign="center"
      >
        <Button
          color="white"
          fontSize={{ base: "xl", md: "3xl" }}
          w="70%"
          p="9"
          bg="teal.300"
          onClick={onToggle}
        >
          Self-Introduction!
        </Button>

        <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
          <Box
            p="40px"
            color="white"
            fontSize="xl"
            bg="teal.400"
            rounded="md"
            shadow="md"
          >
            <SelfIntroduction />
          </Box>
        </Slide>
      </Box>
    </Box>
  );
});
