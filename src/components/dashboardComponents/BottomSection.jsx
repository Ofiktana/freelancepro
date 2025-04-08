import { Box, Stack, VStack, Text, HStack, Flex, Button, StackSeparator } from "@chakra-ui/react"
import { DataContext } from "../layout/Layout";
import { useContext } from "react";
import BottomSectionHeader from "./BottomSectionHeader";
import BottomSectionRow from "./BottomSectionRow";
import { CiSquarePlus } from "react-icons/ci";
import ContactCard from "@/components/generalComponents/ContactCard";

function BottomSection() {

  const currentUser = useContext(DataContext).user

  return (
    <Box as="section" padding="8" >
      <Flex marginBottom="4" justify='space-between'>
        <HStack align="center">
          <Text textStyle={{base: 'xl', lg: '2xl'}} textAlign="left" fontWeight="semibold">
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
          <CiSquarePlus /> New Project
        </Button>
      </Flex>
      <VStack>
        <BottomSectionHeader />
        <Stack separator={<StackSeparator />} height='450px' className="overflow-y-auto">
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