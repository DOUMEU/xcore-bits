import DemoLayout from "../../components/DemoLayout";
import PixelTrail from "../../components/animations/PixelTrail";

function PixelTrailPage() {
  return (
    <DemoLayout>
      <div style={{ height: "100%", position: "relative", overflow: "hidden" }}>
        <PixelTrail
          gridSize={50}
          trailSize={0.1}
          maxAge={250}
          interpolate={5}
          color="#5227FF"
          gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
          gooeyEnabled
          gooStrength={2}
        />
      </div>
    </DemoLayout>
  );
}

export default PixelTrailPage;
