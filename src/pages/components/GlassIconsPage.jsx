import {
  FiBarChart2,
  FiBook,
  FiCloud,
  FiEdit,
  FiFileText,
  FiHeart,
} from "react-icons/fi";
import DemoLayout from "../../components/DemoLayout";
import GlassIcons from "../../components/components/GlassIcons";

// color에는 GlassIcons가 아는 이름(blue/purple/red/indigo/orange/green)을 주면
// 미리 정의된 그라디언트가 적용되고, 그 외 값은 그대로 배경색이 됩니다.
const items = [
  { icon: <FiFileText />, color: "blue", label: "Files" },
  { icon: <FiBook />, color: "purple", label: "Books" },
  { icon: <FiHeart />, color: "red", label: "Health" },
  { icon: <FiCloud />, color: "indigo", label: "Weather" },
  { icon: <FiEdit />, color: "orange", label: "Notes" },
  { icon: <FiBarChart2 />, color: "green", label: "Stats" },
];

function GlassIconsPage() {
  return (
    <DemoLayout>
      <GlassIcons items={items} className="my-glass-icons" />
    </DemoLayout>
  );
}

export default GlassIconsPage;
