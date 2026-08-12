// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/Topography.jsx?raw";
import cssCode from "../../components/backgrounds/Topography.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Topography",
  npm: "npx shadcn@latest add @react-bits/Topography",
  yarn: "yarn dlx shadcn@latest add @react-bits/Topography",
  bun: "bunx shadcn@latest add @react-bits/Topography",
};

const usageCode = `import Topography from './Topography';

<div style={{ width: '100%', height: '100%', position: 'relative' }}>
  <Topography
    lowColor="#5227FF"
    midColor="#FF9FFC"
    highColor="#FFFFFF"
    speed={0.35}
    morphAmount={3}
    morphSpeed={0.05}
    bands={2}
    thickness={0.01}
    scale={2}
    pixelSize={1}
    glow={0.5}
    colorMode="elevation"
    contrast={3}
    brightness={1}
    fillBands={false}
    opacity={1}
    grain
    grainIntensity={0.05}
    mouseInteraction
    mouseRadius={0.3}
    mouseStrength={0.4}
  />
</div>`;

export const TopographyDocs = {
  title: "Topography",
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

export default TopographyDocs;
