// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/MagicBento.jsx?raw";
import cssCode from "../../components/components/MagicBento.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/MagicBento-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/MagicBento-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/MagicBento-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/MagicBento-JS-CSS",
};

const usageCode = `import MagicBento from './MagicBento'

<MagicBento 
  textAutoHide={true}
  enableStars
  enableSpotlight
  enableBorderGlow={true}
  enableTilt={false}
  enableMagnetism={false}
  clickEffect
  spotlightRadius={400}
  particleCount={12}
  glowColor="132, 0, 255"
  disableAnimations={false}
/>`;

export const MagicBentoDocs = {
  title: "Magic Bento",
  category: "Components Code",
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

export default MagicBentoDocs;
