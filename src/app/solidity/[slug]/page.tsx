import { Typography, Stack, Container } from "@mui/material";

import { genMeta } from "@/utils/route";
import BackLink from "@/components/Back";

import EditorPanel from "./EditorPanel";
import Teaching from "./Teaching";
import LessonNavigation from "./LessonNavigation";
import markdownData from "../markdownData.json";
import LessonProgress from "./LessonProgress";

export async function generateStaticParams() {
  return markdownData.map((x) => x.id);
}

export const generateMetadata = genMeta(({ params: { slug } }) => ({
  titleSuffix: "Solidity Challenges",
  relativeURL: `/solidity/${slug}`,
}));

export default async function SolidityDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = markdownData.find((x) => x.id === params.slug);
  if (!data) return;

  return (
    <>
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", "1fr", "repeat(2, 50%)"],
          mt: ["60px", "80px"],
          px: [0, 0, "60px"],
        }}
      >
        <BackLink sx={{ pl: ["20px", "40px", 0] }}></BackLink>
        <Stack
          direction="column"
          spacing="14px"
          sx={{
            mt: ["20px", "20px", 0],
            mb: ["30px", "30px", "80px"],
            px: ["20px", "40px", 0],
          }}
        >
          <Typography sx={{ fontSize: ["36px", "48px"] }}>
            Lesson {data.lesson}:<br className="sm:hidden"></br> {data.name}
          </Typography>
          <Typography sx={{ fontSize: ["16px", "24px"] }}>
            {data.summary}
          </Typography>
          <LessonProgress />
        </Stack>
        <Typography
          sx={{
            fontSize: "13px",
            color: "#604CD2",
            backgroundColor: "rgba(164, 148, 255, 0.30)",
            p: "8px 15px",
            textAlign: "center",
            display: ["block", "block", "none"],
          }}
        >
          Visit desktop version for better experiences.
        </Typography>
        <Teaching params={params}></Teaching>
        <EditorPanel data={data} />
      </Container>
      <LessonNavigation lessonId={params.slug} />
    </>
  );
}
