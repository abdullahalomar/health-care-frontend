import assets from "@/assets";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import chooseUsImg from "@/assets/choose-us.png";

const serviceData = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quasi temporibus atque, quaerat aliquam cumque deleniti neque.",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Best Quality Pregnanct Care",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quasi temporibus atque, quaerat aliquam cumque deleniti neque.",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Complete Medical Equipment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quasi temporibus atque, quaerat aliquam cumque deleniti neque.",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Dedicated Emergency Care",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quasi temporibus atque, quaerat aliquam cumque deleniti neque.",
  },
];

const WhyUs = () => {
  return (
    <Container>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            color="primary"
            variant="h6"
            component="h1"
            fontWeight={700}
          >
            Why Us
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Why Choose Us
          </Typography>
        </Box>
        <Grid container spacing={2} my={5}>
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={serviceData[0].imageSrc} width={50} alt="award" />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {serviceData[0].title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body1"
                  fontWeight={300}
                >
                  {serviceData[0].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 100px 10px 10px",
                margin: "20px 0",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={serviceData[1].imageSrc} width={50} alt="award" />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {serviceData[1].title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body1"
                  fontWeight={300}
                >
                  {serviceData[1].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={serviceData[2].imageSrc} width={50} alt="award" />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {serviceData[2].title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body1"
                  fontWeight={300}
                >
                  {serviceData[2].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 100px 10px 10px",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={serviceData[3].imageSrc} width={50} alt="award" />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {serviceData[3].title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body1"
                  fontWeight={300}
                >
                  {serviceData[3].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                margin: "0 auto",
                justifyContent: "center",
              }}
            >
              <Image
                src={chooseUsImg}
                width={400}
                height={400}
                alt="choose us image"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
