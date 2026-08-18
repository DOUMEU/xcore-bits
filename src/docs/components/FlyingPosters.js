// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/FlyingPosters.jsx?raw";
import cssCode from "../../components/components/FlyingPosters.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/FlyingPosters-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/FlyingPosters-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/FlyingPosters-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/FlyingPosters-JS-CSS",
};

const usageCode = `import FlyingPosters from './FlyingPosters'

const items = [
  'https://picsum.photos/500/500?grayscale', 
  'https://picsum.photos/600/600?grayscale', 
  'https://picsum.photos/400/400?grayscale'
];

<div style={{ height: '600px', position: 'relative' }}>
  <FlyingPosters items={items}
  items={["https://picsum.photos/500/500?grayscale","https://picsum.photos/600/600?grayscale","https://picsum.photos/400/400?grayscale"]}
  planeWidth={320}
  planeHeight={320}
  distortion={3}
  scrollEase={0.01}
  cameraFov={45}
  cameraZ={20}
/>
</div>`;

export const FlyingPostersDocs = {
  title: "Flying Posters",
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

export default FlyingPostersDocs;
