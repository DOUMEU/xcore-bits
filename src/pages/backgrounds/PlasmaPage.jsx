import Plasma from "../../components/backgrounds/Plasma";

function PlasmaPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Plasma
        color="#B497CF"
        speed={1}
        direction="forward"
        scale={1}
        opacity={1}
        mouseInteractive={false}
        renderScale={0.55}
        maxDpr={1.5}
        targetFps={60}
        iterations={60}
      />
    </div>
  );
}

export default PlasmaPage;
