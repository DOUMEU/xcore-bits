// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/Noise.jsx?raw";
import cssCode from "../../components/backgrounds/Noise.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Noise-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/Noise-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/Noise-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/Noise-JS-CSS",
};

const usageCode = `import Noise from './Noise;'

<div style={{width: '600px', height: '400px', position: 'relative', overflow: 'hidden'}}>
  <Noise
    patternSize={250}
    patternScaleX={2}
    patternScaleY={2}
    patternRefreshInterval={2}
    patternAlpha={15}
  />
</div>`;


export const NoiseDocs = {
  title: "Noise",
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

export default NoiseDocs;
