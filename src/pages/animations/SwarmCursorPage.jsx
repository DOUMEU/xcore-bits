import SwarmCursor from "../../components/animations/SwarmCursor";

function SwarmCursorPage() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <SwarmCursor
        color="#ffffff"
        accentColor="#ffffff"
        count={8}
        size={5}
        speed={2.5}
        spread={100}
        wander={0.25}
        trail={0.75}
        scatterOnClick
      >
        <h2 style={{ fontSize: "40px", fontWeight: "700", color: "#fff" }}>
          Swarm Cursor
        </h2>
        <p style={{ fontSize: "24px", color: "#fff" }}>
          마우스를 따라옵니다. 클릭해서 흩어뜨리세요.
        </p>
      </SwarmCursor>
    </div>
  );
}

export default SwarmCursorPage;
