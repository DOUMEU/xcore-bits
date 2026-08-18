import DemoLayout from "../../components/DemoLayout";
import GlassSurface from "../../components/components/GlassSurface";
import "./GlassSurfacePage.css";

// GlassSurface는 "뒤에 있는 것"을 굴절시켜 보여주는 컴포넌트라
// 배경에 아무것도 없으면 화면에 보이는 게 없습니다.
// 그래서 원본 프리뷰처럼 스크롤되는 이미지 위에 유리판을 띄웁니다.
// Unsplash 직접 링크(무료, 출처 표기 의무 없음).
const slides = [
  {
    src: "https://images.unsplash.com/photo-1500673587002-1d2548cfba1b?q=80&w=1200&auto=format&fit=crop",
    text: "The Summer Of Glass",
  },
  {
    src: "https://images.unsplash.com/photo-1594576547505-1be67997401e?q=80&w=1200&auto=format&fit=crop",
    text: "Can Hold Any Content",
  },
  {
    src: "https://images.unsplash.com/photo-1543127172-4b33cb699e35?q=80&w=1200&auto=format&fit=crop",
    text: "Has Built-In Fallback",
  },
];

function GlassSurfacePage() {
  return (
    <DemoLayout>
      <div className="glass-surface-demo">
        {/* 아래 레이어: 스크롤되는 이미지들 */}
        <div className="glass-surface-demo__scroller">
          <p className="glass-surface-demo__hint">Scrolling.</p>

          {slides.map((slide) => (
            <div className="glass-surface-demo__slide" key={slide.src}>
              <img src={slide.src} alt="" />
              <span>{slide.text}</span>
            </div>
          ))}
        </div>

        {/* 위 레이어: 유리판. pointer-events: none이라 스크롤을 막지 않습니다. */}
        <div className="glass-surface-demo__glass">
          <GlassSurface
            width={360}
            height={100}
            borderRadius={50}
            borderWidth={0.07}
            brightness={50}
            opacity={0.93}
            blur={11}
            displace={0.5}
            backgroundOpacity={0.1}
            saturation={1}
            distortionScale={-180}
            redOffset={0}
            greenOffset={10}
            blueOffset={20}
          />
        </div>
      </div>
    </DemoLayout>
  );
}

export default GlassSurfacePage;
