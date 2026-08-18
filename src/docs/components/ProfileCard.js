// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/ProfileCard.jsx?raw";
import cssCode from "../../components/components/ProfileCard.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/ProfileCard-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/ProfileCard-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/ProfileCard-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/ProfileCard-JS-CSS",
};

const usageCode = `import ProfileCard from './ProfileCard'
  
<ProfileCard
  name="Javi A. Torres"
  title="Software Engineer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/path/to/avatar.jpg"
  showUserInfo={false}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
  behindGlowColor="rgba(125, 190, 255, 0.67)"
  iconUrl="/assets/demo/iconpattern.png"
  behindGlowEnabled
  innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
/>`;

export const ProfileCardDocs = {
  title: "Profile Card",
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

export default ProfileCardDocs;
