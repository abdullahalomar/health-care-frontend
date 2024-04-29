"use client";

import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import {
  useGetDoctorsQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    doctorId: string;
  };
};

const DoctorUpdatePage = ({ params }: TParams) => {
  //   console.log(params?.doctorId);
  const id = params?.doctorId;

  const { data, isLoading } = useGetDoctorsQuery(id);
  const [updateDoctor] = useUpdateDoctorMutation();
  //   console.log(data);

  const handleFormSubmit = async (values: FieldValues) => {
    values.experience = Number(values.experience);
    values.apointmentFee = Number(values.apointmentFee);
    values.id = id;
    console.log({ id: values.id, body: values });

    try {
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const defaultValues = {
    email: data?.email || "",
    name: data?.name || "",
    contactNumber: data?.contactNumber || "",
    address: data?.address || "",
    registrationNumber: data?.registrationNumber || "",
    experience: data?.experience || 0,
    gender: data?.gender || "",
    apointmentFee: data?.apointmentFee || 0,
    qualification: data?.qualification || "",
    currentWorkingPlace: data?.currentWorkingPlace || "",
    designation: data?.name || "",
  };

  return (
    <Box>
      <Typography component="h5" variant="h5">
        Update Doctor Info
      </Typography>
      <PHForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="name"
              label="Name"
              size={"small"}
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="email"
              label="Email"
              type="email"
              size={"small"}
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="contactNumber"
              label="Contact Number"
              size={"small"}
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="address"
              label="Address"
              size={"small"}
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="registrationNumber"
              label="Registration Number"
              size={"small"}
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="experience"
              type="number"
              label="Experience "
              size={"small"}
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHSelectField
              items={Gender}
              name="gender"
              label="Gender"
              sx={{ mb: 2 }}
              size={"small"}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="apointmentFee"
              type="number"
              label="Appointment Fee"
              size={"small"}
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="qualification"
              label="Qualification"
              size={"small"}
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="currentWorkingPlace"
              label="Current Working Place"
              size={"small"}
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="designation"
              label="Designation"
              size={"small"}
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Update
        </Button>
      </PHForm>
    </Box>
  );
};

export default DoctorUpdatePage;
