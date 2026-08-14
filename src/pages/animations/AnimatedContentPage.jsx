import { useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import ReplayButton from "../../components/ReplayButton";
import AnimatedContent from "../../components/animations/AnimatedContent";

function AnimatedContentPage() {
  const [replayKey, setReplayKey] = useState(0);
  return (
    <DemoLayout>
      <ReplayButton onClick={() => setReplayKey((key) => key + 1)} />

      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatedContent
          key={replayKey}
          distance={100}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <button
            type="button"
            style={{
              padding: "16px 32px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#fff",
              background: "#5227FF",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            Animate Me
          </button>
        </AnimatedContent>
      </div>
    </DemoLayout>
  );
}

export default AnimatedContentPage;
