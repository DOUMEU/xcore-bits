// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/Radar.jsx?raw";
import cssCode from "../../components/backgrounds/Radar.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Radar",
  npm: "npx shadcn@latest add @react-bits/Radar",
  yarn: "yarn dlx shadcn@latest add @react-bits/Radar",
  bun: "bunx shadcn@latest add @react-bits/Radar",
};

const usageCode = `import Radar from './Radar';
  
<Radar
  speed={1}
  scale={0.5}
  ringCount={10}
  spokeCount={10}
  ringThickness={0.05}
  spokeThickness={0.01}
  sweepSpeed={1}
  sweepWidth={2}
  sweepLobes={1}
  color="#9f29ff"
  backgroundColor="#000000"
  falloff={2}
  brightness={1}
  enableMouseInteraction
  mouseInfluence={0.1}
/>`;


export const RadarDocs = {
  title: "Radar",
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

export default RadarDocs;
