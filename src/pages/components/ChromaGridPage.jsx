import ChromaGrid from "../../components/components/ChromaGrid";
import "./ChromaGridPage.css";

// columns=3, rows=2 그리드를 채우려면 6명이 필요합니다.
// 아바타는 pravatar.cc(무료, 가입/키 불필요).
const items = [
  {
    image: "https://i.pravatar.cc/300?img=8",
    title: "Alex Rivera",
    subtitle: "Full Stack Developer",
    handle: "@alexrivera",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg, #4F46E5, #000)",
    url: "https://github.com/",
  },
  {
    image: "https://i.pravatar.cc/300?img=11",
    title: "Jordan Chen",
    subtitle: "DevOps Engineer",
    handle: "@jordanchen",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg, #10B981, #000)",
    url: "https://linkedin.com/in/",
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Morgan Blake",
    subtitle: "UI/UX Designer",
    handle: "@morganblake",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg, #F59E0B, #000)",
    url: "https://dribbble.com/",
  },
  {
    image: "https://i.pravatar.cc/300?img=16",
    title: "Casey Park",
    subtitle: "Data Scientist",
    handle: "@caseypark",
    borderColor: "#EF4444",
    gradient: "linear-gradient(195deg, #EF4444, #000)",
    url: "https://kaggle.com/",
  },
  {
    image: "https://i.pravatar.cc/300?img=25",
    title: "Sam Kim",
    subtitle: "Mobile Developer",
    handle: "@thesamkim",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg, #8B5CF6, #000)",
    url: "https://github.com/",
  },
  {
    image: "https://i.pravatar.cc/300?img=60",
    title: "Tyler Rodriguez",
    subtitle: "Cloud Architect",
    handle: "@tylerrod",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(135deg, #06B6D4, #000)",
    url: "https://aws.amazon.com/",
  },
];

function ChromaGridPage() {
  return (
    // 화면 전체를 채워야 흑백 필터의 경계가 보이지 않습니다.
    <div style={{ position: "absolute", inset: 0 }}>
      <ChromaGrid
        className="chroma-grid--fullscreen"
        items={items}
        columns={3}
        rows={2}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  );
}

export default ChromaGridPage;
