import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import PHFullScreenModal from "@/components/shared/PHModal/PHFullScreenModal";
import {
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import MultipleSelectChip from "./MultipleSelectShip";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

type IProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const validationSchema = z.object({
  experience: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number().int().optional()
  ),
  apointmentFee: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number().int().optional()
  ),
  name: z.string().optional(),
  contactNumber: z.string().optional(),
  registrationNumber: z.string().optional(),
  gender: z.string().optional(),
  qualification: z.string().optional(),
  currentWorkingPlace: z.string().optional(),
  designation: z.string().optional(),
});

const ProfileUpdateModal = ({ open, setOpen, id }: IProps) => {
  const { data: doctorData, refetch, isSuccess } = useGetDoctorQuery(id);
  const { data: allSpecialties } = useGetAllSpecialtiesQuery("");
  const [selectedSpecialtiesIds, setSelectedSpecialtiesIds] = useState([]);
  const [updateDoctor, { isLoading: updating }] = useUpdateDoctorMutation();
  // console.log(selectedSpecialtiesIds);

  useEffect(() => {
    if (!isSuccess) return;
    setSelectedSpecialtiesIds(
      doctorData?.doctorSpecialties?.map((sp: any) => sp?.specialtiesId)
    );
  }, [isSuccess]);

  const submitHandler = async (values: FieldValues) => {
    const specialties = selectedSpecialtiesIds?.map(
      (specialtiesId: string) => ({
        specialtiesId,
        isDeleted: false,
      })
    );

    const excludedFields: Array<keyof typeof values> = [
      "email",
      "id",
      "role",
      "needPasswordChange",
      "status",
      "createdAt",
      "updatedAt",
      "isDeleted",
      "averageRating",
      "review",
      "profilePhoto",
      "registrationNumber",
      "schedules",
      "doctorSpecialties",
    ];

    const updateValues = Object.fromEntries(
      Object.entries(values).filter(([key]) => {
        return !excludedFields.includes(key);
      })
    );

    updateValues.specialties = specialties;

    try {
      const res = await updateDoctor({ body: updateValues, id });
      refetch();
      toast.success("Information Update Successfully!!");
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PHFullScreenModal open={open} setOpen={setOpen} title="Update Profile">
      <PHForm
        onSubmit={submitHandler}
        defaultValues={doctorData}
        resolver={zodResolver(validationSchema)}
      >
        <Grid container spacing={2} my={2}>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="name"
              label="Name"
              sx={{ mb: 2 }}
              size={"small"}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="email"
              type="email"
              label="Email"
              size={"small"}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="contactNumber"
              label="Contact Number"
              size={"small"}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="registrationNumber"
              label="Registration Number"
              size={"small"}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="experience"
              label="Experience"
              size={"small"}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHSelectField
              items={Gender}
              name="gender"
              label="Gender"
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
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="qualification"
              label="Qualification"
              size={"small"}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="currentWorkingPlace"
              label="Current Working Place"
              size={"small"}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="designation"
              label="Designation"
              size={"small"}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MultipleSelectChip
              allSpecialties={allSpecialties}
              selectedIds={selectedSpecialtiesIds}
              setSelectedIds={setSelectedSpecialtiesIds}
            />
          </Grid>
        </Grid>
        <Button type="submit" disabled={updating}>
          Save
        </Button>
      </PHForm>
    </PHFullScreenModal>
  );
};

export default ProfileUpdateModal;
