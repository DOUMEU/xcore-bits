import DemoLayout from "../../components/DemoLayout";
import SpecularButton from "../../components/components/SpecularButton";

function SpecularButtonPage() {
  return (
    <DemoLayout>
      <SpecularButton
        size="lg"
        radius={16}
        tint="#ffffff"
        tintOpacity={0}
        blur={0}
        textColor="#f5f5f5"
        lineColor="#ffffff"
        baseColor="#525252"
        intensity={1.5}
        shineSize={10}
        shineFade={40}
        thickness={1}
        speed={0.35}
        followMouse
        proximity={250}
        autoAnimate={false}
        onClick={() => console.log("clicked")}
      >
        Get Started
      </SpecularButton>
    </DemoLayout>
  );
}

export default SpecularButtonPage;
