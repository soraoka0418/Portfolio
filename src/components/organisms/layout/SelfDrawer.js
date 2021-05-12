import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { SelfLink } from "../SelfLink";
import { Icon } from "../../atoms/Icon";

export const SelfDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      
      <Icon icon={<HamburgerIcon/>} click={onOpen} />
      <Drawer placement="left" isOpen={isOpen} onClose={onClose} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg={"gray.100"}>
              <SelfLink to="/" title="Home" />
              <SelfLink to="/skill" title="Skill" />
              <SelfLink to="/Contact" title="Contact" />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
