// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/FlowingMenu.jsx?raw";
import cssCode from "../../components/components/FlowingMenu.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/FlowingMenu-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/FlowingMenu-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/FlowingMenu-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/FlowingMenu-JS-CSS",
};

const usageCode = `import FlowingMenu from './FlowingMenu'

const demoItems = [
  { link: '#', text: 'Mojave', image: 'https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=600&h=400&fit=crop&sat=-100&auto=format' },
  { link: '#', text: 'Sonoma', image: 'https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format' },
  { link: '#', text: 'Monterey', image: 'https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=600&h=400&fit=crop&sat=-100&auto=format' },
  { link: '#', text: 'Sequoia', image: 'https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format' }
];

<div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems}
  speed={15}
  textColor="#ffffff"
  bgColor="#120F17"
  marqueeBgColor="#ffffff"
  marqueeTextColor="#120F17"
  borderColor="#ffffff"
/>
</div>`;

export const FlowingMenuDocs = {
  title: "Flowing Menu",
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

export default FlowingMenuDocs;
