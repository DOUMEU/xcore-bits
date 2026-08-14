// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/MagicRings.jsx?raw";
import cssCode from "../../components/animations/MagicRings.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/MagicRings-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/MagicRings-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/MagicRings-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/MagicRings-JS-CSS",
};

const usageCode = `import MagicRings from './MagicRings';

<div style={{ width: '600px', height: '400px', position: 'relative' }}>
  <MagicRings
    color="#A855F7"
    colorTwo="#6366F1"
    ringCount={6}
    speed={1}
    attenuation={10}
    lineThickness={2}
    baseRadius={0.35}
    radiusStep={0.1}
    scaleRate={0.1}
    opacity={1}
    blur={0}
    noiseAmount={0.1}
    rotation={0}
    ringGap={1.5}
    fadeIn={0.7}
    fadeOut={0.5}
    followMouse={false}
    mouseInfluence={0.2}
    hoverScale={1.2}
    parallax={0.05}
    clickBurst={false}
  />
</div>`;

export const MagicRingsDocs = {
  title: "Magic Rings",
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

export default MagicRingsDocs;
