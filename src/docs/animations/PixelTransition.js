// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/animations/PixelTransition.jsx?raw";
import cssCode from "../../components/animations/PixelTransition.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/PixelTransition-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/PixelTransition-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/PixelTransition-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/PixelTransition-JS-CSS",
};

const usageCode = `import PixelTransition from './PixelTransition';

<PixelTransition
  firstContent={
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
      alt="default pixel transition content, a cat!"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
    </div>
  }
  gridSize={8}
  pixelColor="#ffffff"
  once={false}
  animationStepDuration={0.4}
  className="custom-pixel-card"
/>`;

export const PixelTransitionDocs = {
  title: "Pixel Transition",
  category: "Animations Code",
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

export default PixelTransitionDocs;
