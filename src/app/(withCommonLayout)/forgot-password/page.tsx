"use client";
import { Alert, Box, Button, Grid, Stack, Typography } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import PHForm from "@/components/Forms/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import PHInput from "@/components/Forms/PHInput";
import { useForgotPasswordMutation } from "@/redux/api/authApi";
import { toast } from "sonner";

const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
});

const ForgotPassword = () => {
  const [forgotPassword, { isSuccess }] = useForgotPasswordMutation();

  const onSubmit = async (values: FieldValues) => {
    try {
      const res = await forgotPassword(values);
      if ("data" in res && res.data.status === 200) {
        toast.success("Check your email for reset link");
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
            Forgot Password
          </Typography>
        </Stack>

        {isSuccess && (
          <Box>
            <Alert severity="success">
              Forgot password link successfully sent your email.
            </Alert>
          </Box>
        )}

        {!isSuccess && (
          <PHForm
            onSubmit={onSubmit}
            defaultValues={{ email: "" }}
            resolver={zodResolver(validationSchema)}
          >
            <Grid>
              <Grid item xs={12} sm={12} md={6}>
                <PHInput
                  name="email"
                  type="email"
                  label="Your Email"
                  sx={{ mb: 2 }}
                  fullWidth
                  size={"small"}
                ></PHInput>
              </Grid>
            </Grid>
            <Button type="submit" sx={{ width: "100%", my: 2 }}>
              Forgot Password
            </Button>
          </PHForm>
        )}
      </Box>
    </Stack>
  );
};

export default ForgotPassword;
