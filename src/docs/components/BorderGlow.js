// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/BorderGlow.jsx?raw";
import cssCode from "../../components/components/BorderGlow.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/BorderGlow-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/BorderGlow-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/BorderGlow-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/BorderGlow-JS-CSS",
};

const usageCode = `import BorderGlow from './BorderGlow';

<BorderGlow
  edgeSensitivity={30}
  glowColor="40 80 80"
  backgroundColor="#120F17"
  borderRadius={28}
  glowRadius={40}
  glowIntensity={1}
  coneSpread={25}
  animated={false}
  colors={['#c084fc', '#f472b6', '#38bdf8']}
>
  <div style={{ padding: '2em' }}>
    <h2>Your Content Here</h2>
    <p>Hover near the edges to see the glow.</p>
  </div>
</BorderGlow>`;

export const BorderGlowDocs = {
  title: "Border Glow",
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

export default BorderGlowDocs;
