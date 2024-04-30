import { Box, Stack, Typography, styled } from "@mui/material";

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#C4E4FF",
  borderRadius: theme.spacing(1),
  padding: "8px 16px",
  width: "45%",
  "& p": {
    fontWeight: 600,
  },
}));

const DoctorInformation = ({ data }: { data: any }) => {
  return (
    <>
      <Typography variant="h5">
        <Box component="span" color="primary.main" paddingRight={1}>
          {data?.name}
        </Box>{" "}
        Personal Information
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} gap={2} flexWrap="wrap">
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

      <Box mt={4}>
        <Typography variant="h5">
          <Box component="span" color="primary.main" paddingRight={1}>
            {data?.name}
          </Box>{" "}
          Professional Information
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} gap={2} flexWrap="wrap">
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              Appointment Fee
            </Typography>
            <Typography>{data?.apointmentFee}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              Qualification
            </Typography>
            <Typography>{data?.qualification}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              Current Working Place
            </Typography>
            <Typography>{data?.currentWorkingPlace}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              Joined
            </Typography>
            <Typography>{data?.createdAt}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              Current Status
            </Typography>
            <Typography>{data?.status}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              Average Rating
            </Typography>
            <Typography>{data?.averageRating}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography color="secondary" variant="caption">
              Experience
            </Typography>
            <Typography>{data?.experience} years</Typography>
          </StyledInformationBox>
        </Stack>
      </Box>
    </>
  );
};

export default DoctorInformation;
