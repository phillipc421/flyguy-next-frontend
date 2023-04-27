import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Container, Typography } from "@mui/material";
export default function ProfilePage() {
  const { user, error, isLoading } = useUser();
  console.log(user);
  if (error) return <div>Error</div>;
  return (
    user && (
      <Container>
        <Box>
          <Typography variant="h1">
            Hi, {user.nickname[0].toUpperCase() + user.nickname.slice(1)}.
          </Typography>
          <img src={user.picture}></img>
        </Box>
      </Container>
    )
  );
}
