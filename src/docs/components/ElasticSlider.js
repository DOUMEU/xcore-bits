// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/ElasticSlider.jsx?raw";
import cssCode from "../../components/components/ElasticSlider.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/ElasticSlider-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/ElasticSlider-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/ElasticSlider-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/ElasticSlider-JS-CSS",
};

const usageCode = `import ElasticSlider from './ElasticSlider'
  
<ElasticSlider
  leftIcon={<>...your icon...</>}
  rightIcon={<>...your icon...</>}
  startingValue={0}
  defaultValue={50}
  maxValue={100}
  isStepped={false}
  stepSize={10}
/>`;

export const ElasticSliderDocs = {
  title: "Elastic Slider",
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

export default ElasticSliderDocs;
