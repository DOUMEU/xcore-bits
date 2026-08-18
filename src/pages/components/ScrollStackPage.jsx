import DemoLayout from "../../components/DemoLayout";
import ScrollStack, {
  ScrollStackItem,
} from "../../components/components/ScrollStack";
import "./ScrollStackPage.css";

// ScrollStack / ScrollStackItem은 style prop을 받지 않으므로
// 스타일은 안쪽 태그에 직접 준다. 카드가 여러 장이라 상수로 빼서 재사용한다.
const titleStyle = {
  margin: "0 0 12px",
  fontSize: "40px",
  fontWeight: 700,
  color: "#fff",
};

const bodyStyle = {
  margin: 0,
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: 1.6,
  color: "rgba(255,255,255,0.6)",
};

function ScrollStackPage() {
  return (
    <DemoLayout>
      <ScrollStack>
        <ScrollStackItem itemClassName="stack-card-1">
          <h2 style={titleStyle}>Card 1</h2>
          <p style={bodyStyle}>This is the first card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="stack-card-2">
          <h2 style={titleStyle}>Card 2</h2>
          <p style={bodyStyle}>This is the second card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="stack-card-3">
          <h2 style={titleStyle}>Card 3</h2>
          <p style={bodyStyle}>This is the third card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="stack-card-4">
          <h2 style={titleStyle}>Card 4</h2>
          <p style={bodyStyle}>This is the fourth card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="stack-card-5">
          <h2 style={titleStyle}>Card 5</h2>
          <p style={bodyStyle}>This is the fifth card in the stack</p>
        </ScrollStackItem>
      </ScrollStack>
    </DemoLayout>
  );
}

export default ScrollStackPage;
