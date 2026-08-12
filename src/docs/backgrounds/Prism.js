// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/Prism.jsx?raw";
import cssCode from "../../components/backgrounds/Prism.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Prism",
  npm: "npx shadcn@latest add @react-bits/Prism",
  yarn: "yarn dlx shadcn@latest add @react-bits/Prism",
  bun: "bunx shadcn@latest add @react-bits/Prism",
};

const usageCode = `import Prism from './Prism';

<div style={{ width: '100%', height: '100%', position: 'relative' }}>
  <Prism
    animationType="rotate"
    timeScale={0.5}
    height={3.5}
    baseWidth={5.5}
    scale={3.6}
    hueShift={0}
    colorFrequency={1}
    noise={0}
    glow={1}
  />
</div>`;


export const PrismDocs = {
  title: "Prism",
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

export default PrismDocs;
