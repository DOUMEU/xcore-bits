import DemoLayout from "../../components/DemoLayout";
import OrbitImages from "../../components/animations/OrbitImages";

const images = [
  "https://picsum.photos/300/300?grayscale&random=1",
  "https://picsum.photos/300/300?grayscale&random=2",
  "https://picsum.photos/300/300?grayscale&random=3",
  "https://picsum.photos/300/300?grayscale&random=4",
  "https://picsum.photos/300/300?grayscale&random=5",
  "https://picsum.photos/300/300?grayscale&random=6",
];

function OrbitImagesPage() {
  return (
    <DemoLayout>
      {/* responsive 옵션은 컨테이너를 정사각형(aspect-ratio 1/1)으로 만들기 때문에
          화면 세로를 넘지 않도록 min(90vw, 90vh)로 크기를 제한한다. */}
      <div style={{ width: "min(100vw, 100vh)", position: "relative" }}>
        <OrbitImages
          images={images}
          shape="ellipse"
          /* baseWidth는 궤도가 그려지는 기준 좌표계 크기.
             기본 1400은 radiusX 340에 비해 너무 커서 궤도가 작게 보인다. */
          baseWidth={760}
          radiusX={340}
          radiusY={80}
          rotation={-8}
          duration={30}
          itemSize={80}
          responsive
          radius={160}
          direction="normal"
          fill
          showPath
          pathColor="rgba(255,255,255,0.25)"
          paused={false}
        />
      </div>
    </DemoLayout>
  );
}

export default OrbitImagesPage;
