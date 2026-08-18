// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/TiltedCard.jsx?raw";
import cssCode from "../../components/components/TiltedCard.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/TiltedCard-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/TiltedCard-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/TiltedCard-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/TiltedCard-JS-CSS",
};

const usageCode = `import TiltedCard from './TiltedCard';

<TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip
  displayOverlayContent
  overlayContent={
    <p className="tilted-card-demo-text">
      Kendrick Lamar - GNX
    </p>
  }
/>
  `;

export const TiltedCardDocs = {
  title: "Tilted Card",
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

export default TiltedCardDocs;
