// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/AnimatedContent.jsx?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/AnimatedContent-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/AnimatedContent-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/AnimatedContent-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/AnimatedContent-JS-CSS",
};

const usageCode = `import AnimatedContent from './AnimatedContent'

<AnimatedContent
  distance={100}
  direction="vertical"
  reverse={false}
  duration={0.8}
  ease="power3.out"
  initialOpacity={0}
  animateOpacity
  scale={1}
  threshold={0.1}
  delay={0}
>
  <div>Content to Animate</div>
</AnimatedContent>`;

const cssCode = `-`;

export const AnimatedContentDocs = {
  title: "Animated Content",
  category: "Animations Code",
  install: {
    defaultManager: "pnpm",
    commands: installCommands,
  },

  usage: {
    language: "jsx",
    code: usageCode,
  },

  code: [
    {
      id: "jsx",
      label: "jsx",
      language: "jsx",
      code: componentCode,
    },
    {
      id: "css",
      label: "css",
      language: "css",
      code: cssCode,
    },
  ],
};

export default AnimatedContentDocs;
