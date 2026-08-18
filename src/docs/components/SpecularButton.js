// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/SpecularButton.jsx?raw";
import cssCode from "../../components/components/SpecularButton.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/SpecularButton-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/SpecularButton-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/SpecularButton-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/SpecularButton-JS-CSS",
};

const usageCode = `import SpecularButton from './SpecularButton';

<SpecularButton
  size="lg"
  radius={18}
  tint="#ffffff"
  tintOpacity={0}
  blur={0}
  textColor="#f5f5f5"
  lineColor="#ffffff"
  baseColor="#525252"
  intensity={1}
  shineSize={10}
  shineFade={40}
  thickness={1}
  speed={0.35}
  followMouse
  proximity={250}
  autoAnimate={false}
  onClick={() => console.log('clicked')}
>
  Get Started
</SpecularButton>`;

export const SpecularButtonDocs = {
  title: "Specular Button",
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

export default SpecularButtonDocs;
