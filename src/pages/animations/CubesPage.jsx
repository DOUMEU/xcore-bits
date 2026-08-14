import DemoLayout from "../../components/DemoLayout";
import Cubes from "../../components/animations/Cubes";

function CubesPage() {
  return (
    <DemoLayout>
      {/* 큐브는 정사각형이므로 화면의 가로/세로 중 짧은 쪽을 기준으로 크기를 잡아야
          어떤 화면에서도 넘치지 않는다. */}
      <div style={{ width: "min(50vw, 50vh)", position: "relative" }}>
        <Cubes
          gridSize={8}
          maxAngle={45}
          radius={3}
          borderStyle="2px dashed #B497CF"
          faceColor="#1a1a2e"
          rippleColor="#ff6b6b"
          rippleSpeed={1.5}
          autoAnimate
          rippleOnClick
        />
      </div>
    </DemoLayout>
  );
}

export default CubesPage;
