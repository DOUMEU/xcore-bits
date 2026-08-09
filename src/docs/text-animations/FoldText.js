// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/FoldText.jsx?raw";
import cssCode from "../../components/text-animations/FoldText.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/FoldText-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/FoldText-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/FoldText-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/FoldText-JS-CSS",
};

const usageCode = `import FoldText from './FoldText';

<FoldText
  text="Design unfolds"
  splitBy="char"
  hinge="top"
  trigger="mount"
  duration={0.65}
  stagger={0.045}
  ease="power3.out"
  perspective={700}
  creaseShading={0.55}
  fontSize={80}
  fontWeight={800}
  color="#f7f2e8"
/>`;

export const FoldTextDocs = {
  title: "Fold Text",
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

export default FoldTextDocs;