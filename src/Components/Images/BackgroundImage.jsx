import { Box } from "@mui/material";

const BackgroundWrapper = ({ image, children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundWrapper;