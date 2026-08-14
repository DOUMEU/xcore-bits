// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/Cubes.jsx?raw";
import cssCode from "../../components/animations/Cubes.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Cubes-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/Cubes-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/Cubes-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/Cubes-JS-CSS",
};

const usageCode = `// CREDIT
// Component inspired from Can Tastemel's original work for the lambda.ai landing page
// https://cantastemel.com
  
import Cubes from './Cubes'

<div style={{ height: '600px', position: 'relative' }}>
  <Cubes 
    gridSize={8}
    maxAngle={45}
    radius={3}
    borderStyle="2px dashed #B497CF"
    faceColor="#1a1a2e"
    rippleColor="#ff6b6b"
    rippleSpeed={1.5}
    autoAnimate
    rippleOnClick
  />
</div>`;

export const CubesDocs = {
  title: "Cubes",
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

export default CubesDocs;
