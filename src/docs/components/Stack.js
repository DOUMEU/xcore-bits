// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/Stack.jsx?raw";
import cssCode from "../../components/components/Stack.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Stack-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/Stack-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/Stack-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/Stack-JS-CSS",
};

const usageCode = `import Stack from './Stack'

const images = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
];

<div style={{ width: 208, height: 208 }}>
  <Stack
    randomRotation={false}
    sensitivity={200}
    sendToBackOnClick={true}
    cards={images.map((src, i) => (
      <img 
        key={i} 
        src={src} 
        alt={\`card-\${i + 1}\`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
    ))}
    autoplay={false}
    autoplayDelay={3000}
    pauseOnHover={false}
/>
</div>`;

export const StackDocs = {
  title: "Stack",
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

export default StackDocs;
