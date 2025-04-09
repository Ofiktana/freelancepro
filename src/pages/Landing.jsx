import { Flex, VStack, Avatar, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function LoginCard({ user }) {
  return (
    <VStack bg="purple.600" padding="8" borderRadius="lg" gap="0.5" mb="4">
      <Avatar.Root size="2xl">
        <Avatar.Fallback name={user.name} />
        <Avatar.Image src={user.avatar} />
      </Avatar.Root>
      <Text textStyle="lg" color="white" fontWeight="semibold">
        {user.name}
      </Text>
      <Text textStyle="sm" color="white">
        {user.role}
      </Text>
      <NavLink to={`/${user.id}`}>
      <Button
        variant="outline"
        mt="4"
        color="white"
        border="2px solid white"
        borderRadius="xl"
        fontWeight="semibold"
        _hover={{ color: "purple.600", bg: "white" }}
      >
        Login
      </Button>
      </NavLink>
    </VStack>
  );
}

function Landing({ users }) {

  return (
    <Flex border={'8px double purple'} direction={'column'} width={'100vw'} height={'100vh'} align={'center'} justify={'center'} gap={'16'}>
      <Text textStyle={'4xl'} color={'purple.600'} fontWeight={'bold'}>FREELANCER PRO</Text>
      <Flex
        justify={"center"}
        align={"center"}
        width={"100vw"}
        // height={"100vh"}
        wrap='wrap'
        gap='2'
        padding={'2'}
      >
        {users.map((user) => (
          <LoginCard user={user} />
        ))}
      </Flex>
    </Flex>
  );
}

export default Landing;
