import DemoLayout from "../../components/DemoLayout";
import DepthText from "../../components/text-animations/DepthText";

// autoOrbit으로 계속 회전하고 포인터도 따라다니는 연속 모션이라
// 되돌릴 "처음 상태"가 없습니다. 리플레이 버튼이 필요 없습니다.
function DepthTextPage() {
  return (
    <DemoLayout>
      <DepthText
        text="Depth Text"
        layers={34}
        depth={2.4}
        faceColor="#f8fafc"
        depthColor="#7c3aed"
        tilt={7.5}
        pointerTracking
        smoothing={0.14}
        perspective={900}
        autoOrbit
        orbitSpeed={0.35}
        fontSize="clamp(4em, 8vw, 8em)"
        fontWeight={900}
        shadow
      />
    </DemoLayout>
  );
}

export default DepthTextPage;
