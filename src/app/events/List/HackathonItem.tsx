"use client";
import Button from "@/components/Button";
import useCheckViewport from "@/hooks/useCheckViewport";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";

const HackathonItem = (props) => {
  const { isMobile, isTablet, isPortrait } = useCheckViewport();
  const { content } = props;
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: [
          "1fr max-content",
          "220px min-content 200px 1fr max-content",
          "280px min-content 240px 1fr max-content",
        ],
        alignContent: ["space-between", "center"],
        alignItems: ["space-between", "center"],
        p: ["30px 28px", "22px 24px", "30px 38px"],
        height: ["auto", "auto", "118px"],
        columnGap: ["10px", "10px", "30px"],
        rowGap: ["10px", 0],
        backgroundColor: "rgba(232, 246, 40, 0.50)",
        borderRadius: "25px",
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontSize: ["20px", "20px", "24px"],
          fontWeight: 500,
          gridRow: ["1/2", "unset"],
          gridColumn: ["1/3", "unset"],
          height: ["58px", "auto"],
        }}
      >
        {content.name}
      </Typography>
      <Divider
        orientation="vertical"
        sx={{
          height: ["48px", "56px"],
          borderRightWidth: "2px",
          gridRow: ["2/3", "unset"],
          justifySelf: ["flex-start", "unset"],
        }}
      />
      <Stack
        direction="column"
        sx={{
          fontSize: ["16px", "16px", "20px"],
          lineHeight: ["20px", "24px", "24px"],
          fontWeight: 500,
          whiteSpace: ["pre-wrap", "nowrap"],
        }}
      >
        <p>{content.date}</p>
        <p>{content.location}</p>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          position: "relative",
          alignSelf: "flex-end",
          justifySelf: ["flex-end", "unset"],
          gridColumn: ["2/3", "unset"],
          gridRow: ["2/4", "unset"],

          bottom: ["8px", "-22px", "-30px"],
        }}
      >
        <Image
          src={content.image}
          width={130}
          height={130}
          alt={content.name}
          style={{
            position: isMobile ? "relative" : "absolute",
            width: isTablet ? "97px" : isMobile ? "auto" : "130px",
            height: isTablet ? "71px" : isMobile ? "80px" : "auto",
            bottom: isMobile ? "unset" : 0,
          }}
        ></Image>
      </Stack>
      <Button
        sx={{
          width: ["100% !important", "100px !important", "113px !important"],
          gridColumn: ["1/3", "unset"],
        }}
        href={content.url}
        disabled={!!content.buttonDisabled}
        onClick={() =>
          sendGAEvent("event", "hackathonClicked", { value: content.name })
        }
      >
        {content.buttonText}
      </Button>
    </Box>
  );
};

export default HackathonItem;
