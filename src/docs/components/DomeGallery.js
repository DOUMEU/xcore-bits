// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/DomeGallery.jsx?raw";
import cssCode from "../../components/components/DomeGallery.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/DomeGallery-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/DomeGallery-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/DomeGallery-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/DomeGallery-JS-CSS",
};

const usageCode = `import DomeGallery from './DomeGallery';
export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <DomeGallery
  fit={0.8}
  minRadius={600}
  maxVerticalRotationDeg={0}
  segments={34}
  dragDampening={2}
  grayscale
/>
    </div>
  );
}`;

export const DomeGalleryDocs = {
  title: "Dome Gallery",
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

export default DomeGalleryDocs;
