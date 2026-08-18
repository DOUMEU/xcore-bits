import DemoLayout from "../../components/DemoLayout";
import CircularGallery from "../../components/components/CircularGallery";

function CircularGalleryPage() {
  return (
    <DemoLayout>
      {/* 갤러리는 가로로 늘어서는 구조라 폭이 넓어야 한다.
          폭 지정이 없으면 300px까지 좁아져 이미지가 겹쳐 보인다. */}
      <div
        style={{
          width: "100vw",
          height: "min(600px, 90vh)",
          position: "relative",
        }}
      >
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.05}
          // 라벨 폰트. Orbitron 같은 외부 폰트를 쓰려면 fontUrl에
          // 스타일시트 주소(예: Google Fonts)를 같이 넘겨야 한다.
          // 비워두면 기본 Figtree가 자동으로 로드된다.
          font="bold 30px Figtree"
          scrollSpeed={2}
        />
      </div>
    </DemoLayout>
  );
}

export default CircularGalleryPage;
