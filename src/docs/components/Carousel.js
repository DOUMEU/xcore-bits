// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/Carousel.jsx?raw";
import cssCode from "../../components/components/Carousel.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Carousel-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/Carousel-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/Carousel-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/Carousel-JS-CSS",
};

const usageCode = `import Carousel from './Carousel'

<div style={{ height: '600px', position: 'relative' }}>
  <Carousel
    baseWidth={300}
    autoplay={false}
    autoplayDelay={3000}
    pauseOnHover={false}
    loop={false}
    round={false}
  />
</div>`;

export const CarouselDocs = {
  title: "Carousel",
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

export default CarouselDocs;
