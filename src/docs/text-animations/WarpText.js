// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/WarpText.jsx?raw";
import cssCode from "../../components/text-animations/WarpText.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/WarpText-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/WarpText-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/WarpText-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/WarpText-JS-CSS",
};

const usageCode = `import WarpText from './WarpText';

<WarpText
  text="Bend the moment"
  color="#f8f5ff"
  warpStrength={0.08}
  warpScale={1.7}
  speed={0.55}
  pointerInfluence={0.42}
  pointerStrength={0.38}
  refraction={0.018}
  ripple
  fontSize={116}
  fontWeight={800}
  style={{ height: '320px' }}
  fontFamily="inherit"
  letterSpacing={-0.06}
  lineHeight={0.9}
/>`;

export const WarpTextDocs = {
  title: "Warp Text",
  category: "Text Animations Code",
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

export default WarpTextDocs;