import { Box, Flex, Heading, Link } from "@chakra-ui/layout"

export const Header = () => {
    return(
        <Flex as = "nav" bg = "teal.500" color= "gray.50" align ="center" justify= "space-between" padding ={{base:3,md:5} }>
            <Heading as = "h1" fontSize={{base:"md" , md:"lg"}} pr = {5}>Sorachi-portfolio</Heading>

            <Flex align= "center" flexGrow={2} fontSize="sm">
                <Box pr = {4} >
                    <Link>home</Link>
                </Box>
                <Box pr = {4}>
                    <Link>About</Link>
                </Box>
                <Box pr = {4}>
                    <Link>Skills</Link>
                </Box>
                <Box pr = {4}>
                    <Link>Contact</Link>
                </Box>
            </Flex>
        </Flex>

    )
}