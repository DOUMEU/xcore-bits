// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/DriftWall.jsx?raw";
import cssCode from "../../components/components/DriftWall.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/DriftWall-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/DriftWall-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/DriftWall-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/DriftWall-JS-CSS",
};

const usageCode = `import DriftWall from './DriftWall';

const items = [
  { image: 'https://picsum.photos/id/1015/600/400', title: 'Peaks', href: 'https://example.com/one' },
  { image: 'https://picsum.photos/id/1025/600/400', title: 'Pup', href: 'https://example.com/two' },
  { image: 'https://picsum.photos/id/1039/600/400', title: 'Falls', href: 'https://example.com/three' },
];

<div style={{ height: 600 }}>
  <DriftWall
    items={items}
    columns={6}
    tileWidth={280}
    tileHeight={150}
    gap={16}
    tilt={11}
    turn={-16}
    perspective={600}
    depth={20}
    speed={42}
    direction="down"
    variance={0.45}
    parallax={2}
    lift={80}
    fade={0.6}
    dim={0.4}
    overlayColor="#060010"
    radius={14}
    roll={7}
    pauseOnHover={false}
    grayscale={false}
/>
</div>`;

export const DriftWallDocs = {
  title: "Drift Wall",
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

export default DriftWallDocs;
