import DemoLayout from "../../components/DemoLayout";
import ReflectiveCard from "../../components/components/ReflectiveCard";

// 카드 표면에 비칠 영상. 무료 Coverr 영상(저작자 표시 불필요).
// 이 값을 지우면 원래대로 웹캠을 비춘다.
//
// 다른 풍경으로 바꾸고 싶으면 아래 주소들도 그대로 쓸 수 있다.
// 잔잔한 바다:   .../coverr-calm-waves-in-an-ocean-gulf-4513/1080p.mp4
// 열대 해안선:   .../coverr-tropical-coastline-7966/1080p.mp4
// 산과 바다:     .../coverr-scenic-mountains-and-sea-3027/1080p.mp4
const REFLECTION_VIDEO =
  "https://cdn.coverr.co/videos/coverr-sun-shining-over-the-ocean-2178/1080p.mp4";

function ReflectiveCardPage() {
  return (
    // 카드 자체가 500px 높이라 DemoLayout이 그대로 가운데 정렬합니다.
    // 높이를 고정한 래퍼를 두면 카드가 그 박스 위쪽에 붙어 중앙에서 벗어납니다.
    <DemoLayout>
      <ReflectiveCard
        videoSrc={REFLECTION_VIDEO}
        overlayColor="rgba(0, 0, 0, 0.2)"
        blurStrength={12}
        glassDistortion={30}
        metalness={1}
        roughness={0.75}
        displacementStrength={20}
        noiseScale={1}
        specularConstant={5}
        grayscale={0.15}
        color="#ffffff"
      />
    </DemoLayout>
  );
}

export default ReflectiveCardPage;
