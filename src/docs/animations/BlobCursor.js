// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/BlobCursor.jsx?raw";
import cssCode from "../../components/animations/BlobCursor.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/BlobCursor-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/BlobCursor-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/CBlobCursorubes-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/BlobCursor-JS-CSS",
};

const usageCode = `import BlobCursor from './BlobCursor';

<BlobCursor
  blobType="circle"
  fillColor="#5227FF"
  trailCount={3}
  sizes={[100,125,125]}
  innerSizes={[100,35,35]}
  innerColor="rgba(255,255,255,0.8)"
  opacities={[0.6,0.6,0.6]}
  shadowColor="rgba(0,0,0,0.75)"
  shadowBlur={5}
  shadowOffsetX={2}
  shadowOffsetY={-9}
  filterStdDeviation={30}
  useFilter={true}
  fastDuration={0.01}
  slowDuration={1}
  zIndex={100}
/>`;

export const BlobCursorDocs = {
  title: "Blob Cursor",
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

export default BlobCursorDocs;
