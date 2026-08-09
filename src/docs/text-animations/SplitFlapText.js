// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/SplitFlapText.jsx?raw";
import cssCode from "../../components/text-animations/SplitFlapText.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/SplitFlapText-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/SplitFlapText-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/SplitFlapText-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/SplitFlapText-JS-CSS",
};

const usageCode = `import SplitFlapText from './SplitFlapText';

<SplitFlapText
  words={["LAUNCH READY","SYNC ONLINE","SIGNAL LIVE"]}
  flipDuration={0.12}
  stagger={0.06}
  cycleDelay={2400}
  charset="alphanumeric"
  flipsPerChar={8}
  tileColor="#111827"
  textColor="#f8fafc"
  tileRadius={8}
  gap={6}
  fontSize={52}
  loop
  padTo={12}
/>`;

export const SplitFlapTextDocs = {
  title: "Split Flap Text",
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

export default SplitFlapTextDocs;