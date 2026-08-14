import GradualBlur from "../../components/animations/GradualBlur";

const photos = [
  "https://picsum.photos/seed/blur1/1200/800",
  "https://picsum.photos/seed/blur2/1200/800",
  "https://picsum.photos/seed/blur3/1200/800",
  "https://picsum.photos/seed/blur4/1200/800",
];

function GradualBlurPage() {
  return (
    // GradualBlur가 target="parent"로 이 영역 하단에 붙기 때문에
    // position: relative + overflow: hidden 이 필요하다.
    <section
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          overflowY: "auto",
          padding: "4rem 2rem 10rem",
          // 스크롤은 되지만 스크롤바는 보이지 않게 한다.
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <h2
          style={{
            margin: "0 0 0.5rem",
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: 800,
            color: "#fff",
            textAlign: "center",
          }}
        >
          Scroll Down
        </h2>
        <p
          style={{
            margin: "0 0 3rem",
            fontSize: "16px",
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
          }}
        >
          아래로 스크롤하면 하단이 점점 흐려집니다.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {photos.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              draggable={false}
              style={{ width: "100%", borderRadius: 16, display: "block" }}
            />
          ))}
        </div>
        <h2
          style={{
            margin: "40px 0 0",
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: 800,
            color: "#fff",
            textAlign: "center",
          }}
        >
          Gradual Blur
        </h2>
      </div>

      <GradualBlur
        target="parent"
        position="bottom"
        height="7rem"
        strength={4}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
      />
    </section>
  );
}

export default GradualBlurPage;
