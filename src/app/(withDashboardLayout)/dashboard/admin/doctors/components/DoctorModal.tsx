import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import PHFullScreenModal from "@/components/shared/PHModal/PHFullScreenModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { Gender } from "@/types";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorModal = ({ open, setOpen }: TProps) => {
  const onSubmit = async (values: FieldValues) => {
    try {
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const defaultValues = {
    doctor: {
      email: "",
      name: "",
      contactNumber: "",
      address: "",
      registrationNumber: "",
      experience: 0,
      gender: "",
      apointmentFee: 0,
      qualification: "",
      currentWorkingPlace: "",
      designation: "",
      profilePhoto: "",
    },
    password: "",
  };

  return (
    <div>
      <PHFullScreenModal open={open} setOpen={setOpen} title="Add A New Doctor">
        <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <Grid container spacing={2} sx={{ my: 5 }}>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="doctor.name"
                label="Name"
                size={"small"}
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="doctor.email"
                label="Email"
                type="email"
                size={"small"}
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="password"
                type="password"
                label="Password"
                size={"small"}
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="doctor.contactNumber"
                label="Contact Number"
                size={"small"}
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="doctor.address"
                label="Address"
                size={"small"}
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="doctor.registrationNumber"
                label="Registration Number"
                size={"small"}
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="doctor.experience"
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
                name="doctor.gender"
                label="Gender"
                sx={{ mb: 2 }}
                size={"small"}
                fullWidth={false}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="doctor.apointmentFee"
                type="number"
                label="Appointment Fee"
                size={"small"}
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="doctor.qualification"
                label="Qualification"
                size={"small"}
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="doctor.currentWorkingPlace"
                label="Current Working Place"
                size={"small"}
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="doctor.designation"
                label="Designation"
                size={"small"}
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>
          <Button sx={{ mt: 1 }} type="submit">
            Create
          </Button>
        </PHForm>
      </PHFullScreenModal>
    </div>
  );
};

export default DoctorModal;
