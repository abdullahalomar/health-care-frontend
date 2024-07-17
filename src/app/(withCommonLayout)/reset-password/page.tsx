"use client";
import { Alert, Box, Button, Grid, Stack, Typography } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import PHForm from "@/components/Forms/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import PHInput from "@/components/Forms/PHInput";
import {
  useForgotPasswordMutation,
  useResetPasswordMutation,
} from "@/redux/api/authApi";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { authKey } from "@/constants/authKey";
import { deleteCookies } from "@/services/actions/deleteCookies";

const validationSchema = z.object({
  newPassword: z.string().min(6, "Password at least 6 character long"),
});

const ForgotPassword = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const token = searchParams.get("token");
  const [resetPassword] = useResetPasswordMutation();
  const router = useRouter();

  useEffect(() => {
    if (!token) return;
    localStorage.setItem(authKey, token);
  }, [token]);

  const onSubmit = async (values: FieldValues) => {
    const updatedData = { ...values, id };
    try {
      const res = await resetPassword(updatedData);
      if ("data" in res && res.data.status === 200) {
        toast.success("Reset your password successfully");
        localStorage.removeItem(authKey);
        deleteCookies([authKey, "refreshToken"]);
        router.push("/login");
      }
    } catch (error) {
      toast.error("Something went wrong, try again");
    }
  };
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: { sm: "100vh" },
      }}
    >
      <Box
        sx={{
          px: 4,
          py: 2,
          maxWidth: 600,
          width: "100%",
          boxShadow: 1,
          borderRadius: 1,
        }}
      >
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <KeyIcon sx={{ color: "primary.main" }} />
          </Box>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
            Reset Password
          </Typography>
        </Stack>

        <PHForm
          onSubmit={onSubmit}
          defaultValues={{ email: "" }}
          resolver={zodResolver(validationSchema)}
        >
          <Grid>
            <Grid item xs={12} sm={12} md={6}>
              <PHInput
                name="newPassword"
                type="password"
                label="Enter Your New Password"
                sx={{ mb: 2 }}
                fullWidth
                size={"small"}
              ></PHInput>
            </Grid>
          </Grid>
          <Button type="submit" sx={{ width: "100%", my: 2 }}>
            Reset Password
          </Button>
        </PHForm>
      </Box>
    </Stack>
  );
};

export default ForgotPassword;
