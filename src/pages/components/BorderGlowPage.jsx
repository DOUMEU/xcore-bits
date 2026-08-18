import { VscSparkleFilled } from "react-icons/vsc";
import DemoLayout from "../../components/DemoLayout";
import BorderGlow from "../../components/components/BorderGlow";
import "./BorderGlowPage.css";

function BorderGlowPage() {
  return (
    <DemoLayout>
      <BorderGlow
        edgeSensitivity={30}
        glowColor="40 80 80"
        backgroundColor="#1A1B1E"
        borderRadius={28}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={false}
        colors={["#c084fc", "#f472b6", "#38bdf8"]}
      >
        <div className="border-glow-demo__content">
          <VscSparkleFilled className="border-glow-demo__icon" />

          <h3 className="border-glow-demo__title">Hover Near the Edges</h3>

          <p className="border-glow-demo__desc">
            Move your cursor close to the card border to see the colored glow
            effect follow your pointer direction.
          </p>
        </div>
      </BorderGlow>
    </DemoLayout>
  );
}

export default BorderGlowPage;
