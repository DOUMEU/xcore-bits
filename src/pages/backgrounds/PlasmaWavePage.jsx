import PlasmaWave from "../../components/backgrounds/PlasmaWave";

function PlasmaWavePage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <PlasmaWave
        colors={["#A855F7", "#06B6D4"]}
        speed1={0.05}
        speed2={0.05}
        focalLength={0.8}
        bend1={1}
        bend2={0.5}
        dir2={1}
        rotationDeg={0}
      />
    </div>
  );
}

export default PlasmaWavePage;
