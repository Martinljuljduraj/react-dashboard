import { Box } from "@mui/material";
import { Header, BarChart } from "../../components";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="The foods people wanna eat too much of:" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
