// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/ScrollStack.jsx?raw";
import cssCode from "../../components/components/ScrollStack.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/ScrollStack-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/ScrollStack-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/ScrollStack-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/ScrollStack-JS-CSS",
};

const usageCode = `import ScrollStack, { ScrollStackItem } from './ScrollStack'

<ScrollStack>
  <ScrollStackItem>
    <h2>Card 1</h2>
    <p>This is the first card in the stack</p>
  </ScrollStackItem>
  <ScrollStackItem>
    <h2>Card 2</h2>
    <p>This is the second card in the stack</p>
  </ScrollStackItem>
  <ScrollStackItem>
    <h2>Card 3</h2>
    <p>This is the third card in the stack</p>
  </ScrollStackItem>
</ScrollStack>`;

export const ScrollStackDocs = {
  title: "Scroll Stack",
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

export default ScrollStackDocs;
