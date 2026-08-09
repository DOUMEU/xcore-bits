// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/ParticleText.jsx?raw";
import cssCode from "../../components/text-animations/ParticleText.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/ParticleText",
  npm: "npx shadcn@latest add @react-bits/ParticleText",
  yarn: "yarn dlx shadcn@latest add @react-bits/ParticleText",
  bun: "bunx shadcn@latest add @react-bits/ParticleText",
};

const usageCode = `import ParticleText from './ParticleText';

<div style={{ width: '100%', height: 360, background: '#09090f' }}>
  <ParticleText
    text="Future Interfaces"
    particleSize={3.6}
    density={8}
    color="#ffffff"
    highlightColor="#5ca3f6"
    scatter={320}
    gatherDuration={3000}
    stagger={510}
    pointerRepel={54}
    repelRadius={120}
    idleDrift={1.2}
    trigger="mount"
    fontSize="clamp(3.5rem, 13vw, 9rem)"
    fontWeight={800}
    fontFamily="inherit"
    glow
  />
</div>`;

export const ParticleTextDocs = {
  title: "Particle Text",
  category: "Text Animations Code",
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

export default ParticleTextDocs;