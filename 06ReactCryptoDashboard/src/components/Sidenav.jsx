import { Stack, HStack, Icon, Text, Heading, Box } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack bg="white" justify="space-between"  boxShadow={{base:"none", lg:"lg"}} w={{base:"full",lg:"16rem"}} h="100vh" 
   

    >
      {/* stack is display flex + flex direction column */}
      <Box >
        <Heading textAlign="center" pt="56px" fontSize="20px" as="h1">
          ReactiveCrypto
        </Heading>
        <Box mt="6" mx="12px">
          {navLinks.map((nav) => (
            <HStack
              key={nav.text}
              py="3"
              px="4"
              borderRadius="10px"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              color="#797E82"
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="12px" mb="6">
        <HStack
          py="3"
          px="4"
          borderRadius="10px"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82"
        >
          <Icon as={MdOutlineSupportAgent} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;
