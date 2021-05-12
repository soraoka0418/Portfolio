import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
export const Header = () => {
  const LinkStyle = {
    fontSize: "32px",
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      as="div"
      bg="teal.500"
      color="gray.50"
      padding="8"
      textAlign="center"
      display={{ base: "flex", md: "block" }}
      w="100%"
      h={{ base: "20vh", md: "30vh" }}
    >
      <Heading as="h1" fontSize={{ base: "x-large", md: "xxx-large" }}>
        Welcome to My Portfolio !
      </Heading>
      <Flex
        as="nav"
        justify="center"
        padding={{ base: 3, md: 5 }}
        mt={{ base: "3", md: "4" }}
        fontSize="2xl"
        display={{ base: "none", md: "flex" }}
        _hover={{ cursor: "pointer" }}
      >
        <Box pl={8}>
          <Link to="/" style={LinkStyle}>
            home
          </Link>
        </Box>

        <Box pl={8}>
          <Link to="/skill" style={LinkStyle}>
            Skills
          </Link>
        </Box>
        <Box pl={8}>
          <Link to="/Contact" style={LinkStyle}>
            Contact
          </Link>
        </Box>
      </Flex>
      <IconButton
        ml="auto"
        area-aria-label="メニューボタン"
        icon={<HamburgerIcon />}
        size="md"
        variant="unstyled"
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
      />
      <Drawer placement="left" isOpen={isOpen} onClose={onClose} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg={"gray.100"}>
              <Link to="/">
                <Button p="16" w="100%">
                  Home
                </Button>
              </Link>
              <Link to="/skill">
                <Button p="16" w="100%">
                  Skills
                </Button>
              </Link>
              <Link to="/Contact">
                <Button p="16" w="100%">
                  Contact
                </Button>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};
