import { Box, Heading, List, Text } from "@chakra-ui/layout";
import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { EmailIcon } from "@chakra-ui/icons";

export const Contact = memo(() => {
  const iconStyle = { padding: 10, fontSize: "200px", color: "orange" };
  return (
    <Box m="auto" w="80%" mt="12" textAlign="center" pb={{base:"100", sm:"0"}}>
      <Heading>Follow Me!</Heading>
      <List justifyContent="center"  w="80%" m="auto" display={{base:"block",sm:"flex"}}>
        <a href="https://www.instagram.com/sorachi0418">
          <FontAwesomeIcon  style={iconStyle} icon={faInstagram} />
        </a>

        <EmailIcon ml={{base:"0", sm:"16" }} w="48" h="48" color="limegreen" />
      </List>
      <Text fontSize="large">Email : Soraoka0418@outlook.jp</Text>
    </Box>
  );
});
