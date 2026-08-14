import DemoLayout from "../../components/DemoLayout";
import BlobCursor from "../../components/animations/BlobCursor";

function BlobCursorPage() {
  return (
    <DemoLayout>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <BlobCursor
          blobType="circle"
          fillColor="#5227FF"
          trailCount={3}
          sizes={[100, 125, 100]}
          innerSizes={[100, 20, 50]}
          innerColor="rgba(255,255,255,0.8)"
          opacities={[0.6, 0.6, 0.6]}
          shadowColor="rgba(0,0,0,0.75)"
          shadowBlur={5}
          shadowOffsetX={10}
          shadowOffsetY={10}
          filterStdDeviation={30}
          useFilter={true}
          fastDuration={0.01}
          slowDuration={1}
          zIndex={100}
        />
      </div>
    </DemoLayout>
  );
}

export default BlobCursorPage;
