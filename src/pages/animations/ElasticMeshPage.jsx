import DemoLayout from "../../components/DemoLayout";
import ElasticMesh from "../../components/animations/ElasticMesh";

function ElasticMeshPage() {
  return (
    <DemoLayout>
      <div style={{ width: 800, height: 450 }}>
        <ElasticMesh
          image="https://picsum.photos/seed/elastic/900/600"
          interaction="hover"
          tilt={14}
          shading={0.5}
          color1="#5227FF"
          color2="#B19EEF"
          showGrid
          gridDensity={20}
          gridOpacity={0.28}
          gridColor="#ffffff"
          highlight="#ffffff"
          borderRadius={25}
          stiffness={0.05}
          damping={0.2}
          grabRadius={0.6}
          pull={0.4}
          wobble={5}
          resolution={25}
          enabled
        />
      </div>
    </DemoLayout>
  );
}

export default ElasticMeshPage;
