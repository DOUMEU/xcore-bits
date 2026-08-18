import InfiniteMenu from "../../components/components/InfiniteMenu";
import "./InfiniteMenuPage.css";

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=600&h=600&fit=crop&sat=-100&auto=format",
    link: "https://google.com/",
    title: "Item 1",
    description: "This is pretty cool, right?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=600&h=600&fit=crop&sat=-100&auto=format",
    link: "https://google.com/",
    title: "Item 2",
    description: "This is pretty cool, right?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=600&h=600&fit=crop&sat=-100&auto=format",
    link: "https://google.com/",
    title: "Item 3",
    description: "This is pretty cool, right?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?q=80&w=600&h=600&fit=crop&sat=-100&auto=format",
    link: "https://google.com/",
    title: "Item 4",
    description: "This is pretty cool, right?",
  },
];

function InfiniteMenuPage() {
  return (
    <div className="infinite-menu-demo">
      {/* scale은 카메라 거리입니다. 값을 올리면 카메라가 멀어져 구가 작아집니다.
          원본 프리뷰(높이 500px)는 scale={1}인데, 화면 전체로 키우면
          세로가 늘어난 만큼 구도 커지므로 scale을 함께 올려야 균형이 맞습니다. */}
      <InfiniteMenu items={items} scale={1.6} />
    </div>
  );
}

export default InfiniteMenuPage;
