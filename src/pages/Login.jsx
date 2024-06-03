import { Box, Container, VStack, Heading, Button } from "@chakra-ui/react";
import { SupabaseAuthUI, useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  return (
    <Box bg="gray.100" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Container centerContent>
        <VStack spacing={4}>
          <Heading>Login</Heading>
          {!session ? (
            <SupabaseAuthUI />
          ) : (
            <>
              <Button onClick={() => navigate("/")}>Go to Home</Button>
              <Button onClick={logout}>Logout</Button>
            </>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Login;