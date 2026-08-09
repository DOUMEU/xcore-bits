import DemoLayout from "../../components/DemoLayout";
import TextDemoWrapper from "../../components/TextDemoWrapper";
import SplitFlapText from "../../components/text-animations/SplitFlapText";

function SplitFlapTextPage() {
  return (
    <DemoLayout>
      <TextDemoWrapper variant="hero">
        <SplitFlapText
          words={["LAUNCH READY", "SYNC ONLINE", "SIGNAL LIVE"]}
          flipDuration={0.12}
          stagger={0.06}
          cycleDelay={2400}
          charset="alphanumeric"
          flipsPerChar={8}
          tileColor="#111827"
          textColor="#f8fafc"
          tileRadius={8}
          gap={6}
          fontSize={52}
          loop
          padTo={12}
        />
      </TextDemoWrapper>
    </DemoLayout>
  );
}

export default SplitFlapTextPage;
