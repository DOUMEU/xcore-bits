import {
  VscAccount,
  VscArchive,
  VscHome,
  VscSettingsGear,
} from "react-icons/vsc";
import Dock from "../../components/components/Dock";
import "./DockPage.css";

const items = [
  { icon: <VscHome size={18} />, label: "Home", onClick: () => alert("Home!") },
  {
    icon: <VscArchive size={18} />,
    label: "Archive",
    onClick: () => alert("Archive!"),
  },
  {
    icon: <VscAccount size={18} />,
    label: "Profile",
    onClick: () => alert("Profile!"),
  },
  {
    icon: <VscSettingsGear size={18} />,
    label: "Settings",
    onClick: () => alert("Settings!"),
  },
];

function DockPage() {
  return (
    // .dock-panel이 position: absolute라서 부모에 position이 있어야
    // 화면 하단에 제대로 붙습니다.
    <div className="dock-demo">
      <p className="dock-demo__text">Try it out!</p>

      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}

export default DockPage;
