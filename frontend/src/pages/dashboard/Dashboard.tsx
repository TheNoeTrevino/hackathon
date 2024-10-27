import Box from "@mui/material/Box/Box";
import Chart from "./AccFreqChart";
import ChartUserByAcc from "./PieChart";
import { useAuth0 } from "@auth0/auth0-react";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import GoLogin from "../users/GoLogin";

const Dashboard = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <Box>
        <CircularProgress size="50px" />;
      </Box>
    );
  }

  return isAuthenticated && user ? (
    <Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <ChartUserByAcc />
        <Chart />
      </Box>
      <div>Dashboard</div>;
    </Box>
  ) : (
    <GoLogin />
  );
};

export default Dashboard;
