import ShapeGrid from "../../components/backgrounds/ShapeGrid";

function ShapeGridPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <ShapeGrid
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        borderColor="#2F293A"
        hoverFillColor="#222"
        shape="square"
        hoverTrailAmount={0}
      />
    </div>
  );
}

export default ShapeGridPage;
