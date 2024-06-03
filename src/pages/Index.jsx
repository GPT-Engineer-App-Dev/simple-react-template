import { Container, Text, VStack, Box, Flex, Spacer, IconButton, useColorMode, useColorModeValue, Button } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  return (
    <Box bg={bg} color={color} minH="100vh">
      <Flex as="nav" bg={useColorModeValue("white", "gray.800")} p={4} boxShadow="md">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Spacer />
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />
        {session ? (
          <Button ml={4} onClick={logout}>Logout</Button>
        ) : (
          <Button ml={4} onClick={() => navigate("/login")}>Login</Button>
        )}
      </Flex>
      <Container centerContent maxW="container.md" py={8}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of an empty React app.</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;