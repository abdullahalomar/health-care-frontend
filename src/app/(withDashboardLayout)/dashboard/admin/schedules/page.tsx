"use client";

import { Box, Button } from "@mui/material";
import ScheduleModal from "./components/ScheduleModal";
import { useState } from "react";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Add Schedule</Button>
      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box my={5}>Display Schedule</Box>
    </Box>
  );
};

export default SchedulesPage;
