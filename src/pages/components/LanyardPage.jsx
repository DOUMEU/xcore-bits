import { useState } from "react";
import ReplayButton from "../../components/ReplayButton";
import Lanyard from "../../components/components/Lanyard";
import "./LanyardPage.css";

function LanyardPage() {
  // 카드를 아래로 던져놓고 나면 되돌릴 방법이 없어서,
  // 리마운트로 물리 시뮬레이션을 처음부터 다시 시작합니다.
  const [replayKey, setReplayKey] = useState(0);

  return (
    <div className="lanyard-demo">
      <ReplayButton onClick={() => setReplayKey((key) => key + 1)} />

      <p className="lanyard-demo__text">Drag It!</p>

      <Lanyard
        key={replayKey}
        position={[0, 0, 24]}
        gravity={[0, -40, 0]}
      />
    </div>
  );
}

export default LanyardPage;
