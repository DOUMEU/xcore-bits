import DecayCard from "../../components/components/DecayCard";
import DemoLayout from "../../components/DemoLayout";
import "./DecayCardPage.css";

function DecayCardPage() {
  return (
    <DemoLayout>
      <DecayCard
        width={400}
        height={560}
        image="https://picsum.photos/id/1015/600/750?grayscale"
        baseFrequency={0.015}
        numOctaves={5}
        seed={4}
        maxDisplacement={400}
        movementBound={50}
      >
        {/* mix-blend-mode: overlay라 뒤 이미지의 밝기에 따라 글자가 녹아듭니다. */}
        <span className="decay-card-demo__text">
          Decay
          <br />
          Card
        </span>
      </DecayCard>
    </DemoLayout>
  );
}

export default DecayCardPage;
