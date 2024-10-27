import Box from "@mui/material/Box/Box";
import { useAuth0 } from "@auth0/auth0-react";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import GoLogin from "../users/GoLogin";
import AccPieChart from "./AccPieChart";
import CopyrightIcon from "@mui/icons-material/Copyright";
import AccFreqGraph from "./AccFreqChart";
import FreqPieChart from "./FreqPieChart";
import AccFreqRelationChart from "./AccFreqRelationChart";

const Dashboard = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <Box>
        <CircularProgress size="50px" />;
      </Box>
    );
  }

  const forNow = (): boolean => {
    return true;
  };
  return forNow ? (
    // return isAuthenticated && user ? (

    <Box>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          gap: 4,
          px: 4,
          py: 2,
        }}
      >
        <AccPieChart />
        <AccFreqGraph />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 4,
          px: 4,
          py: 2,
        }}
      >
        <FreqPieChart />
        <AccFreqRelationChart />
      </Box>
      <Box
        color="white"
        position="fixed"
        bottom={30}
        width="100%"
        textAlign="center"
      >
        <CopyrightIcon fontSize="small" sx={{ mr: 1 }} />
        SegFault
      </Box>
    </Box>
  ) : (
    <GoLogin />
  );
};

export default Dashboard;
