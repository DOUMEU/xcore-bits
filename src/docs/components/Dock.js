import componentCode from "../../components/components/Dock.jsx?raw";
import cssCode from "../../components/components/Dock.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Dock-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/Dock-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/Dock-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/Dock-JS-CSS",
};

const usageCode = `import Dock from './Dock';

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  <Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  />`;

export const DockDocs = {
  title: "Dock",
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

export default DockDocs;
