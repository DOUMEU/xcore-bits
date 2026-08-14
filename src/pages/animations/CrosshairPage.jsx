import { useRef } from "react";
import Crosshair from "../../components/animations/Crosshair";

function CrosshairPage() {
  // containerRef를 주면 그 영역 안에서만 조준선이 따라다닌다.
  // 넘기지 않으면 window 전체가 대상이 된다.
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "clamp(28px, 5vw, 48px)",
          fontWeight: 800,
          color: "rgba(255,255,255,0.25)",
          userSelect: "none",
        }}
      >
        Move your cursor
      </p>

      <Crosshair containerRef={containerRef} color="#ffffff" />
    </div>
  );
}

export default CrosshairPage;
