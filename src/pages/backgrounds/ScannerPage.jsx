import Scanner from "../../components/backgrounds/Scanner";

function ScannerPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Scanner
        color1="#5227FF"
        color2="#FF9FFC"
        color3="#FFFFFF"
        speed={0.5}
        sweepSpeed={0.25}
        sweepWidth={1.6}
        sweepFalloff={6}
        scale={1.5}
        frequency={2}
        ripple={0.22}
        bandDensity={11}
        lineSharpness={5.5}
        glow={0.22}
        scanDirection="vertical"
        colorSpread={0.7}
        brightness={1}
        contrast={1.15}
        softness={1.4}
        vignette={0.45}
        scanline
        grain
        grainIntensity={0.05}
        opacity={1}
        mouseInteraction
        mouseRadius={0.5}
        mouseStrength={0.5}
      />
    </div>
  );
}

export default ScannerPage;
