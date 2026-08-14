import DepthCarousel from "../../components/components/DepthCarousel";

const items = [
  { image: "https://picsum.photos/seed/a/800/1000", alt: "One" },
  { image: "https://picsum.photos/seed/b/800/1000", alt: "Two" },
  { image: "https://picsum.photos/seed/c/800/1000", alt: "Three" },
  { image: "https://picsum.photos/seed/d/800/1000", alt: "Four" },
  { image: "https://picsum.photos/seed/e/800/1000", alt: "Five" },
];

function DepthCarouselPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <DepthCarousel
        items={items}
        depth={220}
        spread={90}
        tilt={22}
        tiltDirection="right"
        perspective={1400}
        visibleCards={4}
        falloff={0.2}
        blur={6}
        autoplay={false}
        loop
        cardWidth={300}
        cardHeight={380}
        radius={18}
        tint="#05060a"
        duration={700}
        ease="power3.out"
        autoplayDelay={3200}
        showControls
        showIndicators
      />
    </div>
  );
}

export default DepthCarouselPage;
