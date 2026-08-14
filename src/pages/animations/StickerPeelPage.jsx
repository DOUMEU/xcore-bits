import DemoLayout from "../../components/DemoLayout";
import StickerPeel from "../../components/animations/StickerPeel";

// public 폴더의 파일은 배포 경로(base)가 앞에 붙어야 하므로 BASE_URL을 사용한다.
// 다른 이미지를 쓰려면 public 폴더에 넣고 파일명만 바꾸면 된다.
const stickerImage = `${import.meta.env.BASE_URL}star-sticker.svg`;

function StickerPeelPage() {
  return (
    // initialPosition="center"는 컴포넌트가 위치를 잡지 않고 넘기는 값이라
    // 중앙 배치는 부모(DemoLayout)가 담당한다.
    <DemoLayout>
      <StickerPeel
        imageSrc={stickerImage}
        width={200}
        rotate={0}
        peelBackHoverPct={30}
        peelBackActivePct={40}
        shadowIntensity={0.5}
        lightingIntensity={0.1}
        initialPosition="center"
        peelDirection={0}
      />
    </DemoLayout>
  );
}

export default StickerPeelPage;
