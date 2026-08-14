// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/ScrollExpand.jsx?raw";
import cssCode from "../../components/animations/ScrollExpand.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/ScrollExpand-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/ScrollExpand-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/ScrollExpand-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/ScrollExpand-JS-CSS",
};

const usageCode = `import ScrollExpand from './ScrollExpand';

<ScrollExpand
  src="/hero.jpg"
  alt="Product hero"
  title="Built to scale"
  scrollHint="Scroll inside the frame"
  useWindowScroll
>
  <h2>Every pixel, everywhere</h2>
  <p>The frame opens up as you scroll and hands the whole stage to your media.</p>
</ScrollExpand>

<div style={{ height: '520px' }}>
  <ScrollExpand
    src="/hero.jpg"
    title="Built to scale"
    startWidth={42}
    startHeight={58}
    startRadius={24}
    endRadius={0}
    mediaZoom={1.35}
    scrollDistance={1.2}
    holdDistance={0.35}
    smoothing={0.1}
    overlayScrim={0.45}
    enabled
  />
</div>`;

export const ScrollExpandDocs = {
  title: "Scroll Expand",
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

export default ScrollExpandDocs;
