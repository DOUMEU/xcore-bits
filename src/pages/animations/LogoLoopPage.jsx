import DemoLayout from "../../components/DemoLayout";
import LogoLoop from "../../components/animations/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

function LogoLoopPage() {
  return (
    <DemoLayout>
      {/* react-icons는 currentColor를 쓰기 때문에 부모에서 색을 지정해야
          어두운 배경에서도 로고가 보인다. */}
      <div
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          color: "#fff",
        }}
      >
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#09090B"
          ariaLabel="Technology partners"
        />
      </div>
    </DemoLayout>
  );
}

export default LogoLoopPage;
