import ScrollExpand from "../../components/animations/ScrollExpand";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1581279813180-4dddc1008167?q=80&w=1600&auto=format&fit=crop";

function ScrollExpandPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <ScrollExpand
        src={HERO_IMAGE}
        alt="Product hero"
        title="Built to scale"
        scrollHint="Scroll ↓"
      >
        <h2 style={{ fontSize: "40px", fontWeight: "700", color: "#fff" }}>
          Scroll Expand
        </h2>
        <p style={{ fontSize: "24px", color: "#fff" }}>
          스크롤하면 프레임이 열리면서 전체 무대를 미디어에 맡기게 됩니다.
        </p>
      </ScrollExpand>
    </div>
  );
}

export default ScrollExpandPage;
