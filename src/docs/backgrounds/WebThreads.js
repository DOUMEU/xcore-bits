// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/WebThreads.jsx?raw";
import cssCode from "../../components/backgrounds/WebThreads.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/WebThreads",
  npm: "npx shadcn@latest add @react-bits/WebThreads",
  yarn: "yarn dlx shadcn@latest add @react-bits/WebThreads",
  bun: "bunx shadcn@latest add @react-bits/WebThreads",
};

const usageCode = `import WebThreads from './WebThreads';

<WebThreads
  color1="#5227FF"
  color2="#FF9FFC"
  color3="#FFFFFF"
  speed={0.2}
  threadCount={6}
  frequency={5}
  spread={0.18}
  taper={1}
  position={0.5}
  fanMode="center"
  glow={0.02}
  falloff={0.6}
  thickness={1.1}
  brightness={0.6}
  opacity={1}
  mirror
  shimmer={false}
  grain
  grainIntensity={0.05}
  mouseInteraction
  mouseStrength={0.3}
/>`;

export const WebThreadsDocs = {
  title: "Web Threads",
  category: "Backgrounds Code",
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

export default WebThreadsDocs;
