import { Box, Heading, Text } from "@chakra-ui/layout"

export const HomeMessage = (props) => {
    return(
        <Box  w={{ base: "100%" }} >
        <Heading as="h1" size="2xl">
          {props.title}
        </Heading>
        <Text mt={6} fontSize="3xl">
          {props.text}
        </Text>
      </Box>
    )
}