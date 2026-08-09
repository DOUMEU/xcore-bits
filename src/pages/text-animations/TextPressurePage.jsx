import DemoLayout from "../../components/DemoLayout";
import TextPressure from "../../components/text-animations/TextPressure";

function TextPressurePage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <DemoLayout>
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
        fontSize="clamp(4em, 8vw, 8em)"
      />
    </DemoLayout>
  );
}

export default TextPressurePage;
