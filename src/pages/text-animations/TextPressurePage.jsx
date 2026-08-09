import DemoLayout from "../../components/DemoLayout";
import TextPressure from "../../components/text-animations/TextPressure";

function TextPressurePage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <DemoLayout>
      <div style={{ width: "100%", maxWidth: "560px" }}>
        <TextPressure
          text="Hello!"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#5227FF"
        />
      </div>
    </DemoLayout>
  );
}

export default TextPressurePage;
