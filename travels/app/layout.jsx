import "@/assets/globals.css";
import { title } from "process";
import Navbar from "@/components/Navbar.jsx";

export const metadata = {
  title: "More-Ways | פיתוח אתרים, Full-Stack וקורסי תכנות",
  description:
    "More-Ways – פיתוח אתרים ואפליקציות מתקדמות, Full-Stack, MERN ו-Next.js. קורסי תכנות, לימוד פיתוח אתרים ופתרונות דיגיטליים לעסקים, תלמידים וסטארטאפים.",

  keywords: [
    "פיתוח אתרים",
    "בניית אתרים",
    "פיתוח אפליקציות",
    "Full Stack",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "MERN Stack",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "קורסי תכנות",
    "לימוד תכנות",
    "חוגי תכנות לילדים",
    "פיתוח אתרים לעסקים",
    "Web Development",
    "Web Applications",
    "Programming Courses",
    "Coding Education",
    "Software Development",
    "Startup Development",
    "More-Ways",
  ],
};

const MainLayout = ({ children }) => {
  return (
    <html lang="he">
      <body>
      <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};
export default MainLayout;
