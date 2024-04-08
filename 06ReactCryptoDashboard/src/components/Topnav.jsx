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
import { FaCircleUser } from "react-icons/fa6";
const Topnav = () => {
  return (
    <Box >
      <HStack maxW="80rem"  h="16" justify="space-between" px="32" mx="auto">
        <Heading fontWeight="medium" fontSize="28px">Dashboard</Heading>
        <Menu>
          <MenuButton as={Button}>
            <Icon as={FaCircleUser} fontSize="24px"/>
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
