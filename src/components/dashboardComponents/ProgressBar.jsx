import { Progress } from "@chakra-ui/react"

function ProgressBar({ value }) {
  return (
    <Progress.Root width={{base: '50px', md:'130px'}} value={value} colorPalette='purple'>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}
export default ProgressBar