// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/Lanyard.jsx?raw";
import cssCode from "../../components/components/Lanyard.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Lanyard-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/Lanyard-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/Lanyard-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/Lanyard-JS-CSS",
};

const usageCode = `import Lanyard from './Lanyard'

<Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

// Pass custom images for the card's front/back faces and/or the lanyard band.
// frontImage and backImage render independently; imageFit keeps aspect ratio.
// lanyardWidth widens the band so a custom band image has more room.
<Lanyard
  position={[0,0,24]}
  gravity={[0,-40,0]}
  frontImage="/my-front.png"
  backImage="/my-back.png"
  imageFit="cover"
  lanyardImage="/my-band.png"
  lanyardWidth={1}
/>

/* IMPORTANT INFO BELOW

1. You MUST have the card.glb and lanyard.png files in your project and import them
- these can be downloaded from the repo's files, under src/assets/lanyard

2. You can edit your card.glb file in this online .glb editor and change the texture:
- https://modelviewer.dev/editor/
- alternatively, pass the "frontImage" / "backImage" props to swap the card's faces at runtime

4. The png file is the texture for the lanyard's band and can be edited in any image editor

5. Your Vite configuration must be updated to include the following in vite.config.js:
assetsInclude: ['**/*.glb']

6. For TS users, you might need these changes:

- src/global.d.ts
export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

- src/vite-env.d.ts
/// <reference types="vite/client" />
declare module '*.glb';
declare module '*.png';
*/`;

export const LanyardDocs = {
  title: "Lanyard",
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

export default LanyardDocs;
