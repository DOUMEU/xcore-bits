// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/Silk.jsx?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Silk",
  npm: "npx shadcn@latest add @react-bits/Silk",
  yarn: "yarn dlx shadcn@latest add @react-bits/Silk",
  bun: "bunx shadcn@latest add @react-bits/Silk",
};

const usageCode = `import Silk from './Silk';

<Silk
  speed={5}
  scale={1}
  color="#5227FF"
  noiseIntensity={1.5}
  rotation={0}
/>`;

const cssCode = `-`;

export const SilkDocs = {
  title: "Silk",
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

export default SilkDocs;
