import SideRays from "../../components/backgrounds/SideRays";

function SideRaysPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <SideRays
        speed={2.5}
        rayColor1="#EAB308"
        rayColor2="#96c8ff"
        intensity={2}
        spread={2}
        origin="top-right"
        tilt={0}
        saturation={1.5}
        blend={0.75}
        falloff={1.6}
        opacity={1}
      />
    </div>
  );
}

export default SideRaysPage;
