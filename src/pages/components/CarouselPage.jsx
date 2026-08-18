import DemoLayout from "../../components/DemoLayout";
import Carousel from "../../components/components/Carousel";

function CarouselPage() {
  return (
    // DemoLayout이 이미 가운데 정렬합니다.
    // 안쪽에 height: 100% 래퍼를 두면 그 래퍼가 화면 전체 높이를 차지해버려
    // 캐러셀이 래퍼의 맨 위에 붙습니다.
    <DemoLayout>
      <Carousel
        baseWidth={300}
        autoplay={false}
        autoplayDelay={3000}
        pauseOnHover={false}
        loop={false}
        round={false}
      />
    </DemoLayout>
  );
}

export default CarouselPage;
