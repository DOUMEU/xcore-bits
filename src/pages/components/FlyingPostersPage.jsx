import FlyingPosters from "../../components/components/FlyingPosters";
import "./FlyingPostersPage.css";

const items = [
  "https://picsum.photos/500/500?grayscale",
  "https://picsum.photos/600/600?grayscale",
  "https://picsum.photos/400/400?grayscale",
];

function FlyingPostersPage() {
  return (
    // FlyingPosters는 부모를 100% 채우는 캔버스라 화면 전체를 씁니다.
    <div className="flying-posters-demo">
      <p className="flying-posters-demo__text">Scroll.</p>

      <FlyingPosters
        items={items}
        planeWidth={320}
        planeHeight={320}
        distortion={3}
        scrollEase={0.01}
        cameraFov={45}
        cameraZ={20}
      />
    </div>
  );
}

export default FlyingPostersPage;
