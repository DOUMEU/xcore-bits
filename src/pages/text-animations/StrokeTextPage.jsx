import { useEffect, useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import TextDemoWrapper from "../../components/TextDemoWrapper";
import ReplayButton from "../../components/ReplayButton";
import StrokeText from "../../components/text-animations/StrokeText";

function StrokeTextPage() {
  const [replayKey, setReplayKey] = useState(0);
  // TextDemoWrapper의 "hero" variant(clamp(4em, 8vw, 8em) = clamp(64px, 8vw, 128px))와 동일한 크기.
  // StrokeText는 SVG 내부에서 fontSize 숫자로 직접 연산하기 때문에
  // CSS clamp() 문자열을 못 쓰고, 창 크기 변화에 맞춰 숫자를 직접 계산해줘야 함.
  const [fontSize, setFontSize] = useState(128);

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      setFontSize(Math.max(64, Math.min(w * 0.08, 128)));
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

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
          fontSize={fontSize}
          fontWeight={800}
          letterSpacing={-4}
          reverse={false}
        />
      </TextDemoWrapper>
    </DemoLayout>
  );
}

export default StrokeTextPage;
