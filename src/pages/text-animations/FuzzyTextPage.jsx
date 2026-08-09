import DemoLayout from "../../components/DemoLayout";
import FuzzyText from "../../components/text-animations/FuzzyText";

function FuzzyTextPage() {
  return (
    <DemoLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
          fontSize="clamp(2rem, 8vw, 8rem)"
        >
          404
        </FuzzyText>

        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
          fontSize="clamp(4em, 8vw, 8em)"
        >
          Not Found
        </FuzzyText>
      </div>
    </DemoLayout>
  );
}

export default FuzzyTextPage;
