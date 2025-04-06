import { Stack, Flex} from '@chakra-ui/react'

function BottomSectionHeader() {
  return (
    <Stack direction="row" bg="gray.200" paddingX="2" borderRadius="lg">
      <Flex
        w="150px"
        color="gray.500"
        h="50px"
        bg="gray.200"
        fontWeight="semibold"
        borderRadius="xl"
        align="center"
      >
        Client
      </Flex>
      <Flex
        w="120px"
        color="gray.500"
        h="50px"
        bg="gray.200"
        fontWeight="semibold"
        borderRadius="xl"
        align="center"
      >
        Project
      </Flex>
      <Flex
        w="60px"
        color="gray.500"
        h="50px"
        bg="gray.200"
        fontWeight="semibold"
        borderRadius="xl"
        align="center"
        display={{ base: "none", md: "flex" }}
      >
        Price
      </Flex>
      <Flex
        w="100px"
        color="gray.500"
        h="50px"
        bg="gray.200"
        fontWeight="semibold"
        borderRadius="xl"
        align="center"
        display={{ base: "none", md: "flex" }}
      >
        Due in
      </Flex>
      <Flex
        w={{ base: "80px", md: "180px" }}
        color="gray.500"
        h="50px"
        bg="gray.200"
        fontWeight="semibold"
        borderRadius="xl"
        align="center"
      >
        Progress
      </Flex>
    </Stack>
  );
}

export default BottomSectionHeader