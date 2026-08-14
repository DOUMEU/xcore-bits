import DemoLayout from "../../components/DemoLayout";
import GlareHover from "../../components/animations/GlareHover";

function GlareHoverPage() {
  return (
    <DemoLayout>
      <GlareHover
        width="400px"
        height="200px"
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}
      >
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            color: "#fff",
            margin: 0,
          }}
        >
          Hover Me
        </h2>
      </GlareHover>
    </DemoLayout>
  );
}

export default GlareHoverPage;
