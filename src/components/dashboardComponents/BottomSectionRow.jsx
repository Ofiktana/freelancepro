import { Stack, Flex} from '@chakra-ui/react'
import ClientDetails from './ClientDetails';
import ProgressBar from './ProgressBar';

function BottomSectionRow({ project }) {
  return (
    <Stack direction="row" bg="white" paddingX="2" borderRadius="lg">
      <Flex
        w="150px"
        color=""
        h="70px"
        fontWeight="normal"
        borderRadius="xl"
        align="center"
      >
        <ClientDetails user={project} />
      </Flex>
      <Flex
        w="120px"
        color=""
        h="70px"
        fontWeight=""
        borderRadius="xl"
        align="center"
      >
        {project.project}
      </Flex>
      <Flex
        w="60px"
        color=""
        h="70px"
        fontWeight=""
        borderRadius="xl"
        align="center"
        display={{ base: "none", md: "flex" }}
      >
        ${project.price}
      </Flex>
      <Flex
        w="120px"
        color=""
        h="70px"
        fontWeight=""
        borderRadius="xl"
        align="center"
        display={{ base: "none", md: "flex" }}
      >
        {project.dueBy}
      </Flex>
      <Flex
        w={{ base: "80px", md: "180px" }}
        color=""
        h="70px"
        bg=""
        fontWeight="semibold"
        borderRadius="xl"
        align="center"
        justify='space-around'
      >
        <ProgressBar value={project.progressPerCent} />
        {project.progressPerCent}%
      </Flex>
    </Stack>
  );
}

export default BottomSectionRow