import {
  HStack,
  Container,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  Box,
  Icon
} from "@chakra-ui/react";
import { FaBars, FaCircleUser } from "react-icons/fa6";
const Topnav = ({title,onOpen}) => {
  return (
    <Box bg="white">
      <HStack maxW="70rem"  h="16" justify="space-between"  mx="auto">
        <Icon as={FaBars} onClick={onOpen} display={{
          base:"block",
          lg:"none"
        }}/>
        <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
        <Menu  >
          <MenuButton as={Button} bg="white">
            <Icon as={FaCircleUser} fontSize="24px" />
          </MenuButton>

          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
            
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
