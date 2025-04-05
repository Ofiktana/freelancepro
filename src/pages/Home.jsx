import { Button, HStack } from "@chakra-ui/react"

function Home() {
  return (
    <HStack>
      <Button bg='black'>Click me</Button>
      <Button bg='purple.400'>Edit Profile</Button>
    </HStack>
  )
}

export default Home