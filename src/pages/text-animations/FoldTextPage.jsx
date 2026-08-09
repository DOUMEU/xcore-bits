import { useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import ReplayButton from "../../components/ReplayButton";
import FoldText from "../../components/text-animations/FoldText";

function FoldTextPage() {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <DemoLayout>
      <ReplayButton onClick={() => setReplayKey((key) => key + 1)} />

      <FoldText
        key={replayKey}
        text="Motion Fold Text"
        splitBy="char"
        hinge="top"
        trigger="mount"
        duration={0.65}
        stagger={0.045}
        ease="power3.out"
        perspective={700}
        creaseShading={0.55}
        fontSize="clamp(2rem, 8vw, 8rem)"
        fontWeight={800}
        color="#f7f2e8"
      />
    </DemoLayout>
  );
}

export default FoldTextPage;
