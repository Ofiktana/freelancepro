import { Switch } from "@chakra-ui/react"

function SwitchControl() {
  return (
    <Switch.Root colorPalette={'purple'}>
      <Switch.HiddenInput />
      <Switch.Label>Open to work</Switch.Label>
      <Switch.Control />
    </Switch.Root>
  )
}

export default SwitchControl