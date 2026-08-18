// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/GooeyNav.jsx?raw";
import cssCode from "../../components/components/GooeyNav.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/GooeyNav-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/GooeyNav-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/GooeyNav-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/GooeyNav-JS-CSS",
};

const usageCode = `import GooeyNav from './GooeyNav'

// update with your own items
const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

<div style={{ height: '600px', position: 'relative' }}>
  <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
</div>`;

export const GooeyNavDocs = {
  title: "Gooey Nav",
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

export default GooeyNavDocs;
