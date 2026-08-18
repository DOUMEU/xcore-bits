import componentCode from "../../components/components/InfiniteMenu.jsx?raw";
import cssCode from "../../components/components/InfiniteMenu.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/InfiniteMenu-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/InfiniteMenu-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/InfiniteMenu-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/InfiniteMenu-JS-CSS",
};

const usageCode = `import GlassIcons from './GlassIcons'
import { FiFileText, FiBook, FiHeart, FiCloud, FiEdit, FiBarChart2 } from 'react-icons/fi'

// color에 blue / purple / red / indigo / orange / green을 주면
// 컴포넌트에 정의된 그라디언트가 적용됩니다.
// 그 밖의 값(예: '#444')은 단색 배경으로 그대로 쓰입니다.
const items = [
  { icon: <FiFileText />, color: 'blue', label: 'Files' },
  { icon: <FiBook />, color: 'purple', label: 'Books' },
  { icon: <FiHeart />, color: 'red', label: 'Health' },
  { icon: <FiCloud />, color: 'indigo', label: 'Weather' },
  { icon: <FiEdit />, color: 'orange', label: 'Notes' },
  { icon: <FiBarChart2 />, color: 'green', label: 'Stats' }
];

<div style={{ height: '600px', position: 'relative' }}>
  <GlassIcons items={items} className="custom-class" />
</div>`;

export const InfiniteMenuDocs = {
  title: "Infinite Menu",
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

export default InfiniteMenuDocs;
