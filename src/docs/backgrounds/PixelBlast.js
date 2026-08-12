// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/PixelBlast.jsx?raw";
import cssCode from "../../components/backgrounds/PixelBlast.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/PixelBlast",
  npm: "npx shadcn@latest add @react-bits/PixelBlast",
  yarn: "yarn dlx shadcn@latest add @react-bits/PixelBlast",
  bun: "bunx shadcn@latest add @react-bits/PixelBlast",
};

const usageCode = `// Component inspired by github.com/zavalit/bayer-dithering-webgl-demo
  
import PixelBlast from './PixelBlast';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <PixelBlast
    variant="square"
    pixelSize={4}
    color="#B497CF"
    patternScale={2}
    patternDensity={1}
    pixelSizeJitter={0}
    enableRipples
    rippleSpeed={0.4}
    rippleThickness={0.12}
    rippleIntensityScale={1.5}
    liquid={false}
    liquidStrength={0.12}
    liquidRadius={1.2}
    liquidWobbleSpeed={5}
    speed={0.5}
    edgeFade={0.25}
    transparent
  />
</div>`;


export const PixelBlastDocs = {
  title: "Pixel Blast",
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

export default PixelBlastDocs;
