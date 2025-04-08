import { Flex, Menu } from "@chakra-ui/react"
import MenuToggle from "./MenuToggle"

function Header() {
  return (
    <Flex width='100%' height='100%' align='center'>
      <MenuToggle />
    </Flex>
  )
}

export default Header