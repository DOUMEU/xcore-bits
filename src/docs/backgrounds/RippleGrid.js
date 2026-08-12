// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/RippleGrid.jsx?raw";
import cssCode from "../../components/backgrounds/RippleGrid.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/RippleGrid",
  npm: "npx shadcn@latest add @react-bits/RippleGrid",
  yarn: "yarn dlx shadcn@latest add @react-bits/RippleGrid",
  bun: "bunx shadcn@latest add @react-bits/RippleGrid",
};

const usageCode = `import RippleGrid from './RippleGrid';

<div style={{ height: '100%', position: 'relative', overflow: 'hidden'}}>
  <RippleGrid
    enableRainbow={false}
    gridColor="#ffffff"
    rippleIntensity={0.05}
    gridSize={10}
    gridThickness={15}
    fadeDistance={1.5}
    vignetteStrength={2}
    glowIntensity={0.1}
    opacity={1}
    gridRotation={0}
    mouseInteraction
    mouseInteractionRadius={1}
  />
</div>`;


export const RippleGridDocs = {
  title: "Ripple Grid",
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

export default RippleGridDocs;
