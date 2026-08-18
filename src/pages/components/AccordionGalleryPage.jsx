import DemoLayout from "../../components/DemoLayout";
import AccordionGallery from "../../components/components/AccordionGallery";

const items = [
  {
    image: "https://picsum.photos/id/1015/900/1200",
    label: "Canyon",
    link: "#",
  },
  {
    image: "https://picsum.photos/id/1018/900/1200",
    label: "Ridgeline",
    link: "#",
  },
  {
    image: "https://picsum.photos/id/1039/900/1200",
    label: "Falls",
    link: "#",
  },
  {
    image: "https://picsum.photos/id/1043/900/1200",
    label: "Harbour",
    link: "#",
  },
  {
    image: "https://picsum.photos/id/1044/900/1200",
    label: "Skyline",
    link: "#",
  },
];
function AccordionGalleryPage() {
  return (
    <DemoLayout>
      <AccordionGallery
        items={items}
        defaultIndex={2}
        expandRatio={0.52}
        trigger="hover"
        accentColor="#ffffff"
        overlayColor="#060010"
        textColor="#ffffff"
        grayscale
        showLabels
        duration={0.6}
        ease="power3.out"
        parallax={0.5}
        /* tilt는 비활성 패널을 rotateY로 회전시키는데, perspective 때문에
           회전한 모서리가 확대되어 옆 패널을 침범한다. gap은 회전 전 기준이라
           이를 못 막으므로 값을 낮춰 겹침을 없앤다. */
        tilt={0}
        stagger={0.06}
        /* height는 숫자만 받아 내부에서 px가 붙는다.
           460이면 세로가 짧은 화면에서 잘려서 조금 낮췄다. */
        height={360}
        gap={10}
        radius={16}
        orientation="horizontal"
      />
    </DemoLayout>
  );
}

export default AccordionGalleryPage;
