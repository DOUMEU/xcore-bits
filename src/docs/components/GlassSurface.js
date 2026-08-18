// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/GlassSurface.jsx?raw";
import cssCode from "../../components/components/GlassSurface.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/GlassSurface-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/GlassSurface-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/GlassSurface-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/GlassSurface-JS-CSS",
};

const usageCode = `import GlassSurface from './GlassSurface'

// Basic usage
<GlassSurface 
  width={300} 
  height={200}
  borderRadius={50}
  className="my-custom-class"
>
  <h2>Glass Surface Content</h2>
</GlassSurface>

// Custom displacement effects
<GlassSurface
  displace={0.5}
  distortionScale={-180}
  redOffset={0}
  greenOffset={10}
  blueOffset={20}
  brightness={50}
  opacity={0.93}
  mixBlendMode="screen"
>
  <span>Advanced Glass Distortion</span>
</GlassSurface>`;

export const GlassSurfaceDocs = {
  title: "Glass Surface",
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

export default GlassSurfaceDocs;
