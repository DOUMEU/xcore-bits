import { useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import EchoText from "../../components/text-animations/EchoText";

function EchoTextPage() {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <DemoLayout>
      <EchoText
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
