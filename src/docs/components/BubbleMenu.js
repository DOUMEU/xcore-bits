// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/BubbleMenu.jsx?raw";
import cssCode from "../../components/components/BubbleMenu.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/BubbleMenu-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/BubbleMenu-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/BubbleMenu-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/BubbleMenu-JS-CSS",
};

const usageCode = `import CurvedInput from './CurvedInput'

<CurvedInput
  placeholder="david@reactbits.dev"
  buttonText="Get Started"
  theme="dark"
  bend={28}
  height={64}
  width={450}
  onSubmit={value => console.log(value)}
/>

// Light preset, flat, no button
<CurvedInput
  showButton
  showIcon
  placeholder="Search components..."
  type="text"
  cornerRadius={18}
  borderWidth={1.5}
  fontSize={16}
  backgroundColor="#1B1722"
  textColor="#f5f5f5"
  borderColor="#392e4e"
  buttonColor="#A855F7"
  buttonTextColor="#ffffff"
  shadowSize="md"
/>`;

export const BubbleMenuDocs = {
  title: "Bubble Menu",
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

export default BubbleMenuDocs;
