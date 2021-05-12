import { IconButton } from "@chakra-ui/button";


export const Icon = (props) => {
   
    return(
        <IconButton
        ml="auto"
        area-aria-label="メニューボタン"
        icon={props.icon}
        size="md"
        variant="unStyled"
        display={{ base: "block", md: "none" }}
        onClick={props.click}
      />
    )
}