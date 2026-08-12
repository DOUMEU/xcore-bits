// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/SoftAurora.jsx?raw";
import cssCode from "../../components/backgrounds/SoftAurora.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/SoftAurora",
  npm: "npx shadcn@latest add @react-bits/SoftAurora",
  yarn: "yarn dlx shadcn@latest add @react-bits/SoftAurora",
  bun: "bunx shadcn@latest add @react-bits/SoftAurora",
};

const usageCode = `import SoftAurora from './SoftAurora';
  
<SoftAurora
  speed={0.6}
  scale={1.5}
  brightness={1}
  color1="#f7f7f7"
  color2="#e100ff"
  noiseFrequency={2.5}
  noiseAmplitude={1}
  bandHeight={0.5}
  bandSpread={1}
  octaveDecay={0.1}
  layerOffset={0}
  colorSpeed={1}
  enableMouseInteraction
  mouseInfluence={0.25}
/>`;

export const SoftAuroraDocs = {
  title: "Soft Aurora",
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

export default SoftAuroraDocs;
