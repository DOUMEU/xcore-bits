// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/DepthCarousel.jsx?raw";
import cssCode from "../../components/components/DepthCarousel.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/DepthCarousel-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/DepthCarousel-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/DepthCarousel-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/DepthCarousel-JS-CSS",
};

const usageCode = `import DepthCarousel from './DepthCarousel';

const items = [
  { image: 'https://picsum.photos/seed/a/800/1000', alt: 'One' },
  { image: 'https://picsum.photos/seed/b/800/1000', alt: 'Two' },
  { image: 'https://picsum.photos/seed/c/800/1000', alt: 'Three' },
  { image: 'https://picsum.photos/seed/d/800/1000', alt: 'Four' },
  { image: 'https://picsum.photos/seed/e/800/1000', alt: 'Five' }
];

<div style={{ height: '500px', position: 'relative' }}>
  <DepthCarousel
    items={items}
    depth={220}
    spread={90}
    tilt={22}
    tiltDirection="right"
    perspective={1400}
    visibleCards={4}
    falloff={0.2}
    blur={6}
    autoplay={false}
    loop
    cardWidth={300}
    cardHeight={380}
    radius={18}
    tint="#05060a"
    duration={700}
    ease="power3.out"
    autoplayDelay={3200}
    showControls
    showIndicators
  />
</div>`;

export const DepthCarouselDocs = {
  title: "Depth Carousel",
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

export default DepthCarouselDocs;
