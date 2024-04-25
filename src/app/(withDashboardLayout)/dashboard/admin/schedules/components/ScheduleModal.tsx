import PHDatePicker from "@/components/Forms/PHDatePicker";
import PHForm from "@/components/Forms/PHForm";
import PHModal from "@/components/shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = async (values: FieldValues) => {
    // const data = modifyPayload(values);
    try {
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <PHModal open={open} setOpen={setOpen} title="Add A New Schedule">
      <PHForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <PHDatePicker />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          ADD
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default ScheduleModal;
