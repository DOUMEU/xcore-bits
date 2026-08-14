import DemoLayout from "../../components/DemoLayout";
import MetallicPaint from "../../components/animations/MetallicPaint";

// public 폴더의 파일은 배포 경로(base)가 앞에 붙어야 하므로 BASE_URL을 사용한다.
const logo = `${import.meta.env.BASE_URL}star-sticker.svg`;

function MetallicPaintPage() {
  return (
    <DemoLayout>
      <div style={{ width: "min(50vw, 50vh)", aspectRatio: "1 / 1" }}>
        <MetallicPaint
          imageSrc={logo}
          // Pattern
          seed={42}
          scale={4}
          patternSharpness={1}
          noiseScale={0.5}
          // Animation
          speed={0.3}
          liquid={0.75}
          mouseAnimation={false}
          // Visual
          brightness={2}
          contrast={0.5}
          refraction={0.01}
          blur={0.015}
          chromaticSpread={2}
          fresnel={1}
          angle={0}
          waveAmplitude={1}
          distortion={1}
          contour={0.2}
          // Colors
          lightColor="#ffffff"
          darkColor="#000000"
          tintColor="#feb3ff"
        />
      </div>
    </DemoLayout>
  );
}

export default MetallicPaintPage;
