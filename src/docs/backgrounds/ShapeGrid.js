// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/ShapeGrid.jsx?raw";
import cssCode from "../../components/backgrounds/ShapeGrid.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/ShapeGrid",
  npm: "npx shadcn@latest add @react-bits/ShapeGrid",
  yarn: "yarn dlx shadcn@latest add @react-bits/ShapeGrid",
  bun: "bunx shadcn@latest add @react-bits/ShapeGrid",
};

const usageCode = `import ShapeGrid from './ShapeGrid';
  
<ShapeGrid 
speed={0.5}
squareSize={40}
direction='diagonal' // up, down, left, right, diagonal
borderColor="#2F293A"
hoverFillColor='#222'
shape='square' // square, hexagon, circle, triangle
hoverTrailAmount={0} // number of trailing hovered shapes (0 = no trail)
  direction="diagonal"
  hoverColor="#222222"
  size={40}
  shape="square"
/>`;


export const ShapeGridDocs = {
  title: "Shape Grid",
  category: "Backgrounds Code",
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

export default ShapeGridDocs;
