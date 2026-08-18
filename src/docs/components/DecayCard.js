// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/DecayCard.jsx?raw";
import cssCode from "../../components/components/DecayCard.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/DecayCard-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/DecayCard-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/DecayCard-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/DecayCard-JS-CSS",
};

const usageCode = `import DecayCard from './DecayCard';

<DecayCard width={200} height={300} image="https://picsum.photos/300/400?grayscale">
  <h2>Decay<br
  width={300}
  height={400}
  baseFrequency={0.015}
  numOctaves={5}
  seed={4}
  maxDisplacement={400}
  movementBound={50}
/>Card</h2>
</DecayCard>`;

export const DecayCardDocs = {
  title: "Decay Card",
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

export default DecayCardDocs;
