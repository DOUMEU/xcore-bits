// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/Waves.jsx?raw";
import cssCode from "../../components/backgrounds/Waves.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Waves",
  npm: "npx shadcn@latest add @react-bits/Waves",
  yarn: "yarn dlx shadcn@latest add @react-bits/Waves",
  bun: "bunx shadcn@latest add @react-bits/Waves",
};

const usageCode = `import Waves from './Waves';

<Waves
  lineColor="#ffffff"
  backgroundColor="rgba(255, 255, 255, 0.2)"
  waveSpeedX={0.0125}
  waveSpeedY={0.01}
  waveAmpX={40}
  waveAmpY={20}
  friction={0.9}
  tension={0.01}
  maxCursorMove={120}
  xGap={12}
  yGap={36}
/>`;

export const WavesDocs = {
  title: "Waves",
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

export default WavesDocs;
