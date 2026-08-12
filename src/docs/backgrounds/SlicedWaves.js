// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/SlicedWaves.jsx?raw";
import cssCode from "../../components/backgrounds/SlicedWaves.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/SlicedWaves",
  npm: "npx shadcn@latest add @react-bits/SlicedWaves",
  yarn: "yarn dlx shadcn@latest add @react-bits/SlicedWaves",
  bun: "bunx shadcn@latest add @react-bits/SlicedWaves",
};

const usageCode = `import SlicedWaves from './SlicedWaves';

<div style={{ width: '100%', height: '100%', position: 'relative' }}>
  <SlicedWaves
    color1="#FF9FFC"
    color2="#5227FF"
    color3="#B497CF"
    columns={14}
    rows={8}
    barThickness={0.1}
    speed={0.35}
    travel={0.7}
    waveSpread={0.9}
    rowOffset={1}
    softness={0.05}
    glow={0}
    brightness={1}
    contrast={1}
    opacity={0.5}
    orientation="horizontal"
    alternate={false}
    mouseInteraction
    mouseStrength={1}
    mouseRadius={0.3}
    grain
    grainIntensity={0.05}
  />
</div>`;

export const SlicedWavesDocs = {
  title: "Sliced Waves",
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

export default SlicedWavesDocs;
