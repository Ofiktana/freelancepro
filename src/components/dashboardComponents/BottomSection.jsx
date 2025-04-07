import { Box, Stack, VStack, Text, HStack, Flex, Button, StackSeparator } from "@chakra-ui/react"
import { DataContext } from "../layout/Layout";
import { useContext } from "react";
import BottomSectionHeader from "./BottomSectionHeader";
import BottomSectionRow from "./BottomSectionRow";
import { CiSquarePlus } from "react-icons/ci";

function BottomSection() {

  const currentUser = useContext(DataContext).user

  return (
    <Box as="section" padding="8">
      <Flex justify='space-between'>
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
        <Button colorPalette="purple" variant="solid" borderRadius='lg'>
          <CiSquarePlus /> Add New Project
        </Button>
      </Flex>
      <VStack>
        <BottomSectionHeader />
        <Stack separator={<StackSeparator />}>
          {
            currentUser.projects.map((project) => {
              return <BottomSectionRow project={project} />
            })
          }
        </Stack>
      </VStack>
    </Box>
  );
}

export default BottomSection