import DemoLayout from "../../components/DemoLayout";
import FoldText from "../../components/text-animations/FoldText";

function FoldTextPage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <DemoLayout>
      <FoldText
        text="Motion Fold Text"
        splitBy="char"
        hinge="top"
        trigger="mount"
        duration={0.65}
        stagger={0.045}
        ease="power3.out"
        perspective={700}
        creaseShading={0.55}
        fontSize={80}
        fontWeight={800}
        color="#f7f2e8"
      />
    </DemoLayout>
  );
}

export default FoldTextPage;
