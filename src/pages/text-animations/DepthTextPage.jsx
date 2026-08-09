import { useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import DepthText from "../../components/text-animations/DepthText";

function DepthTextPage() {
  const [replayKey, setReplayKey] = useState(0);

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
