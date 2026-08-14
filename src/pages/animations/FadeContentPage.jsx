import { useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import ReplayButton from "../../components/ReplayButton";
import FadeContent from "../../components/animations/FadeContent";

function FadeContentPage() {
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
        <FadeContent
          key={replayKey}
          blur={false}
          duration={1000}
          ease="power2.out"
          delay={0}
          threshold={0.1}
          initialOpacity={0}
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
            Fade Button
          </button>
        </FadeContent>
      </div>
    </DemoLayout>
  );
}

export default FadeContentPage;
