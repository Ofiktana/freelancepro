import { Badge, Flex, Text, Box, Stack, Button } from "@chakra-ui/react"

function JobApplication({ application }) {
  return (
    <Box padding="2" mt="4">
      <Stack gap="2">
        <Flex justify="space-between" align="center">
          <Badge colorPalette={application.status_color} variant="subtle">
            {application.status_text}
          </Badge>
          <Text textStyle="xs" color="purple">
            Applied on {application.date}
          </Text>
        </Flex>
        <Flex
          direction={{ base: "column", md: "row", xl: "column" }}
          justify={{ md: "space-between" }}
        >
          <Text textAlign="left" textStyle="md" fontWeight="medium">
            {application.role}
          </Text>
          <Text textAlign="left" color="gray.600" textStyle="sm">
            {application.company}
          </Text>
        </Flex>

        <Flex gap="2">
          {application.tags.map((tag) => (
            <Button
              size="sm"
              borderRadius="2xl"
              colorPalette="green"
              variant="outline"
            >
              {tag}
            </Button>
          ))}
        </Flex>
      </Stack>
    </Box>
  );
}

export default JobApplication