// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/Threads.jsx?raw";
import cssCode from "../../components/backgrounds/Threads.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Threads",
  npm: "npx shadcn@latest add @react-bits/Threads",
  yarn: "yarn dlx shadcn@latest add @react-bits/Threads",
  bun: "bunx shadcn@latest add @react-bits/Threads",
};

const usageCode = `import Threads from './Threads';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Threads
    amplitude={1}
    distance={0}
    enableMouseInteraction
  />
</div>`;

export const ThreadsDocs = {
  title: "Threads",
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

export default ThreadsDocs;
