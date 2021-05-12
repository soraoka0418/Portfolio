import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { Card } from "../organisms/Card";
import Portfolio from "../atoms/img/Portfolio.png";
import Sobolon from "../atoms/img/Sobolon.png";
import NoImage from "../atoms/img/NoImage.png";
export const Skill = () => {
  return (
    <Box pb={{base:"100", sm:"0"}} >
      <Heading fontSize="4xl" mt="5" textAlign="center"  >制作物</Heading>
      <SimpleGrid m="auto" mt="12" columns={{base:1,md:2}} spacing={10} w="80%">
      
      <Card
        text="React.jsやChakura-uiを使用"
        title="Portfolio"
        image={Portfolio}
      />
      <Card text="jqueryを使用した動きのあるサイト" title="LP制作" image={Sobolon} />
      <Card  text="" title="coming soon...!" image={NoImage} />
    </SimpleGrid>
    </Box>
    
  );
};
