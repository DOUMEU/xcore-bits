import { VscFlame, VscRocket, VscSparkle } from "react-icons/vsc";
import PixelCard from "../../components/components/PixelCard";
import "./PixelCardPage.css";

// variant는 default / blue / yellow / pink 네 가지입니다.
// 각각 픽셀 색상, 간격(gap), 속도(speed)가 다릅니다.
const cards = [
  {
    variant: "blue",
    icon: <VscRocket />,
    title: "Launch",
    desc: "아이디어를 빠르게 띄웁니다",
  },
  {
    variant: "yellow",
    icon: <VscSparkle />,
    title: "Polish",
    desc: "디테일을 다듬습니다",
  },
  {
    variant: "pink",
    icon: <VscFlame />,
    title: "Ship",
    desc: "망설이지 말고 배포합니다",
  },
];

function PixelCardPage() {
  return (
    <div className="pixel-card-demo">
      {cards.map((card) => (
        <PixelCard key={card.variant} variant={card.variant}>
          {/* .pixel-card가 display: grid라서, 콘텐츠를 position: absolute로
              띄워야 픽셀 캔버스 위에 겹칩니다.
              흐름(flow)에 두면 캔버스 옆으로 밀려 레이아웃이 깨집니다. */}
          <div className="pixel-card-demo__content">
            <span className="pixel-card-demo__icon">{card.icon}</span>
            <h3 className="pixel-card-demo__title">{card.title}</h3>
            <p className="pixel-card-demo__desc">{card.desc}</p>
          </div>
        </PixelCard>
      ))}
    </div>
  );
}

export default PixelCardPage;
