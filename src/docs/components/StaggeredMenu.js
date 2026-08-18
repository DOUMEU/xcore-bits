// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/components/StaggeredMenu.jsx?raw";
import cssCode from "../../components/components/StaggeredMenu.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/StaggeredMenu-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/StaggeredMenu-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/StaggeredMenu-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/StaggeredMenu-JS-CSS",
};

const usageCode = `import StaggeredMenu from './StaggeredMenu';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

<div style={{ height: '100vh', background: '#1a1a1a' }}>
  <StaggeredMenu
    position="right"
    items={menuItems}
    socialItems={socialItems}
    displaySocials
    displayItemNumbering={true}
    menuButtonColor="#ffffff"
    openMenuButtonColor="#fff"
    changeMenuColorOnOpen={true}
    colors={['#B497CF', '#5227FF']}
    logoUrl="/path-to-your-logo.svg"
    accentColor="#5227FF"
    onMenuOpen={() => console.log('Menu opened')}
    onMenuClose={() => console.log('Menu closed')}
  />
</div>`;

export const StaggeredMenuDocs = {
  title: "Staggered Menu",
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

export default StaggeredMenuDocs;
