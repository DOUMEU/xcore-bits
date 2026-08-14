import DemoLayout from "../../components/DemoLayout";
import ShapeBlur from "../../components/animations/ShapeBlur";

function ShapeBlurPage() {
  return (
    <DemoLayout>
      <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
        <ShapeBlur
          variation={0}
          pixelRatioProp={window.devicePixelRatio || 1}
          shapeSize={1}
          roundness={0.5}
          borderSize={0.05}
          circleSize={0.25}
          circleEdge={1}
        />
      </div>
    </DemoLayout>
  );
}

export default ShapeBlurPage;
