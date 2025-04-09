import TopSection from "@/components/dashboardComponents/TopSection";
import BottomSection from "@/components/dashboardComponents/BottomSection";
import RightSection from "@/components/dashboardComponents/RightSection";
import { Flex } from "@chakra-ui/react";


function Home() {
  return (
    <Flex direction={{ base: "column", xl: "row" }} padding={{ xl: "4" }} width={'100%'}>
      <Flex direction="column">
        <TopSection />
        <BottomSection />
      </Flex>
      <RightSection />
    </Flex>
  );
}

export default Home;
