import { useRef } from "react";
import DemoLayout from "../../components/DemoLayout";
import WarpText from "../../components/text-animations/WarpText";

function WarpTextPage() {
  const containerRef = useRef(null);

  return (
    <DemoLayout>
      <WarpText
        text="Bend the moment"
        color="#f8f5ff"
        warpStrength={0.08}
        warpScale={1.7}
        speed={0.55}
        pointerInfluence={0.42}
        pointerStrength={0.38}
        refraction={0.018}
        ripple
        fontSize={116}
        fontWeight={800}
        style={{ height: "320px" }}
        fontFamily="inherit"
        letterSpacing={-0.06}
        lineHeight={0.9}
      />
    </DemoLayout>
  );
}

export default WarpTextPage;
