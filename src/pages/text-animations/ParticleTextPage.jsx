import DemoLayout from "../../components/DemoLayout";
import TextDemoWrapper from "../../components/TextDemoWrapper";
import ParticleText from "../../components/text-animations/ParticleText";

function ParticleTextPage() {
  return (
    <DemoLayout>
      <TextDemoWrapper variant="hero">
        <div style={{ width: "100%", height: 800 }}>
          <ParticleText
            text="Future Interfaces"
            particleSize={3}
            density={8}
            color="#4ad8d1"
            highlightColor="#7d29eb"
            scatter={250}
            gatherDuration={3000}
            stagger={500}
            pointerRepel={56}
            repelRadius={120}
            idleDrift={0.8}
            trigger="mount"
            fontWeight={800}
            glow
          />
        </div>
      </TextDemoWrapper>
    </DemoLayout>
  );
}

export default ParticleTextPage;
