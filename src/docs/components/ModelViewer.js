// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/ModelViewer.jsx?raw";

const cssCode = `-`;

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/ModelViewer-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/ModelViewer-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/ModelViewer-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/ModelViewer-JS-CSS",
};

const usageCode = `import ModelViewer from './ModelViewer';

<ModelViewer
  url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
  width={400}
  height={400}
  modelXOffset={0.5}
  modelYOffset={0}
  enableMouseParallax
  enableHoverRotation
  environmentPreset="forest"
  fadeIn={false}
  autoRotate={false}
  autoRotateSpeed={0.35}
  showScreenshotButton
/>`;

export const ModelViewerDocs = {
  title: "Model Viewer",
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

export default ModelViewerDocs;
