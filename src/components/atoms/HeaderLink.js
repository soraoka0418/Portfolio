import { Box } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

export const HeaderLink = (props) => {
    const LinkStyle = {
        fontSize: "32px",
      };
    return(
        <Box pl={8}>
          <Link to={props.to} style={LinkStyle}>
            {props.LinkName}
          </Link>
        </Box>
    )
}