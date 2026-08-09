// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/StrokeText.jsx?raw";
import cssCode from "../../components/text-animations/StrokeText.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/StrokeText-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/StrokeText-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/StrokeText-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/StrokeText-JS-CSS",
};

const usageCode = `import StrokeText from './StrokeText';

<StrokeText
  text="Draw Attention"
  strokeColor="#A78BFA"
  fillColor="#F8FAFC"
  strokeWidth={1.4}
  drawDuration={1.6}
  fillDelay={0.2}
  stagger={0.05}
  ease="power2.out"
  trigger="mount"
  fillMode="wipe"
  fontSize={128}
  fontWeight={800}
  letterSpacing={-4}
  reverse={false}
/>`;


export const StrokeTextDocs = {
  title: "Stroke Text",
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

export default StrokeTextDocs;