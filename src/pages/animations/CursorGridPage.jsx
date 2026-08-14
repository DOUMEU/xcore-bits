import DemoLayout from "../../components/DemoLayout";
import CursorGrid from "../../components/animations/CursorGrid";

function CursorGridPage() {
  return (
    <DemoLayout>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <CursorGrid
          cellSize={70}
          color="#D946EF"
          radius={140}
          falloff="smooth"
          holdTime={400}
          fadeDuration={800}
          lineWidth={1.2}
          maxOpacity={1}
          fillOpacity={0}
          gridOpacity={0}
          cellRadius={0}
          clickPulse
          pulseSpeed={600}
        />
      </div>
    </DemoLayout>
  );
}

export default CursorGridPage;
