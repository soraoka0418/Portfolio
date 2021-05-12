import { Box, Heading, Text } from "@chakra-ui/layout";

export const SelfIntroduction = () => {
  return (
    <Box >
      <Heading  fontSize={{base:"x-large" , md:"xx-large"}} pt="3" pb="4">Self-introduction</Heading>
      <Text mt ={{base:"12",md:"3"}} fontSize={{base:"md" , md:"x-large"}}>
        22歳の大学4年生文系です {<br />}
        主にフロントエンドをReact使って書いています！{<br />}
        フロントエンド周りでお手伝いできることあれば是非一度お声がけください！
      </Text>
    </Box>
  );
};
