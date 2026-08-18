import DemoLayout from "../../components/DemoLayout";
import BubbleMenu from "../../components/components/BubbleMenu";
import "./BubbleMenuPage.css";

// logo에 문자열을 주면 BubbleMenu가 <img>로 렌더링합니다.
// public 폴더의 파일은 배포 경로(base)가 앞에 붙어야 하므로 BASE_URL을 사용합니다.
const logo = `${import.meta.env.BASE_URL}star-sticker.svg`;

const items = [
  {
    label: "home",
    href: "#",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  },
  {
    label: "about",
    href: "#",
    ariaLabel: "About",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "projects",
    href: "#",
    ariaLabel: "Projects",
    rotation: 8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "blog",
    href: "#",
    ariaLabel: "Blog",
    rotation: 8,
    hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
  },
  {
    label: "contact",
    href: "#",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
];

function BubbleMenuPage() {
  return (
    <DemoLayout>
      <BubbleMenu
        logo={logo}
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
    </DemoLayout>
  );
}

export default BubbleMenuPage;
