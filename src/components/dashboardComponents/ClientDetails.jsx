import { personData } from "@/datasets/users";
import { Avatar, HStack, Stack, Text, Link } from "@chakra-ui/react"

function ClientDetails({ user }) {

  return (
    <Stack gap="8">
      
        <HStack key={user.email} gap="2">
          <Avatar.Root>
            <Avatar.Fallback name={user.name} />
            <Avatar.Image src={user.avatar} />
          </Avatar.Root>
          <Stack gap="0" align='start'>
            <Text fontWeight="normal" fontSize='sm'>{user.name}</Text>
            <Link
              variant="underline"
              href="#"
              colorPalette="purple"
              fontSize='sm'
            >
              View Order
            </Link>
          </Stack>
        </HStack>
      
    </Stack>
  );
}

export default ClientDetails


