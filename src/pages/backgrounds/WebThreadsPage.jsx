import WebThreads from "../../components/backgrounds/WebThreads";

function WebThreadsPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <WebThreads
        color1="#5227FF"
        color2="#FF9FFC"
        color3="#FFFFFF"
        speed={0.2}
        threadCount={6}
        frequency={5}
        spread={0.18}
        taper={1}
        position={0.5}
        fanMode="center"
        glow={0.02}
        falloff={0.6}
        thickness={1.1}
        brightness={0.6}
        opacity={1}
        mirror
        shimmer={false}
        grain
        grainIntensity={0.05}
        mouseInteraction
        mouseStrength={0.3}
      />
    </div>
  );
}

export default WebThreadsPage;
