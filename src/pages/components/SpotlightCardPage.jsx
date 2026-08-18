import { VscSparkleFilled } from "react-icons/vsc";
import DemoLayout from "../../components/DemoLayout";
import SpotlightCard from "../../components/components/SpotlightCard";
import "./SpotlightCardPage.css";

function SpotlightCardPage() {
  return (
    <DemoLayout>
      <SpotlightCard
        className="custom-spotlight-card"
        spotlightColor="rgba(117, 243, 145, 0.2)"
      >
        <div className="spotlight-card-demo__content">
          <VscSparkleFilled className="spotlight-card-demo__icon" />

          <h3 className="spotlight-card-demo__title">Boost Your Experience</h3>

          <p className="spotlight-card-demo__desc">
            Get exclusive benefits, features &amp; 24/7 support as a permanent
            club member.
          </p>
        </div>
      </SpotlightCard>
    </DemoLayout>
  );
}

export default SpotlightCardPage;
