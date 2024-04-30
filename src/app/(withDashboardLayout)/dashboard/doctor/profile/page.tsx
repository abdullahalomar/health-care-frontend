"use client";

import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/myProfile";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import DoctorInformation from "./components/DoctorInformation";
import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const DoctorProfile = () => {
  const { data, isLoading } = useGetMyProfileQuery("");
  console.log(data);

  const [updateMyProfile, { isLoading: uploading }] =
    useUpdateMyProfileMutation();

  const fileUploadHandler = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));

    updateMyProfile(formData);
  };

  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Box
            sx={{
              height: 300,
              width: "100%",
              overflow: "hidden",
              borderRadius: 1,
            }}
          >
            <Image
              src={data?.profilePhoto}
              height={300}
              width={400}
              alt="profile photo"
            />
          </Box>

          {uploading ? (
            <p>Uploading...</p>
          ) : (
            <AutoFileUploader
              name="file"
              label="Choose your profile photo"
              icon={<DriveFolderUploadIcon />}
              onFileUpload={fileUploadHandler}
              variant="text"
            />
          )}
        </Grid>
        <Grid xs={12} md={8}>
          <DoctorInformation data={data} />
        </Grid>
      </Grid>
    </>
  );
};

export default DoctorProfile;
