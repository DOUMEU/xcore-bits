import DemoLayout from "../../components/DemoLayout";
import MagnetLines from "../../components/animations/MagnetLines";

function MagnetLinesPage() {
  return (
    <DemoLayout>
      <MagnetLines
        rows={10}
        columns={12}
        containerSize="40vmin"
        lineColor="#efefef"
        lineWidth="2px"
        /* 화면이 좁아져도 정사각형을 유지하려면 선 길이도 컨테이너와 같은
           비율 단위(vmin)여야 한다. px 고정이면 컨테이너가 줄어들 때
           선이 칸보다 커져서 그리드가 세로로 늘어난다.
           컨테이너 40vmin / 10행 = 칸 4vmin 이므로 그보다 작게 잡는다. */
        lineHeight="2.5vmin"
        baseAngle={-10}
      />
    </DemoLayout>
  );
}

export default MagnetLinesPage;
