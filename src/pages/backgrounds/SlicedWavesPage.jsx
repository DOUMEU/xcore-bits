import SlicedWaves from "../../components/backgrounds/SlicedWaves";

function SlicedWavesPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <SlicedWaves
        color1="#FF9FFC"
        color2="#5227FF"
        color3="#B497CF"
        columns={14}
        rows={8}
        barThickness={0.1}
        speed={0.35}
        travel={0.7}
        waveSpread={0.9}
        rowOffset={1}
        softness={0.05}
        glow={0}
        brightness={1}
        contrast={1}
        opacity={0.5}
        orientation="horizontal"
        alternate={false}
        mouseInteraction
        mouseStrength={1}
        mouseRadius={0.3}
        grain
        grainIntensity={0.05}
      />
    </div>
  );
}

export default SlicedWavesPage;
