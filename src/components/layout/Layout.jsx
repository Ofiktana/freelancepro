import { Box, Flex } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { createContext } from 'react'
import { useParams } from "react-router-dom"
import { users } from "@/datasets/users"

const DataContext = createContext()

function Layout() {

  const currentUserID = useParams().id
  const currentUser = users.find(user => user.id == currentUserID)

  return (
    <DataContext.Provider value={{user: currentUser, allUsers: users, currentUserID: currentUserID}}>
      <Flex>
        <Box
          as="nav"
          className="w-(--sidebar-width) min-h-(--sidebar-height)"
          bg="gray.600"
          display={{ base: "none", lg: "flex" }}
        >
          {/*Navigation Sidebar */}
        </Box>
        <Box className="w-(--main-width) min-h-(--sidebar-height)">
          <Box
            as="header"
            bg="purple.50"
            className="w-(--main-width) h-(--header-height)"
          >
            {/*Header Section */}
          </Box>
          <Box
            as="main"
            display="block"
            maxW="1280px"
            mx="auto"
            bg=""
            className="w-(--main-width) min-h-(--min-page-height)"
          >
            {/*Main Content */}
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </DataContext.Provider>
  );
}

export default Layout

export { DataContext }