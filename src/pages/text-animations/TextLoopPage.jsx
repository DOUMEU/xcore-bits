import DemoLayout from "../../components/DemoLayout";
import TextLoop from "../../components/text-animations/TextLoop";

function TextLoopPage() {
  const handleSentenceComplete = (sentence, index) => {
    console.log("Sentence completed:", sentence, index);
  };

  return (
    <DemoLayout>
      <TextLoop
        text="React ✦ Bits"
        shape="wave"
        speed={90}
        direction="forward"
        separator="✦"
        curviness={90}
        fontSize={46}
        fontWeight={800}
        letterSpacing={2}
        uppercase
        color="#ffffff"
        ribbon
        ribbonColor="#5227FF"
        ribbonWidth={86}
        pauseOnHover
      />
    </DemoLayout>
  );
}

export default TextLoopPage;
