import { useEffect, useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import TextLoop from "../../components/text-animations/TextLoop";

function TextLoopPage() {
  // clamp(4em, 8vw, 8em)과 동일한 크기 (1em = 16px 기준: 4em=64px, 8em=128px).
  // TextLoop는 fontSize를 SVG에 직접 픽셀로 적용하기 때문에 CSS clamp() 문자열을
  // 못 쓰고, 창 크기 변화에 맞춰 숫자를 직접 계산해줘야 함.
  const [fontSize, setFontSize] = useState(128);

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      setFontSize(Math.max(64, Math.min(w * 0.08, 128)));
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <DemoLayout>
      <TextLoop
        text="React ✦ Bits"
        shape="wave"
        speed={90}
        direction="forward"
        separator="✦"
        curviness={90}
        fontSize={fontSize}
        fontWeight={800}
        letterSpacing={2}
        uppercase
        color="#ffffff"
        ribbon
        ribbonColor="#5227FF"
        ribbonWidth={86}
        pauseOnHover
      />
    </DemoLayout>
  );
}

export default TextLoopPage;
