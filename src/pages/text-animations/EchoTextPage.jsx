import { useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import ReplayButton from "../../components/ReplayButton";
import EchoText from "../../components/text-animations/EchoText";

function EchoTextPage() {
  // mode="both"에는 한 번만 재생되는 등장(entrance) 애니메이션이 있어
  // 다시 보려면 리마운트가 필요합니다.
  const [replayKey, setReplayKey] = useState(0);

  return (
    <DemoLayout>
      <ReplayButton onClick={() => setReplayKey((key) => key + 1)} />

      <EchoText
        key={replayKey}
        text="Motion Echo"
        echoes={12}
        lag={0.24}
        offset={36}
        direction="right"
        fade={0.72}
        blur={3}
        tint="#7dd3fc"
        mode="both"
        cursorRadius={320}
        duration={900}
        ease="ease-out"
        fontSize="clamp(4em, 8vw, 8em)"
        fontWeight={800}
        color="#f8fafc"
      />
    </DemoLayout>
  );
}

export default EchoTextPage;
