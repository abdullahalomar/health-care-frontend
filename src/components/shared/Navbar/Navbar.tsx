"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );
  return (
    <div>
      <Container>
        <Stack
          py={2}
          direction="row"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Typography
            variant="h4"
            component={Link}
            href="/login"
            fontWeight={600}
          >
            <Box component="span" color="primary.main">
              H
            </Box>
            ealth Care
          </Typography>

          <Stack direction="row" gap={4} justifyContent="space-between">
            <Typography component={Link} href="/consultation">
              Consultation
            </Typography>
            <Typography component={Link} href="/login">
              Health Plans
            </Typography>
            <Typography component={Link} href="/login">
              Medicine
            </Typography>
            <Typography component={Link} href="/login">
              Diagnosis
            </Typography>
            <Typography component={Link} href="/login">
              NGOS
            </Typography>
          </Stack>

          <AuthButton />
        </Stack>
      </Container>
    </div>
  );
};

export default Navbar;
