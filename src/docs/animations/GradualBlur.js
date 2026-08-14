// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/GradualBlur.jsx?raw";
import cssCode from "../../components/animations/GradualBlur.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/GradualBlur-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/GradualBlur-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/GradualBlur-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/GradualBlur-JS-CSS",
};

const usageCode = `// Component added by Ansh - github.com/ansh-dhanani

import GradualBlur from './GradualBlur';

<section style={{position: 'relative',height: 500,overflow: 'hidden'}}>
  <div style={{ height: '100%',overflowY: 'auto',padding: '6rem 2rem' }}>
    <!-- Content Here - such as an image or text -->
  </div>

  <GradualBlur
    target="parent"
    position="bottom"
    height="7rem"
    strength={4}
    divCount={5}
    curve="bezier"
    exponential
    opacity={1}
  />
</section>`;

export const GradualBlurDocs = {
  title: "Gradual Blur",
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

export default GradualBlurDocs;
