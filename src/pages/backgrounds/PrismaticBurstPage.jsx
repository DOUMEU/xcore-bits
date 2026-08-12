import PrismaticBurst from "../../components/backgrounds/PrismaticBurst";

function PrismaticBurstPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <PrismaticBurst
        animationType="rotate3d"
        intensity={2}
        speed={0.5}
        distort={0}
        paused={false}
        offset={{ x: 0, y: 0 }}
        hoverDampness={0.25}
        rayCount={0}
        mixBlendMode="lighten"
        colors={["#ff007a", "#4d3dff", "#ffffff"]}
        color0="#A855F7"
        color1="#7C3AED"
        color2="#6366F1"
      />
    </div>
  );
}

export default PrismaticBurstPage;
