import { Box } from "@mui/material";
import { Header, LineChart } from "../../components";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Displays which methods of transportation people use in various countries" />
      <Box height="100vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
