import DemoLayout from "../../components/DemoLayout";
import MetaBalls from "../../components/animations/MetaBalls";

function MetaBallsPage() {
  return (
    <DemoLayout>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <MetaBalls
          color="#ffffff"
          cursorBallColor="#ffffff"
          cursorBallSize={2}
          ballCount={15}
          animationSize={30}
          enableMouseInteraction
          enableTransparency={true}
          hoverSmoothness={0.15}
          clumpFactor={1}
          speed={0.3}
        />
      </div>
    </DemoLayout>
  );
}

export default MetaBallsPage;
