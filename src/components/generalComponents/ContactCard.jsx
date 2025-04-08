import { VStack, Avatar, Text, Button } from "@chakra-ui/react";
import { MdEdit } from "react-icons/md";

function ContactCard({ user }) {
  return (
    <VStack bg="purple.600" padding="8" borderRadius="lg" gap="0.5" mb='4'>
      <Avatar.Root size="2xl">
        <Avatar.Fallback name={user.name} />
        <Avatar.Image src={user.avatar} />
      </Avatar.Root>
      <Text textStyle="lg" color="white" fontWeight='semibold'>
        {user.name}
      </Text>
      <Text textStyle="sm" color="white">
        {user.role}
      </Text>
      <Button
        variant="outline"
        mt='4'
        color="white"
        border="2px solid white"
        borderRadius="xl"
        fontWeight='semibold'
        _hover={{color: 'purple.600', bg: 'white'}}
      >
        <MdEdit />
        Edit Profile
      </Button>
    </VStack>
  );
}

export default ContactCard;
