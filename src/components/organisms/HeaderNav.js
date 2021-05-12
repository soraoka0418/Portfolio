import { Flex } from "@chakra-ui/layout"
import { HeaderLink } from "../atoms/HeaderLink"

export const HeaderNav = () => {
    return(
        <Flex
        as="nav"
        justify="center"
        padding={{ base: 3, md: 5 }}
        mt={{ base: "3", md: "4" }}
        fontSize="2xl"
        display={{ base: "none", md: "flex" }}
        _hover={{ cursor: "pointer" }}
      >
        <HeaderLink LinkName="home" to="/" />

        <HeaderLink LinkName="Skill" to="/skill" />

        <HeaderLink LinkName="Contact" to="/Contact" />
      </Flex>
    )
    
}