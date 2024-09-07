import StackIcon from "tech-stack-icons";
import {
  RemixSVG,
  WebflowSVG,
  ZustandSVG,
  Tensorflow,
  TanstackQuery,
  VercelSVG,
} from "../assets/IconFunctions";

export const globalTechstackSVG = [
  { techIcon: <StackIcon name="python" />, iconName: "Python" },
  { techIcon: <StackIcon name="java" />, iconName: "Java" },
  { techIcon: <StackIcon name="dart" />, iconName: "Dart" },
  { techIcon: <StackIcon name="flutter" />, iconName: "Flutter" },
  { techIcon: <StackIcon name="mysql" />, iconName: "MySQL" },
  { techIcon: <StackIcon name="js" />, iconName: "Javascript" },
  { techIcon: <StackIcon name="html5" />, iconName: "HTML5" },
  { techIcon: <StackIcon name="css3" />, iconName: "CSS3" },
  { techIcon: <StackIcon name="reactjs" />, iconName: "ReactJS" },
  {
    techIcon: <StackIcon name="nextjs2" className="stroke-white" />,
    iconName: "NextJS",
  },
  { techIcon: <RemixSVG />, iconName: "RemixJS" },
  {
    techIcon: <StackIcon name="shadcnui" className=" bg-white " />,
    iconName: "Shadcn",
  },
  { techIcon: <WebflowSVG />, iconName: "Webflow" },
  {
    techIcon: <StackIcon name="github" className="stroke-white" />,
    iconName: "Github",
  },
  { techIcon: <StackIcon name="zod" />, iconName: "Zod" },
  { techIcon: <StackIcon name="tailwindcss" />, iconName: "Tailwind" },
  { techIcon: <ZustandSVG />, iconName: "Zustand" },
  { techIcon: <Tensorflow />, iconName: "Tensorflow" },
  {
    techIcon: <StackIcon name="framer" className="stroke-white" />,
    iconName: "Framer",
  },
  { techIcon: <StackIcon name="canva" />, iconName: "Canva" },
  { techIcon: <StackIcon name="figma" />, iconName: "Figma" },
  { techIcon: <StackIcon name="postman" />, iconName: "Postman" },
  { techIcon: <StackIcon name="reactquery" />, iconName: "Tanstack Query" },
  { techIcon: <VercelSVG />, iconName: "Vercel" },
];
