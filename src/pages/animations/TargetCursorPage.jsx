import DemoLayout from "../../components/DemoLayout";
import TargetCursor from "../../components/animations/TargetCursor";

// 점선 테두리 타겟 박스 공통 스타일.
// .cursor-target 클래스가 있어야 TargetCursor가 조준 대상으로 인식한다.
const targetBoxStyle = {
  padding: "16px 32px",
  border: "2px dashed #F9FAFB",
  borderRadius: "12px",
  background: "transparent",
  color: "#F9FAFB",
  fontSize: "26px",
  fontWeight: 800,
  letterSpacing: "0.02em",
  textAlign: "center",
};

function TargetCursorPage() {
  return (
    <DemoLayout>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        cursorColor="#ffffff"
        cursorColorOnTarget="#45FFDA"
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <h1
          style={{
            margin: "0 0 8px",
            fontSize: "40px",
            fontWeight: 800,
            color: "#282A2E",
          }}
        >
          Hover Below.
        </h1>

        <div style={{ display: "flex", gap: "16px" }}>
          <div className="cursor-target" style={targetBoxStyle}>
            THIS
          </div>
          <div className="cursor-target" style={targetBoxStyle}>
            FEELS
          </div>
          <div className="cursor-target" style={targetBoxStyle}>
            QUITE
          </div>
        </div>

        <div
          className="cursor-target"
          style={{ ...targetBoxStyle, alignSelf: "stretch" }}
        >
          SNAPPY!
        </div>
      </div>
    </DemoLayout>
  );
}

export default TargetCursorPage;
