import StaggeredMenu from "../../components/components/StaggeredMenu";
import "./StaggeredMenuPage.css";

// public 폴더의 파일은 배포 경로(base)가 앞에 붙어야 하므로 BASE_URL을 사용합니다.
const logo = `${import.meta.env.BASE_URL}star-sticker.svg`;

const menuItems = [
  { label: "Home", ariaLabel: "Go to Home section", link: "#home" },
  { label: "About", ariaLabel: "Go to About section", link: "#about" },
  { label: "Projects", ariaLabel: "Go to Projects section", link: "#projects" },
  { label: "Contact", ariaLabel: "Go to Contact section", link: "#contact" },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com/your-handle" },
  { label: "Twitter", link: "https://twitter.com/your-handle" },
  { label: "LinkedIn", link: "https://linkedin.com/in/your-handle" },
];

function StaggeredMenuPage() {
  return (
    // 메뉴는 화면 전체를 덮는 오버레이라 DemoLayout(가운데 정렬)을 쓰지 않습니다.
    <div className="staggered-menu-demo">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        logoUrl={logo}
        accentColor="#5227FF"
        menuButtonColor="#ffffff"
        // 패널이 흰색이라 열렸을 때 버튼은 검정이어야 보입니다.
        openMenuButtonColor="#000000"
      />
    </div>
  );
}

export default StaggeredMenuPage;
