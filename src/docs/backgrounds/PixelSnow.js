// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/PixelSnow.jsx?raw";
import cssCode from "../../components/backgrounds/PixelSnow.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/PixelSnow",
  npm: "npx shadcn@latest add @react-bits/PixelSnow",
  yarn: "yarn dlx shadcn@latest add @react-bits/PixelSnow",
  bun: "bunx shadcn@latest add @react-bits/PixelSnow",
};

const usageCode = `import PixelSnow from './PixelSnow';

<div style={{ width: '100%', height: '100%', position: 'relative' }}>
  <PixelSnow 
    color="#ffffff"
    flakeSize={0.01}
    minFlakeSize={1.25}
    pixelResolution={200}
    speed={1.25}
    density={0.3}
    direction={125}
    brightness={1}
    depthFade={8}
    farPlane={20}
    gamma={0.4545}
    variant="square"
/>
</div>`;


export const PixelSnowDocs = {
  title: "Pixel Snow",
  category: "Backgrounds Code",
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

export default PixelSnowDocs;
