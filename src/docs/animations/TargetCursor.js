// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/TargetCursor.jsx?raw";
import cssCode from "../../components/animations/TargetCursor.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/TargetCursor-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/TargetCursor-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/TargetCursor-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/TargetCursor-JS-CSS",
};

const usageCode = `import TargetCursor from './TargetCursor';

export default function App() {
  return (
    <div>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
  hoverDuration={0.2}
  cursorColor="#ffffff"
  cursorColorOnTarget="#B497CF"
/>
      
      <h1>Hover over the elements below</h1>
      <button className="cursor-target">Click me!</button>
      <div className="cursor-target">Hover target</div>
    </div>
  );
}`;

export const TargetCursorDocs = {
  title: "Target Cursor",
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

export default TargetCursorDocs;
