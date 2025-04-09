import {
  Button,
  CloseButton,
  Drawer,
  For,
  HStack,
  Portal,
} from "@chakra-ui/react"
import Navigation from "../navComponents/Navigation";

import { CiMenuBurger } from "react-icons/ci";

function MenuToggle() {
  return (
    <HStack wrap="wrap" display={{base:'block', lg:'none'}}>
      <For each={["start"]}>
        {(placement) => (
          <Drawer.Root key={placement} placement={placement}>
            <Drawer.Trigger asChild>
              <Button variant="outline" size="sm">
                <CiMenuBurger />
              </Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content
                  roundedTop={placement === "bottom" ? "l3" : undefined}
                  roundedBottom={placement === "top" ? "l3" : undefined}
                >
                  <Drawer.Header bg='black' color={'white'}>
                    <Drawer.Title></Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body bg='black'>
                    <Navigation />
                  </Drawer.Body>
                  <Drawer.CloseTrigger color={'white'} asChild>
                    <CloseButton size="sm" />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        )}
      </For>
    </HStack>
  )
}

export default MenuToggle
