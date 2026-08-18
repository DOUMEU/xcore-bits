import DemoLayout from "../../components/DemoLayout";
import CurvedInput from "../../components/components/CurvedInput";

function CurvedInputPage() {
  return (
    <DemoLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <CurvedInput
          placeholder="david@reactbits.dev"
          buttonText="Get Started"
          theme="dark"
          bend={28}
          height={64}
          width={450}
          onSubmit={(value) => console.log(value)}
        />

        {/* 검색용 프리셋 */}
        <CurvedInput
          showButton
          showIcon
          placeholder="Search components..."
          type="text"
          cornerRadius={16}
          borderWidth={1.5}
          fontSize={16}
          backgroundColor="#1B1722"
          textColor="#f5f5f5"
          borderColor="#392e4e"
          buttonColor="#A855F7"
          buttonTextColor="#ffffff"
          shadowSize="md"
        />
      </div>
    </DemoLayout>
  );
}

export default CurvedInputPage;
