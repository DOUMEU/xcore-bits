import DemoLayout from "../../components/DemoLayout";
import MagicBento from "../../components/components/MagicBento";

function MagicBentoPage() {
  return (
    <DemoLayout>
      <MagicBento
        textAutoHide={true}
        enableStars
        enableSpotlight
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect
        spotlightRadius={400}
        particleCount={12}
        glowColor="132, 0, 255"
        disableAnimations={false}
      />
    </DemoLayout>
  );
}

export default MagicBentoPage;
