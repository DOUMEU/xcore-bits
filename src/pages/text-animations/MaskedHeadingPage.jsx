import DemoLayout from "../../components/DemoLayout";
import TextDemoWrapper from "../../components/TextDemoWrapper";
import MaskedHeading from "../../components/text-animations/MaskedHeading";

// 무료 Unsplash 사진 (라이선스 프리) - 실제 이미지 파일이 없어서 텍스트 마스크에
// 아무것도 안 보였던 문제를 해결하기 위한 데모용 이미지
// unsplash.com 사진 페이지 링크는 <img src>로 쓸 수 없어서, 페이지의 og:image
// 메타 태그에서 실제 CDN 이미지 주소(images.unsplash.com/photo-<id>)를 추출해서 사용.
// const MODEL_PHOTO_1 =
// "https://images.unsplash.com/photo-1785939261676-5cabd74c718a?q=80&w=1600&auto=format&fit=crop";
// const MODEL_PHOTO_2 =
// "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1600&auto=format&fit=crop";

// 무료 Coverr 영상 (저작자 표시 불필요) - coverr.co 페이지의 <video> 태그에서
// 실제 CDN 주소(cdn.coverr.co/videos/coverr-<slug>/<해상도>.mp4)를 추출해서 사용.
const COVERR_VIDEO =
  "https://cdn.coverr.co/videos/coverr-sunset-in-indonesia-3381/720p.mp4";

function MaskedHeadingPage() {
  return (
    <DemoLayout>
      <TextDemoWrapper variant="hero">
        {/* <MaskedHeading text="Designed in the details" src={MODEL_PHOTO_1} /> */}
        <MaskedHeading
          text="Designed in the details"
          mediaType="video"
          src={COVERR_VIDEO}
          fillScale={1.2}
          parallax={26}
          reveal="rise"
          trigger="view"
          drift={18}
          brightness={1}
          saturation={1}
          grayscale={false}
          duration={1.1}
          stagger={0.09}
          align="center"
          weight={700}
          tracking={-0.03}
          lineHeight={1.06}
          textScale={0.115}
        ></MaskedHeading>
      </TextDemoWrapper>
    </DemoLayout>
  );
}

export default MaskedHeadingPage;
