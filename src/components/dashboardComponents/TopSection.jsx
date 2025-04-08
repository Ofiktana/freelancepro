import { Box, Stack, VStack, Text, Flex } from "@chakra-ui/react";
import { DataContext } from "../layout/Layout";
import { useContext } from "react";
import EarningsChart from "./EarningsChart";
import SkillsChart from "./SkillsChart";
import { totalEarnings } from "@/datasets/users";

function TopSection() {
  const currentUser = useContext(DataContext).user;

  return (
    <Box as="section" padding="8">
      <Text
        marginBottom="4"
        textStyle="2xl"
        textAlign="left"
        fontWeight="semibold"
      >
        Hello {currentUser?.name.split(" ")[0]}! 👋
      </Text>
      <VStack>
        <Stack direction={{ base: "column", sm: "row" }}>
          <Flex
            direction="column"
            justify="space-between"
            align="center"
            className="relative"
            py="4"
            w="350px"
            h="350px"
            shadow="0 0 2px gray"
            borderRadius="xl"
          >
            <Box className="absolute top-25 right-15">
              <Text textStyle="xs" fontWeight="medium" color="gray.400">
                Income in 2024
              </Text>
              <Text textStyle="2xl" fontWeight="medium" color="black">
                ${totalEarnings(currentUser.earnings) / 1000}K
              </Text>
            </Box>
            <Text fontWeight="semibold" color="purple.600">
              2024 Earnings Report
            </Text>
            <EarningsChart data={currentUser.earnings} />
          </Flex>
          <Flex
            direction='column'
            justify='space-around'
            w="350px"
            h="350px"
            pr="10"
            shadow="0 0 2px gray"
            borderRadius="xl"
          >
            <Text textAlign='center' color='red.600' fontWeight='medium'>Skill Rating</Text>
            <SkillsChart data={currentUser.skills} />
          </Flex>
        </Stack>
      </VStack>
    </Box>
  );
}

export default TopSection;
