import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";

export const SelfLink = (props) => {
  return (
    <Link to={props.to}>
      <Button p="16" w="100%">
        {props.title}
      </Button>
    </Link>
  );
};
