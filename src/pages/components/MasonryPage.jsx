import { useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import ReplayButton from "../../components/ReplayButton";
import Masonry from "../../components/components/Masonry";

const items = [
  {
    id: "1",
    img: "https://picsum.photos/id/1015/600/900?grayscale",
    url: "https://example.com/one",
    height: 400,
  },
  {
    id: "2",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "3",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "4",
    img: "https://picsum.photos/id/1015/600/900?grayscale",
    url: "https://example.com/one",
    height: 800,
  },
  {
    id: "5",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: 600,
  },
  {
    id: "6",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: 450,
  },
  {
    id: "7",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: 850,
  },
  {
    id: "8",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: 550,
  },
  {
    id: "9",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: 400,
  },
  // ... more items
];

function MasonryPage() {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <DemoLayout>
      <ReplayButton onClick={() => setReplayKey((key) => key + 1)} />

      <Masonry
        key={replayKey}
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover
        hoverScale={0.95}
        blurToFocus
        colorShiftOnHover={false}
      />
    </DemoLayout>
  );
}

export default MasonryPage;
