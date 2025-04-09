import { Text, Flex, VStack } from "@chakra-ui/react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa6";
import { NavLink, useParams } from "react-router-dom";

function NavItem({ icon, text }) {
  return (
    <Flex
      color="white"
      paddingY="4"
      paddingX="8"
      justify="start"
      gap="4"
      align="center"
      _hover={{ bg: "gray.600" }}
      bg={text == 'Log Out' ? 'gray.800': ''}
    >
      {icon} {text}
    </Flex>
  );
}

function Navigation() {
  const userID = useParams().id;

  const navItems = [
    {
      icon: <BiSolidBarChartAlt2 />,
      text: "Dashboard",
      destination: `/${userID}`,
    },
    { icon: <CgProfile />, text: "Profile", destination: `/${userID}/profile` },
    {
      icon: <FaBriefcase />,
      text: "Projects",
      destination: `/${userID}/projects`,
    },
  ];

  return (
    <Flex
      direction="column"
      justify="space-between"
      py="10"
      height="90vh"
      width={{base: '100%', lg: 'calc(var(--sidebar-width) - 1rem)'}}
      className="lg:fixed lg:top-0 lg:left-0"
      onClick={() => {}}
    >
      <Flex width="100%" direction="column">
        {navItems.map((item) => (
          <NavLink to={item.destination}>
            <NavItem icon={item.icon} text={item.text} />
          </NavLink>
        ))}
      </Flex>
      <NavLink to="/">
        <NavItem icon={<BiLogOut />} text="Log Out" />
      </NavLink>
    </Flex>
  );
}

export default Navigation;
