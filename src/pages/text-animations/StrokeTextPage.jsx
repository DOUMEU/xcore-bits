import { useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import TextDemoWrapper from "../../components/TextDemoWrapper";
import ReplayButton from "../../components/ReplayButton";
import StrokeText from "../../components/text-animations/StrokeText";

function StrokeTextPage() {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <DemoLayout>
      <ReplayButton onClick={() => setReplayKey((key) => key + 1)} />

      <TextDemoWrapper variant="hero">
        <StrokeText
          key={replayKey}
          text="Draw Attention"
          strokeColor="#A78BFA"
          fillColor="#F8FAFC"
          strokeWidth={1.4}
          drawDuration={1.6}
          fillDelay={0.2}
          stagger={0.05}
          ease="power2.out"
          trigger="mount"
          fillMode="wipe"
          fontSize={96}
          fontWeight={800}
          letterSpacing={-4}
          reverse={false}
        />
      </TextDemoWrapper>
    </DemoLayout>
  );
}

export default StrokeTextPage;
