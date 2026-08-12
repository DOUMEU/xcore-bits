import RippleGrid from "../../components/backgrounds/RippleGrid";

function RippleGridPage() {
  return (
    <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
      <RippleGrid
        enableRainbow={false}
        gridColor="#5227FF"
        rippleIntensity={0.05}
        gridSize={10}
        gridThickness={15}
        mouseInteraction
        mouseInteractionRadius={0.8}
        opacity={1}
        fadeDistance={1.5}
        vignetteStrength={2}
        glowIntensity={0.1}
        gridRotation={0}
      />
    </div>
  );
}

export default RippleGridPage;
