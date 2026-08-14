// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/ElasticMesh.jsx?raw";
import cssCode from "../../components/animations/ElasticMesh.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/ElasticMesh-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/ElasticMesh-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/ElasticMesh-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/ElasticMesh-JS-CSS",
};

const usageCode = `import ElasticMesh from './ElasticMesh';

<div style={{ width: 480, height: 320 }}>
  <ElasticMesh color1="#4F46E5" color2="#0EA5E9" />
</div>

<div style={{ width: 480, height: 320 }}>
  <ElasticMesh
    image="https://picsum.photos/seed/elastic/900/600"
    interaction="hover"
    tilt={14}
    shading={0.5}
    color1="#5227FF"
    color2="#B19EEF"
    showGrid
    gridDensity={20}
    gridOpacity={0.28}
    gridColor="#ffffff"
    highlight="#ffffff"
    borderRadius={25}
    stiffness={0.05}
    damping={0.2}
    grabRadius={0.6}
    pull={0.4}
    wobble={5}
    resolution={25}
    enabled
/>
</div>`;

export const ElasticMeshDocs = {
  title: "Elastic Mesh",
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

export default ElasticMeshDocs;
