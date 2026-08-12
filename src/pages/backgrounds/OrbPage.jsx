import Orb from "../../components/backgrounds/Orb";

function OrbPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Orb hoverIntensity={2} rotateOnHover hue={0} forceHoverState={false} />
    </div>
  );
}

export default OrbPage;
