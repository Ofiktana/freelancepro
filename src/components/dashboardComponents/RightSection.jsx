import {
  Box,
  Flex,
  Badge,
  IconButton,
  Text,
  Stack,
  StackSeparator,
} from "@chakra-ui/react";
import { LuEllipsisVertical } from "react-icons/lu";
import { useContext } from "react";
import { DataContext } from "../layout/Layout";
import JobApplication from "./JobApplication";
import ContactCard from "../generalComponents/ContactCard";

function RightSection() {
  const currentUser = useContext(DataContext).user;

  return (
    <Flex
      as="aside"
      direction={{ base: "column-reverse", xl: "column" }}
      padding={{ base: "8", xl: "4" }}
      boxShadow="0 0 2px gray"
      height="auto"
      mb="8"
      className="overflow-y-auto"
      borderRadius="2xl"
      mx={{ base: "4", md: "8" }}
      width={{ xl: "400px" }}
    >
      <ContactCard user={currentUser} />
      <Flex direction="column" mb='8'>
        <Flex justify="space-between">
          <Text
            textStyle={{ base: "2xl", xl: "xl" }}
            textAlign="left"
            fontWeight="semibold"
          >
            My Applications
          </Text>
          <IconButton
            aria-label="More options"
            variant="ghost"
            size={{ base: "md", xl: "sm" }}
          >
            <LuEllipsisVertical />
          </IconButton>
        </Flex>
        <Stack separator={<StackSeparator />}>
          {currentUser.applications.map((application) => (
            <JobApplication application={application} />
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
}

export default RightSection;
