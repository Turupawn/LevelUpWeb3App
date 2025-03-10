import SlideSvg from "@/assets/svgs/content/slide.svg";
import { Box, Container, Stack, Typography } from "@mui/material";

import MoreContentSlide from "@/components/MoreContentSlide";

interface MoreContentProps {
  index: number;
}

const MoreContent: React.FC<MoreContentProps> = ({ index }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FAFAFA",
          py: ["30px", "60px"],
        }}
      >
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: ["20px", "40px"] }}
          >
            <Typography sx={{ fontSize: ["24px", "36px"] }}>
              More Content
            </Typography>
            <SlideSvg className="invisible sm:visible" />
          </Stack>
        </Container>
        <MoreContentSlide index={index}></MoreContentSlide>
      </Box>
    </>
  );
};

export default MoreContent;
