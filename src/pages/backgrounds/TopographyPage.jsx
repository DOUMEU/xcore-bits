import Topography from "../../components/backgrounds/Topography";

function TopographyPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Topography
        lowColor="#5227FF"
        midColor="#FF9FFC"
        highColor="#FFFFFF"
        speed={0.35}
        morphAmount={3}
        morphSpeed={0.05}
        bands={2}
        thickness={0.01}
        scale={2}
        pixelSize={1}
        glow={0.5}
        colorMode="elevation"
        contrast={3}
        brightness={1}
        fillBands={false}
        opacity={1}
        grain
        grainIntensity={0.05}
        mouseInteraction
        mouseRadius={0.3}
        mouseStrength={0.4}
      />
    </div>
  );
}

export default TopographyPage;
