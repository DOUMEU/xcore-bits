import Radar from "../../components/backgrounds/Radar";

function RadarPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Radar
        speed={1}
        scale={0.5}
        ringCount={10}
        spokeCount={10}
        ringThickness={0.05}
        spokeThickness={0.01}
        sweepSpeed={1}
        sweepWidth={2}
        sweepLobes={1}
        color="#9f29ff"
        falloff={2}
        brightness={1}
        enableMouseInteraction
        mouseInfluence={0.1}
      />
    </div>
  );
}

export default RadarPage;
