import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Box } from "@mui/material";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "100%",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default layout;
