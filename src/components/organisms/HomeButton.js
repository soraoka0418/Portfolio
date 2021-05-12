import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box } from "@chakra-ui/layout";
import { Slide } from "@chakra-ui/transition";
import { SelfIntroduction } from "./SelfIntroduction";

export const HomeButton = () => {
    const { isOpen, onToggle } = useDisclosure();
    return(
        <Box  m="auto" mt={12}>
        <Button
          fontSize={{ base: "xl", md: "3xl" }}
          w={{ base: "70%", md: "50%" }}
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
    )
}