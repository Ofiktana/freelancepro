import { Box, Flex } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { createContext } from 'react'
import { useParams } from "react-router-dom"
import { users } from "@/datasets/users"
import Header from "../headerComponents/Header"
import Navigation from "../navComponents/Navigation"

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
          bg="black"
          display={{ base: "none", lg: "flex" }}
        >
          {/*Navigation Sidebar */}
          <Navigation />
        </Box>
        <Box className="w-(--main-width) min-h-(--sidebar-height)">
          <Box
            as="header"
            borderBottom='2px solid lightgray'
            className="w-(--main-width) h-(--header-height)"
          >
            {/*Header Section */}
            <Header />
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