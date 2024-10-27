import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";

const GoLogin = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box
      sx={{
        my: 20,
        mx: 40,
        borderRadius: 3,
        bgcolor: "#11171D",
        "&:hover": {
          bgcolor: "primary.dark",
        },
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        sx={{ mt: 10, color: "white", pt: 5 }}
      >
        You are not currently logged in!
      </Typography>

      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mt: 10, color: "white" }}
      >
        Please Log In Below
      </Typography>
      <Button
        id="demo-positioned-button"
        variant="contained"
        size="large"
        sx={{
          mt: 10,
          mb: 10,
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        onClick={() => loginWithRedirect()}
      >
        Log In
      </Button>
    </Box>
  );
};

export default GoLogin;
