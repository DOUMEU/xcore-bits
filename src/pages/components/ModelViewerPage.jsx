import { useState } from "react";
import ModelViewer from "../../components/components/ModelViewer";
import "./ModelViewerPage.css";

// Khronos 공식 glTF 샘플 모델(무료, 약 5.8MB). 처음 로딩에 몇 초 걸립니다.
const MODEL_URL =
  "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb";

function ModelViewerPage() {
  // 모델이 다 로드된 뒤에 문구를 띄웁니다.
  // 처음부터 띄우면 빈 화면에 글자만 떠 있는 시간이 생깁니다.
  const [isTextVisible, setIsTextVisible] = useState(false);

  return (
    <div className="model-viewer-demo">
      {isTextVisible && <p className="model-viewer-demo__text">Fast as lightning.</p>}

      <ModelViewer
        url={MODEL_URL}
        width="100%"
        height="100%"
        modelXOffset={0.5}
        modelYOffset={0}
        maxZoomDistance={0.7}
        enableMouseParallax
        enableHoverRotation
        environmentPreset="forest"
        fadeIn={false}
        autoRotate={false}
        autoRotateSpeed={0.35}
        showScreenshotButton
        onModelLoaded={() => setIsTextVisible(true)}
      />
    </div>
  );
}

export default ModelViewerPage;
