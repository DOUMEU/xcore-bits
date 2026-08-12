import PixelSnow from "../../components/backgrounds/PixelSnow";

function PixelSnowPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <PixelSnow
        color="#ffffff"
        flakeSize={0.01}
        minFlakeSize={1.25}
        pixelResolution={200}
        speed={1.25}
        density={0.3}
        direction={125}
        brightness={1}
        depthFade={8}
        farPlane={20}
        gamma={0.4545}
        variant="square"
      />
    </div>
  );
}

export default PixelSnowPage;
