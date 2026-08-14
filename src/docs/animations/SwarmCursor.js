// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/SwarmCursor.jsx?raw";
import cssCode from "../../components/animations/SwarmCursor.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/SwarmCursor-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/SwarmCursor-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/SwarmCursor-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/SwarmCursor-JS-CSS",
};

const usageCode = `<div style={{ position: 'relative', width: '100%', height: '450px' }}>
  <SwarmCursor
    color="#ffffff"
    accentColor="#ffffff"
    count={8}
    size={5}
    speed={2.5}
    spread={100}
    wander={0.25}
    trail={0.75}
    scatterOnClick
  >
    {/* Your content here */}
  </SwarmCursor>
</div>`;

export const SwarmCursorDocs = {
  title: "Swarm Cursor",
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

export default SwarmCursorDocs;
