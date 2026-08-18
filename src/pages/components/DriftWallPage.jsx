import DriftWall from "../../components/components/DriftWall";

const items = [
  {
    image: "https://picsum.photos/id/1015/600/400",
    title: "Peaks",
    href: "https://example.com/one",
  },
  {
    image: "https://picsum.photos/id/1025/600/400",
    title: "Pup",
    href: "https://example.com/two",
  },
  {
    image: "https://picsum.photos/id/1039/600/400",
    title: "Falls",
    href: "https://example.com/three",
  },
  {
    image: "https://picsum.photos/id/1044/900/1200",
    label: "Skyline",
    link: "#",
  },
  {
    image: "https://picsum.photos/id/1043/900/1200",
    label: "Harbour",
    link: "#",
  },
];

function DriftWallPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <DriftWall
        items={items}
        columns={6}
        tileWidth={400}
        tileHeight={240}
        gap={16}
        tilt={16}
        turn={-14}
        perspective={1200}
        depth={20}
        speed={42}
        direction="down"
        variance={0.45}
        parallax={2}
        lift={80}
        fade={0.6}
        dim={0.4}
        overlayColor="#060010"
        radius={16}
        roll={6}
        pauseOnHover={false}
        grayscale={false}
      />
    </div>
  );
}

export default DriftWallPage;
