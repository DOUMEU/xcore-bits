import DemoLayout from "../../components/DemoLayout";
import PixelSwap from "../../components/animations/PixelSwap";

function PixelSwapPage() {
  return (
    <DemoLayout>
      <PixelSwap
        firstContent={
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#1A1B1E",
              color: "#fff",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            <span>Hover me</span>
          </div>
        }
        secondContent={
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#F9FAFB",
              color: "#1A1B1E",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            <span>Pixel Swap</span>
          </div>
        }
        pixelSize={64}
        gap={0}
        pixelRadius={0}
        pixelSpin={0}
        pixelScale={0.35}
        duration={1400}
        pixelDuration={450}
        pattern="random"
        randomness={0}
        fade
        trigger="hover"
      />
    </DemoLayout>
  );
}

export default PixelSwapPage;
