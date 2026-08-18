import DemoLayout from "../../components/DemoLayout";
import FlowingMenu from "../../components/components/FlowingMenu";

const demoItems = [
  {
    link: "#",
    text: "Mojave",
    image:
      "https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=600&h=400&fit=crop&sat=-100&auto=format",
  },
  {
    link: "#",
    text: "Sonoma",
    image:
      "https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format",
  },
  {
    link: "#",
    text: "Monterey",
    image:
      "https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=600&h=400&fit=crop&sat=-100&auto=format",
  },
  {
    link: "#",
    text: "Sequoia",
    image:
      "https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format",
  },
];

function FlowingMenuPage() {
  return (
    <DemoLayout>
      <FlowingMenu
        items={demoItems}
        speed={15}
        textColor="#ffffff"
        bgColor="#000"
        marqueeBgColor="#ffffff"
        marqueeTextColor="#000"
        borderColor="#ffffff"
      />
    </DemoLayout>
  );
}

export default FlowingMenuPage;
