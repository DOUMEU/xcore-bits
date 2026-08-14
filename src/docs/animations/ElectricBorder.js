// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/ElectricBorder.jsx?raw";
import cssCode from "../../components/animations/ElectricBorder.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/ElectricBorder-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/ElectricBorder-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/ElectricBorder-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/ElectricBorder-JS-CSS",
};

const usageCode = `// CREDIT
// Component inspired by @BalintFerenczy on X
// https://codepen.io/BalintFerenczy/pen/KwdoyEN
  
import ElectricBorder from './ElectricBorder'

<ElectricBorder
  color="#7df9ff"
  speed={1}
  chaos={0.12}
  thickness={2}
  style={{ borderRadius: 16 }}
>
  <div>
    <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
      A glowing, animated border wrapper.
    </p>
  </div>
</ElectricBorder>`;

export const ElectricBorderDocs = {
  title: "Electric Border",
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

export default ElectricBorderDocs;
