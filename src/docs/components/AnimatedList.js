// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/AnimatedList.jsx?raw";
import cssCode from "../../components/components/AnimatedList.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/AnimatedList-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/AnimatedList-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/AnimatedList-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/AnimatedList-JS-CSS",
};

const usageCode = `import LineSidebar from './LineSidebar';

<LineSidebar
  items={['Overview', 'Components', 'Animations', 'Backgrounds', 'Showcase']}
  accentColor="#A855F7"
  textColor="#c4c4c4"
  markerColor="#6c6c6c"
  showIndex
  showMarker
  proximityRadius={100}
  maxShift={30}
  falloff="smooth"
  markerLength={60}
  markerGap={0}
  tickScale={0.5}
  scaleTick
  itemGap={20}
  fontSize={1.1}
  smoothing={100}
  defaultActive={0}
  onItemClick={(index, label) => console.log(index, label)}
/>`;

export const AnimatedListDocs = {
  title: "Animated List",
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

export default AnimatedListDocs;
