import Silk from "../../components/backgrounds/Silk";

function SilkPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Silk
        speed={5}
        scale={1}
        color="#5227FF"
        noiseIntensity={1.5}
        rotation={0}
      />
    </div>
  );
}

export default SilkPage;
