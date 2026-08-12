// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/Plasma.jsx?raw";
import cssCode from "../../components/backgrounds/Plasma.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Plasma",
  npm: "npx shadcn@latest add @react-bits/Plasma",
  yarn: "yarn dlx shadcn@latest add @react-bits/Plasma",
  bun: "bunx shadcn@latest add @react-bits/Plasma",
};

const usageCode = `import Plasma from './Plasma';

<div style={{ width: '100%', height: '100%', position: 'relative' }}>
  <Plasma 
    color="#B497CF"
    speed={1}
    direction="forward"
    scale={1}
    opacity={1}
    mouseInteractive={false}
    renderScale={0.55}
    maxDpr={1.5}
    targetFps={60}
    iterations={60}
/>
</div>`;


export const PlasmaDocs = {
  title: "Plasma",
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

export default PlasmaDocs;
