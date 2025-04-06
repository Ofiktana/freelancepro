import { Box, Stack, VStack, Text, HStack, Flex } from "@chakra-ui/react"
import { DataContext } from "../layout/Layout";
import { useContext } from "react";
import BottomSectionHeader from "./BottomSectionHeader";

function BottomSection() {

  const currentUser = useContext(DataContext).user

  return (
    <Box as="section" padding="8">
      <HStack marginBottom="4" align="center">
        <Text textStyle="2xl" textAlign="left" fontWeight="semibold">
          Active projects
        </Text>
        <Text
          textStyle="md"
          textAlign="left"
          fontWeight="semibold"
          color="gray.500"
        >{`(${currentUser?.projects?.length})`}</Text>
      </HStack>
      <VStack>
        <BottomSectionHeader />
      </VStack>
    </Box>
  );
}

export default BottomSection