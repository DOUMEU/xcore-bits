// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/Strands.jsx?raw";
import cssCode from "../../components/animations/Strands.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Strands-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/Strands-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/Strands-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/Strands-JS-CSS",
};

const usageCode = `import Strands from './Strands';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Strands
    colors={["#F97316","#7C3AED","#06B6D4"]}
    count={3}
    speed={0.5}
    amplitude={1}
    waviness={1}
    thickness={0.7}
    glow={2.6}
    taper={3}
    spread={1}
    intensity={0.6}
    saturation={2}
    opacity={1}
    scale={1.5}
    glass={false}
    refraction={1}
    dispersion={1}
    glassSize={1}
    hueShift={0}
/>
</div>`;

export const StrandsDocs = {
  title: "Strands",
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

export default StrandsDocs;
