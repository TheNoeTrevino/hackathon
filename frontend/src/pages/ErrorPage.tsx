import { Box, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Box
      justifyContent={"center"}
      alignContent={"center"}
      width="100vw"
      height="100vh"
    >
      <Card
        sx={{
          backgroundColor: "white",
          mx: "40rem",
          opacity: 0.7,
        }}
      >
        <Box justifyContent={"center"}>
          <Typography
            variant="h3"
            mt={5}
            textAlign={"center"}
            sx={{ opacity: 1 }}
          >
            Something spooky happened...
          </Typography>
          <Typography variant="h6" my={3} textAlign="center">
            <Link to="/">Click here to go back to the home page</Link>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default ErrorPage;
