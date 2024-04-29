"use client";

import { useGetMyProfileQuery } from "@/redux/api/myProfile";
import { Box, Stack, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#C4E4FF",
  borderRadius: theme.spacing(1),
  padding: "8px 16px",
  width: "45%",
  "& p": {
    fontWeight: 600,
  },
}));

const DoctorProfile = () => {
  const { data, isLoading } = useGetMyProfileQuery("");
  console.log(data);

  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={4}>
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
        </Grid>
        <Grid xs={8}>
          <Typography variant="h4">
            <Box component="span" color="primary.main" paddingRight={1}>
              {data?.name}
            </Box>{" "}
            Information
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={2}
            flexWrap="wrap"
          >
            <StyledInformationBox>
              <Typography color="secondary" variant="caption">
                Role
              </Typography>
              <Typography>{data?.role}</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography color="secondary" variant="caption">
                Email
              </Typography>
              <Typography>{data?.email}</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography color="secondary" variant="caption">
                Gender
              </Typography>
              <Typography>{data?.gender}</Typography>
            </StyledInformationBox>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default DoctorProfile;
