"use client";

import { Button, Stack, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";

const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Add Doctor</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen}></DoctorModal>
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
    </div>
  );
};

export default DoctorsPage;
