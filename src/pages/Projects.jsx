import { Center } from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "@/components/layout/Layout";

function Projects() {
  const currentUser = useContext(DataContext).user
  
  return (
    <Center height={'100vh'} width='100%' color={'purple.600'} fontWeight={'bold'} fontSize={'3xl'}>{currentUser.name} - Projects</Center>
  );
}

export default Projects