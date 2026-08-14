// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/MetaBalls.jsx?raw";
import cssCode from "../../components/animations/MetaBalls.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/MetaBalls-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/MetaBalls-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/MetaBalls-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/MetaBalls-JS-CSS",
};

const usageCode = `import MetaBalls from './MetaBalls';

<MetaBalls
  color="#ffffff"
  cursorBallColor="#ffffff"
  cursorBallSize={2}
  ballCount={15}
  animationSize={30}
  enableMouseInteraction
  enableTransparency={true}
  hoverSmoothness={0.15}
  clumpFactor={1}
  speed={0.3}
/>`;

export const MetaBallsDocs = {
  title: "Meta Balls",
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

export default MetaBallsDocs;
