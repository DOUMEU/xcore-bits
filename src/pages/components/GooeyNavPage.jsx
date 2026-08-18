import GooeyNav from "../../components/components/GooeyNav";
import "./GooeyNavPage.css";

const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

function GooeyNavPage() {
  return (
    <div className="gooey-nav-demo">
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
}

export default GooeyNavPage;
