// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/PrismaticBurst.jsx?raw";
import cssCode from "../../components/backgrounds/PrismaticBurst.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/PrismaticBurst",
  npm: "npx shadcn@latest add @react-bits/PrismaticBurst",
  yarn: "yarn dlx shadcn@latest add @react-bits/PrismaticBurst",
  bun: "bunx shadcn@latest add @react-bits/PrismaticBurst",
};

const usageCode = `import PrismaticBurst from './PrismaticBurst';

<div style={{ width: '100%', height: '100%', position: 'relative' }}>
  <PrismaticBurst
    animationType="rotate3d"
    intensity={2}
    speed={0.5}
    distort={0}
    paused={false}
    offset={{ x: 0, y: 0 }}
    hoverDampness={0.25}
    rayCount={0}
    mixBlendMode="lighten"
    colors={['#ff007a', '#4d3dff', '#ffffff']}
    color0="#A855F7"
    color1="#7C3AED"
    color2="#6366F1"
/>
</div>`;


export const PrismaticBurstDocs = {
  title: "Prismatic Burst",
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

export default PrismaticBurstDocs;
