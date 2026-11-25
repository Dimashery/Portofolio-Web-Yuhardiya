import type { IconType } from "react-icons";
import { FaGitAlt, FaGithub, FaDocker, FaPython, FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiPostman, SiNestjs, SiTypescript, SiLaragon } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs, GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";

export type TechIcon = {
    name: string;
    Icon: IconType
}

export const techIcon: TechIcon[] = [
  { name: "Git", Icon: FaGitAlt },
  { name: "VS Code Insiders", Icon: VscVscodeInsiders },
  { name: "GitHub", Icon: FaGithub },
  { name: "Docker", Icon: FaDocker },
  { name: "Postman", Icon: SiPostman },
  { name: "Next.js", Icon: RiNextjsFill },
  { name: "NestJS", Icon: SiNestjs },
  { name: "Tailwind CSS", Icon: RiTailwindCssFill },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: GrReactjs },
  { name: "Python", Icon: FaPython },
  { name: "JavaScript", Icon: IoLogoJavascript },
  { name: "CSS3", Icon: FaCss3Alt },
  { name: "HTML5", Icon: FaHtml5 },
  { name: "Laragon", Icon: SiLaragon },
  { name: "MySQL", Icon: GrMysql },
];