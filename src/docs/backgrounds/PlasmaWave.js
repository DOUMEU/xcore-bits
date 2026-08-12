// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/PlasmaWave.jsx?raw";
import cssCode from "../../components/backgrounds/PlasmaWave.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/PlasmaWave",
  npm: "npx shadcn@latest add @react-bits/PlasmaWave",
  yarn: "yarn dlx shadcn@latest add @react-bits/PlasmaWave",
  bun: "bunx shadcn@latest add @react-bits/PlasmaWave",
};

const usageCode = `import PlasmaWave from './PlasmaWave';
  
<PlasmaWave
  colors={["#A855F7","#06B6D4"]}
  speed1={0.05}
  speed2={0.05}
  focalLength={0.8}
  bend1={1}
  bend2={0.5}
  dir2={1}
  rotationDeg={0}
/>`;


export const PlasmaWaveDocs = {
  title: "Plasma Wave",
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

export default PlasmaWaveDocs;
