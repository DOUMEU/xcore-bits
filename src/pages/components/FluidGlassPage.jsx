import FluidGlass from "../../components/components/FluidGlass";

// 이 구성 요소는 올바르게 작동하기 위해 3D 모델이 필요합니다.
// 저장소의 'public/assets/3d' 디렉터리에서 세 가지 예제 모델을 찾을 수 있습니다:
// - 'lens.glb'
// - 'bar.glb'
// - 'cube.glb'
// 이 모델들을 올바른 디렉터리에 두거나 경로를 적절히 수정하세요.

function FluidGlassPage() {
  return (
    // Canvas가 부모 크기를 따라가므로 화면 전체를 차지하게 둔다.
    <div style={{ position: "absolute", inset: 0 }}>
      <FluidGlass
        // mode는 "lens" | "bar" | "cube" 중 하나.
        // 세부 설정은 최상위가 아니라 각 모드의 Props 객체 안에 넣어야 한다.
        mode="lens"
        lensProps={{
          scale: 0.25,
          ior: 1.15,
          thickness: 5,
          transmission: 1,
          roughness: 0,
          chromaticAberration: 0.1,
          anisotropy: 0.01,
        }}
      />
    </div>
  );
}

export default FluidGlassPage;
