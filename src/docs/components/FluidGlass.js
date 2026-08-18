// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/FluidGlass.jsx?raw";

// FluidGlass는 CSS 파일이 없는 컴포넌트라 자리표시자만 둡니다.
const cssCode = `-`;

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/FluidGlass-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/FluidGlass-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/FluidGlass-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/FluidGlass-JS-CSS",
};

const usageCode = `// 이 구성 요소는 올바르게 작동하기 위해 3D 모델이 필요합니다.
// 저장소의 'public/assets/3d' 디렉터리에서 세 가지 예제 모델을 찾을 수 있습니다:
// - 'lens.glb'
// - 'bar.glb'
// - 'cube.glb'
// 이 모델들을 올바른 디렉터리에 두거나 경로를 적절히 수정하세요.

import FluidGlass from './FluidGlass'

<div style={{ height: '600px', position: 'relative' }}>
  <FluidGlass 
    mode="lens" // or "bar", "cube"
    lensProps={{
      scale: 0.25,
      ior: 1.15,
      thickness: 5,
      chromaticAberration: 0.1,
      transmission: 1,
      roughness: 0,
      anisotropy: 0.01
    }}
  />
</div>`;

export const FluidGlassDocs = {
  title: "Fluid Glass",
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

export default FluidGlassDocs;
