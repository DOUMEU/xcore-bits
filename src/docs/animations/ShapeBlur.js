// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/ShapeBlur.jsx?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/ShapeBlur-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/ShapeBlur-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/ShapeBlur-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/ShapeBlur-JS-CSS",
};

const usageCode = `import ShapeBlur from './ShapeBlur';

<div style={{position: 'relative', height: '500px', overflow: 'hidden'}}>
  <ShapeBlur
    variation={0}
    pixelRatioProp={window.devicePixelRatio || 1}
    shapeSize={1}
    roundness={0.5}
    borderSize={0.05}
    circleSize={0.25}
    circleEdge={1}
  />
</div>`;

const cssCode = `-`;

export const ShapeBlurDocs = {
  title: "Shape Blur",
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

export default ShapeBlurDocs;
