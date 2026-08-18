import DemoLayout from "../../components/DemoLayout";
import Folder from "../../components/components/Folder";

function FolderPage() {
  return (
    // DemoLayout이 이미 화면 가운데로 정렬하므로 높이를 고정한 래퍼는 두지 않습니다.
    // 두면 폴더가 그 박스의 위쪽에 붙어 화면 중앙에서 벗어납니다.
    <DemoLayout>
      <Folder size={2} color="#5227FF" className="custom-folder" />
    </DemoLayout>
  );
}

export default FolderPage;
