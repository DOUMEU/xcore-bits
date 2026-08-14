// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/PixelSwap.jsx?raw";
import cssCode from "../../components/animations/PixelSwap.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/PixelSwap-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/PixelSwap-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/PixelSwap-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/PixelSwap-JS-CSS",
};

const usageCode = `import PixelSwap from './PixelSwap';

<PixelSwap
  firstContent={
    <div className="click-prompt">
      <span>Click me</span>
    </div>
  }
  secondContent={
    <div className="found-message">
      <span>You found me</span>
    </div>
  }
  pixelSize={64}
  gap={0}
  pixelRadius={0}
  pixelSpin={0}
  pixelScale={0.35}
  duration={1400}
  pixelDuration={450}
  pattern="random"
  randomness={0}
  fade
  trigger="hover"
/>`;

export const PixelSwapDocs = {
  title: "Pixel Swap",
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

export default PixelSwapDocs;
