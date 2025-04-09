import { Switch } from "@chakra-ui/react"

function SwitchControl(props) {
  return (
    <Switch.Root {...props} colorPalette={'purple'}>
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>Open to work</Switch.Label>
    </Switch.Root>
  )
}

export default SwitchControl