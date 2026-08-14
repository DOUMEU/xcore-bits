// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/HalftoneReveal.jsx?raw";
import cssCode from "../../components/animations/HalftoneReveal.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/HalftoneReveal-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/HalftoneReveal-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/HalftoneReveal-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/HalftoneReveal-JS-CSS",
};

const usageCode = `import HalftoneReveal from './HalftoneReveal';

<div style={{ height: '500px', position: 'relative' }}>
  <HalftoneReveal
    src="https://picsum.photos/seed/halftone-reveal/1200/800"
    inkColor="#141414"
    paperColor="#fff7e6"
    mode="mono"
    dotDensity={71}
    angle={45}
    revealRadius={0.4}
    dotSize={1}
    shape="circle"
    contrast={1.15}
    invert={false}
    edge={0.8}
    follow={0.37}
    idleReveal={0}
    trigger="hover"
/>
</div>`;

export const HalftoneRevealDocs = {
  title: "Halftone Reveal",
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

export default HalftoneRevealDocs;
