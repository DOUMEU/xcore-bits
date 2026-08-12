import Waves from "../../components/backgrounds/Waves";

function WavesPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Waves
        lineColor="#ffffff"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.0125}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
    </div>
  );
}

export default WavesPage;
