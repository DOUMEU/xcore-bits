import DemoLayout from "../../components/DemoLayout";
import Magnet from "../../components/animations/Magnet";

function MagnetPage() {
  return (
    <DemoLayout>
      {/* magnetStrength는 나눗셈(거리 / magnetStrength)에 쓰이므로
          값이 작을수록 자석 효과가 강해진다. 기본값은 2. */}
      <Magnet padding={100} disabled={false} magnetStrength={3}>
        <p
          style={{
            margin: 0,
            padding: "16px 32px",
            fontSize: "24px",
            fontWeight: 700,
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.05)",
            whiteSpace: "nowrap",
          }}
        >
          Magnet
        </p>
      </Magnet>
    </DemoLayout>
  );
}

export default MagnetPage;
