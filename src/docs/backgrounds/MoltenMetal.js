// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/MoltenMetal.jsx?raw";
import cssCode from "../../components/backgrounds/MoltenMetal.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/MoltenMetal-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/MoltenMetal-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/MoltenMetal-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/MoltenMetal-JS-CSS",
};

const usageCode = `import MoltenMetal from './MoltenMetal';

<div style={{ width: '100%', height: '100%', position: 'relative' }}>
  <MoltenMetal
    color1="#5227FF"
    color2="#FF9FFC"
    color3="#FFFFFF"
    speed={0.35}
    scale={4}
    detail={3}
    glow={1.6}
    coreSize={0.1}
    swirl={1}
    fold={-0.2}
    blackPoint={0.05}
    brightness={1.3}
    colorMode="molten"
    grain
    grainIntensity={0.05}
    mouseInteraction
    mouseStrength={0.3}
    opacity={1}
  />
</div>`;


export const MoltenMetalDocs = {
  title: "Molten Metal",
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

export default MoltenMetalDocs;
