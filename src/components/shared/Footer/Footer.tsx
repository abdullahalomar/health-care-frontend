import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/landing_page/facebook.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 24, 34)" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Diagnosis
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            NGOS
          </Typography>
        </Stack>

        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Link href="#">
            <Image src={facebook} width={30} height={30} alt="facebook icon" />
          </Link>
          <Link href="#">
            <Image src={facebook} width={30} height={30} alt="facebook icon" />
          </Link>
          <Link href="#">
            <Image src={facebook} width={30} height={30} alt="facebook icon" />
          </Link>
          <Link href="#">
            <Image src={facebook} width={30} height={30} alt="facebook icon" />
          </Link>
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy; 2024 HealthCare. All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/login"
            fontWeight={600}
            color="white"
          >
            <Box component="span" color="primary.main">
              H
            </Box>
            ealth Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
