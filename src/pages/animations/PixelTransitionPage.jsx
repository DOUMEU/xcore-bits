import DemoLayout from "../../components/DemoLayout";
import PixelTransition from "../../components/animations/PixelTransition";

function PixelTransitionPage() {
  return (
    <DemoLayout>
      <PixelTransition
        firstContent={
          <img
            src="https://images.unsplash.com/photo-1640384974326-3e72680e0fb3?q=80&w=687&auto=format&fit=crop"
            alt="Pixel Transition"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        }
        secondContent={
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              backgroundColor: "#1A1B1E",
            }}
          >
            <p style={{ fontWeight: 800, fontSize: "4rem", color: "#ffffff" }}>
              Meow!
            </p>
          </div>
        }
        gridSize={8}
        pixelColor="#ffffff"
        once={false}
        animationStepDuration={0.4}
        className="custom-pixel-card"
      />
    </DemoLayout>
  );
}

export default PixelTransitionPage;
