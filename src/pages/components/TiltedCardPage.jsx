import DemoLayout from "../../components/DemoLayout";
import TiltedCard from "../../components/components/TiltedCard";
import "./TiltedCardPage.css";

function TiltedCardPage() {
  return (
    <DemoLayout>
      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
        containerHeight="320px"
        containerWidth="320px"
        imageHeight="400px"
        imageWidth="400px"
        rotateAmplitude={12}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip
        displayOverlayContent
        overlayContent={
          <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
        }
      />
    </DemoLayout>
  );
}

export default TiltedCardPage;
