import DomeGallery from "../../components/components/DomeGallery";

// Unsplash 직접 링크(무료, 출처 표기 의무 없음).
// 컴포넌트 밖에 두어야 리렌더마다 새 배열이 만들어지지 않습니다.
// (DomeGallery 내부에서 images를 useMemo 의존성으로 쓰기 때문에
//  안에 두면 매 렌더마다 돔 전체를 다시 만듭니다.)
const images = [
  {
    src: "https://images.unsplash.com/photo-1500673587002-1d2548cfba1b?q=80&w=800&auto=format&fit=crop",
    alt: "물결",
  },
  {
    src: "https://images.unsplash.com/photo-1594576547505-1be67997401e?q=80&w=800&auto=format&fit=crop",
    alt: "모래 언덕",
  },
  {
    src: "https://images.unsplash.com/photo-1543127172-4b33cb699e35?q=80&w=800&auto=format&fit=crop",
    alt: "파도",
  },
  {
    src: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=800&auto=format&fit=crop",
    alt: "안개 낀 숲",
  },
  {
    src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop",
    alt: "집",
  },
  {
    src: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=800&auto=format&fit=crop",
    alt: "해변",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    alt: "산과 호수",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
    alt: "안개 낀 계곡",
  },
];

function DomeGalleryPage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <DomeGallery
        images={images}
        fit={0.8}
        minRadius={600}
        maxVerticalRotationDeg={0}
        segments={34}
        dragDampening={2}
        grayscale
      />
    </div>
  );
}

export default DomeGalleryPage;
