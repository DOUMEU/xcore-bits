import DemoLayout from "../../components/DemoLayout";
import ElectricBorder from "../../components/animations/ElectricBorder";

function ElectricBorderPage() {
  return (
    <DemoLayout>
      <div style={{ width: 320, height: 400 }}>
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.12}
          borderRadius={16}
          style={{ borderRadius: 16, height: "100%" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              padding: "32px 24px",
              // background:
              //   "linear-gradient(180deg, rgba(18,24,34,0.92) 0%, rgba(8,11,16,0.96) 100%)",
              borderRadius: 16,
            }}
          >
            <span
              style={{
                alignSelf: "flex-start",
                padding: "4px 12px",
                marginBottom: "8px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.07)",
                color: "#fff",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              FEATURED
            </span>

            <h2
              style={{
                margin: "0 0 8px",
                fontSize: "28px",
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Electric Card
            </h2>

            <p
              style={{
                margin: "0 0 32px",
                fontSize: "14px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.5,
              }}
            >
              An electric border for shocking your users, the right way.
            </p>

            <div
              style={{
                display: "flex",
                gap: "4px",
                marginBottom: "8px",
                marginTop: "auto",
              }}
            >
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "12px",
                }}
              >
                Live
              </span>
              <span
                style={{
                  padding: "4px 10px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "12px",
                }}
              >
                v1.0
              </span>
            </div>

            <button
              type="button"
              style={{
                alignSelf: "flex-start",
                width: "100%",
                marginTop: "6px",
                padding: "8px 10px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#2e2e2e",
                background: "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "transform .12s, filter .12s, box-shadow .12s",
                boxShadow: "0 4px 16px #ffffff26",
              }}
            >
              Get Started
            </button>
          </div>
        </ElectricBorder>
      </div>
    </DemoLayout>
  );
}

export default ElectricBorderPage;
