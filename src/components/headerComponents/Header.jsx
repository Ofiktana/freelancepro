import { Flex, Text, Icon } from "@chakra-ui/react";
import MenuToggle from "./MenuToggle";
import { useLocation, useParams } from "react-router-dom";
import SearchField from "./SearchField";
import SwitchControl from "./SwitchControl";
import { CiBellOn } from "react-icons/ci";

function Header() {
  const currentPath = useLocation().pathname;
  const userID = useParams().id;

  let headerText;

  switch (currentPath) {
    case `/${userID}`:
      headerText = "Dashboard";
      break;

    case `/${userID}/profile`:
      headerText = "Profile";
      break;

    case `/${userID}/projects`:
      headerText = "Projects";
      break;

    default:
      headerText = "";
  }

  return (
    <Flex direction="column" justify="space-around" align="center" height='100%' width='100%'>
      <Flex
        width="100%"
        gap="4"
        height={{base: '50%', sm: '100%'}}
        align="center"
        px="8"
        justify={"space-between"}
      >
        <MenuToggle />
        <Text
          mr="auto"
          padding={"1rem"}
          textStyle={"2xl"}
          fontWeight={"semibold"}
        >
          {headerText}
        </Text>
        <SwitchControl display={{base: 'none', sm:'flex'}} />
        <SearchField width={'200px'} display={{ base: "none", sm: "block" }} />
        <Icon size={"xl"}>
          <CiBellOn />
        </Icon>
      </Flex>
        <SearchField width={'90%'} display={{ base: "block", sm: "none" }} />
    </Flex>
  );
}

export default Header;
