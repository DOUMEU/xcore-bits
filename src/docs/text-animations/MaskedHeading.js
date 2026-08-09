// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/MaskedHeading.jsx?raw";
import cssCode from "../../components/text-animations/MaskedHeading.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/MaskedHeading",
  npm: "npx shadcn@latest add @react-bits/MaskedHeading",
  yarn: "yarn dlx shadcn@latest add @react-bits/MaskedHeading",
  bun: "bunx shadcn@latest add @react-bits/MaskedHeading",
};

const usageCode = `import MaskedHeading from './MaskedHeading';

<MaskedHeading text="Designed in the details" src="/hero.jpg" />

<MaskedHeading
  text="Designed in the details"
  mediaType="video"
  src="/reel.mp4"
  poster="/reel-poster.jpg"
  fillScale={1.25}
  parallax={26}
  reveal="rise"
  trigger="view"
  drift={18}
  brightness={1}
  saturation={1}
  grayscale={false}
  duration={1.1}
  stagger={0.09}
  align="center"
  weight={700}
  tracking={-0.03}
  lineHeight={1.06}
  textScale={0.115}
/>`;

export const MaskedHeadingDocs = {
  title: "Masked Heading",
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

export default MaskedHeadingDocs;