import { FaCircle, FaCode, FaSliders } from "react-icons/fa6";
import CardSwap, { Card } from "../../components/components/CardSwap";
import "./CardSwapPage.css";

// public 폴더의 파일은 배포 경로(base)가 앞에 붙어야 하므로 BASE_URL을 사용합니다.
const asset = (file) => `${import.meta.env.BASE_URL}assets/demo/${file}`;

const cards = [
  { customClass: "one", icon: <FaCircle />, label: "Smooth", img: "cs1.webp" },
  { customClass: "two", icon: <FaCode />, label: "Reliable", img: "cs2.webp" },
  {
    customClass: "three",
    icon: <FaSliders />,
    label: "Customizable",
    img: "cs3.webp",
  },
];

function CardSwapPage() {
  return (
    // .card-swap-container가 position: absolute; bottom: 0; right: 0 이라
    // 부모에 position이 있어야 오른쪽 아래에 자리를 잡습니다.
    <div className="card-swap-demo">
      <div className="card-swap-demo__copy">
        <h2 className="card-swap-demo__title">
          Card stacks have never <span>looked so good</span>
        </h2>
        <p className="card-swap-demo__subtitle">Just look at it go!</p>
      </div>

      <div className="card-swap-demo__stage">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          skewAmount={6}
          easing="elastic"
          pauseOnHover={false}
        >
          {cards.map((card) => (
            <Card
              key={card.customClass}
              customClass={`card-swap-demo__card ${card.customClass}`}
            >
              <div className="card-swap-demo__card-header">
                {card.icon}
                <span>{card.label}</span>
              </div>

              <div className="card-swap-demo__card-body">
                <img src={asset(card.img)} alt={card.label} />
              </div>
            </Card>
          ))}
        </CardSwap>
      </div>
    </div>
  );
}

export default CardSwapPage;
