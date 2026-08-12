import SplashCursor from "../../components/backgrounds/SplashCursor";

function SplashCursorPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      />
    </div>
  );
}

export default SplashCursorPage;
