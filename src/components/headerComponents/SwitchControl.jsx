import { Switch } from "@chakra-ui/react"

function SwitchControl() {
  return (
    <Switch.Root display={{base: 'none', sm:'flex'}} colorPalette={'purple'}>
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>Open to work</Switch.Label>
    </Switch.Root>
  )
}

export default SwitchControl