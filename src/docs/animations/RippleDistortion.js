// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/RippleDistortion.jsx?raw";
import cssCode from "../../components/animations/RippleDistortion.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/RippleDistortion-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/RippleDistortion-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/RippleDistortion-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/RippleDistortion-JS-CSS",
};

const usageCode = `import RippleDistortion from './RippleDistortion';

<div style={{ width: '600px', height: '400px' }}>
  <RippleDistortion
    src="/hero.jpg"
    brushSize={150}
    strength={0.2}
    swirl={1}
    rings={4}
    grayscale
    spread={5}
    fade={3}
    spacing={15}
    dispersion={0}
    glint={0}
    tint="#a855f7"
    tintAmount={0.1}
    highlightColor="#ffffff"
    trigger="hover"
    clickStrength={2}
    quality="low"
    enabled
/>
</div>`;

export const RippleDistortionDocs = {
  title: "Ripple Distortion",
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

export default RippleDistortionDocs;
