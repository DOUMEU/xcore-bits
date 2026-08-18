// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/MorphSlider.jsx?raw";
import cssCode from "../../components/components/MorphSlider.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/MorphSlider-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/MorphSlider-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/MorphSlider-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/MorphSlider-JS-CSS",
};

const usageCode = `import MorphSlider from './MorphSlider'

const items = [
  { image: 'https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=1600&auto=format&fit=crop', caption: 'One' },
  { image: 'https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=1600&auto=format&fit=crop', caption: 'Two' },
  { image: 'https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=1600&auto=format&fit=crop', caption: 'Three' }
]

<div style={{ height: '500px', position: 'relative' }}>
  <MorphSlider
    items={items}
    transition="melt"
    intensity={0.55}
    aberration={0.35}
    drift={0.4}
    autoplay={false}
    overlayColor="#05060a"
    duration={1.1}
    ease="power2.inOut"
    scale={2.4}
    autoplayDelay={4}
    loop
    radius={16}
    showCaptions
    showControls
    showIndicators
/>
</div>`;

export const MorphSliderDocs = {
  title: "Morph Slider",
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

export default MorphSliderDocs;
