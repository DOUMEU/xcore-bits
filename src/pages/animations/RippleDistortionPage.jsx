import RippleDistortion from "../../components/animations/RippleDistortion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1685021342912-9da834d3c49d?q=80&w=1074&auto=format&fit=crop";

function ScrollExpandPage() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <RippleDistortion
        src={HERO_IMAGE}
        brushSize={150}
        strength={0.2}
        swirl={1}
        rings={4}
        grayscale
        spread={5}
        fade={3}
        spacing={15}
        dispersion={0}
        glint={0}
        tint="#a855f7"
        tintAmount={0.1}
        highlightColor="#ffffff"
        trigger="hover"
        clickStrength={2}
        quality="low"
        enabled
      />
    </div>
  );
}

export default ScrollExpandPage;
