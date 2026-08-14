// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/StickerPeel.jsx?raw";
import cssCode from "../../components/animations/StickerPeel.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/StickerPeel-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/StickerPeel-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/StickerPeel-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/StickerPeel-JS-CSS",
};

const usageCode = `import StickerPeel from './StickerPeel'
import logo from './assets/sticker.png'
  
<StickerPeel
  imageSrc={logo}
  width={200}
  rotate={0}
  peelBackHoverPct={30}
  peelBackActivePct={40}
  shadowIntensity={0.5}
  lightingIntensity={0.1}
  initialPosition={{ x: -100, y: 100 }}
  peelDirection={0}
/>`;

export const StickerPeelDocs = {
  title: "Sticker Peel",
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

export default StickerPeelDocs;
