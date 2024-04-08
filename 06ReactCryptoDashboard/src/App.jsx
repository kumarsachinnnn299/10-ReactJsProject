import Topnav from "./components/Topnav"
import Dashboard from "./pages/Dashboard/Dashboard"
import {Flex,Box} from '@chakra-ui/react'


function App() {


  return (
  <>
  <Flex>

  <Dashboard/>
  <Box flexGrow={1}>

  <Topnav/>
  </Box>
  </Flex>
  </>
    
  )
}

export default App
