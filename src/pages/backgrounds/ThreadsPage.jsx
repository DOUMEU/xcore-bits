import Threads from "../../components/backgrounds/Threads";

function ThreadsPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Threads amplitude={1} distance={0} enableMouseInteraction />
    </div>
  );
}

export default ThreadsPage;
