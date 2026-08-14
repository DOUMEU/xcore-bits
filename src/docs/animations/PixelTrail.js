// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/PixelTrail.jsx?raw";
import cssCode from "../../components/animations/PixelTrail.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/PixelTrail-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/PixelTrail-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/PixelTrail-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/PixelTrail-JS-CSS",
};

const usageCode = `import PixelTrail from './PixelTrail';

<div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>
  <PixelTrail
    gridSize={50}
    trailSize={0.1}
    maxAge={250}
    interpolate={5}
    color="#5227FF"
    gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
    gooeyEnabled
    gooStrength={2}
/>
</div>`;

export const PixelTrailDocs = {
  title: "Pixel Trail",
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

export default PixelTrailDocs;
