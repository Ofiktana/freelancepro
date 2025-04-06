import { Box, Stack, VStack, Text } from "@chakra-ui/react"
import { DataContext } from "../layout/Layout";
import { useContext } from "react";

function TopSection() {

  const currentUser = useContext(DataContext).user
  
  return (
    <Box as='section' padding='8'>
      <Text marginBottom='4' textStyle='2xl' textAlign='left' fontWeight='semibold'>Hello {currentUser?.name.split(' ')[0]}! 👋</Text>
      <VStack>
        <Stack direction={{ base: "column", sm: "row" }}>
          <Box w="350px" h="350px" bg="red.100" borderRadius='xl'></Box>
          <Box w="350px" h="350px" bg="red.100" borderRadius='xl'></Box>
        </Stack>
      </VStack>
    </Box>
  );
}

export default TopSection