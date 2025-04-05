import { Box, Flex, VStack } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <Flex>
      <Box as='nav' className="w-(--sidebar-width) min-h-(--sidebar-height)" bg='gray.600'>
        {/*Navigation Sidebar */}
      </Box>
      <Box className="w-(--main-width) min-h-(--sidebar-height)" >
        <Box as='header' bg='white' className="w-(--main-width) h-(--header-height)">
          {/*Header Section */}
        </Box>
        <Box as='main' bg='purple.50' className="w-(--main-width) min-h-(--min-page-height)">
          {/*Main Content */}
          <Outlet />
        </Box>
      </Box>
    </Flex>
  )
}

export default Layout