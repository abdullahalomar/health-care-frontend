/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Box, Button, Grid, Stack } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";

import PHInput from "@/components/Forms/PHInput";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PHForm from "@/components/Forms/PHForm";
import { useChangePasswordMutation } from "@/redux/api/authApi";

import { toast } from "sonner";
import { logOutUser } from "@/services/actions/logOutUser";
import { useRouter } from "next/navigation";

const validationSchema = z.object({
  oldPassword: z.string().min(6, "Must be al least 6 character long"),
  newPassword: z.string().min(6, "Must be al least 6 character long"),
});

const changePasswordPage = () => {
  const [changePassword] = useChangePasswordMutation(undefined);
  const router = useRouter();

  const onSubmit = async (values: FieldValues) => {
    try {
      const res = await changePassword(values);
      // console.log(res);

      if ("data" in res && res?.data?.status === 200) {
        logOutUser(router);
      } else {
        throw new Error("Incorrect Password");
      }
    } catch (error) {
      toast.success("Incorrect Password");
    }
  };
  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        maxWidth: 600,
        width: "100%",
        boxShadow: 1,
        borderRadius: 1,
        mx: "auto",
        mt: { xs: 2, md: 5 },
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Box
          sx={{
            "& svg": {
              width: 100,
              height: 100,
            },
          }}
        >
          <KeyIcon sx={{ color: "primary.main" }} />
        </Box>
      </Stack>
      <PHForm
        onSubmit={onSubmit}
        defaultValues={{ oldPassword: "", newPassword: "" }}
        resolver={zodResolver(validationSchema)}
      >
        <Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PHInput
              name="oldPassword"
              type="password"
              label="Old Password"
              fullWidth
              sx={{ mb: 2 }}
              size={"small"}
            />
            <PHInput
              name="newPassword"
              type="password"
              label="New Password"
              fullWidth
              sx={{ mb: 2 }}
              size={"small"}
            />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ width: "100%", my: 2 }}>
          Change Password
        </Button>
      </PHForm>
    </Box>
  );
};

export default changePasswordPage;
