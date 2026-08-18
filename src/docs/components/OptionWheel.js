// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/OptionWheel.jsx?raw";
import cssCode from "../../components/components/OptionWheel.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/OptionWheel-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/OptionWheel-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/OptionWheel-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/OptionWheel-JS-CSS",
};

const usageCode = `import OptionWheel from './OptionWheel';

<OptionWheel
  items={['Ambient', 'House', 'Techno', 'Jazz', 'Lo-Fi', 'Synthwave']}
  defaultSelected={2}
  textColor="#a6a6a6"
  activeColor="#ffffff"
  side="left"
  fontSize={3}
  spacing={1.4}
  curve={1}
  tilt={6}
  blur={2}
  fade={0.25}
  smoothing={200}
  inset={80}
  loop={false}
  draggable
  soundUrl="/assets/sounds/click-soft.mp3"
  soundVolume={0.5}
  onChange={(index, item) => console.log(index, item)}
/>`;

export const OptionWheelDocs = {
  title: "Option Wheel",
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

export default OptionWheelDocs;
