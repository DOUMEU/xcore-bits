import DemoLayout from "../../components/DemoLayout";
import ProfileCard from "../../components/components/ProfileCard";

// public 폴더의 파일은 배포 경로(base)가 앞에 붙어야 하므로 BASE_URL을 사용합니다.
// 그냥 "/assets/..."로 쓰면 base가 빠져서 404가 납니다.
const asset = (file) => `${import.meta.env.BASE_URL}assets/demo/${file}`;

function ProfileCardPage() {
  return (
    <DemoLayout>
      <ProfileCard
        name="BBANG SIK"
        title="Web Design"
        handle="javicodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl={asset("avatar.png")}
        // 이 두 텍스처가 반짝이는 프리즘(무지개 광택)을 만듭니다.
        // iconUrl은 광택의 마스크, grainUrl은 표면 질감입니다.
        iconUrl={asset("iconpattern.png")}
        grainUrl={asset("grain.webp")}
        showUserInfo={false}
        enableTilt
        enableMobileTilt={false}
        behindGlowEnabled
        behindGlowColor="rgba(125, 190, 255, 0.67)"
        innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
      />
    </DemoLayout>
  );
}

export default ProfileCardPage;
