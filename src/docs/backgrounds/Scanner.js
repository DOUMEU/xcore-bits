// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/Scanner.jsx?raw";
import cssCode from "../../components/backgrounds/Scanner.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Scanner",
  npm: "npx shadcn@latest add @react-bits/Scanner",
  yarn: "yarn dlx shadcn@latest add @react-bits/Scanner",
  bun: "bunx shadcn@latest add @react-bits/Scanner",
};

const usageCode = `import Scanner from './Scanner';

<div style={{ width: '100%', height: '100%', position: 'relative' }}>
  <Scanner
    color1="#5227FF"
    color2="#FF9FFC"
    color3="#FFFFFF"
    speed={0.5}
    sweepSpeed={0.25}
    sweepWidth={1.6}
    sweepFalloff={6}
    scale={1.5}
    frequency={2}
    ripple={0.22}
    bandDensity={11}
    lineSharpness={5.5}
    glow={0.22}
    scanDirection="vertical"
    colorSpread={0.7}
    brightness={1}
    contrast={1.15}
    softness={1.4}
    vignette={0.45}
    scanline
    grain
    grainIntensity={0.05}
    opacity={1}
    mouseInteraction
    mouseRadius={0.5}
    mouseStrength={0.5}
  />
</div>`;


export const ScannerDocs = {
  title: "Scanner",
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

export default ScannerDocs;
