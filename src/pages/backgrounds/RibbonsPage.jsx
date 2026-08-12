import Ribbons from "../../components/backgrounds/Ribbons";

function RibbonsPage() {
  return (
    <div style={{ height: "100%", position: "relative", overflow: "hidden" }}>
      <Ribbons
        baseThickness={30}
        colors={["#5227FF"]}
        speedMultiplier={0.5}
        maxAge={500}
        enableFade={false}
        enableShaderEffect={false}
      />
    </div>
  );
}

export default RibbonsPage;
