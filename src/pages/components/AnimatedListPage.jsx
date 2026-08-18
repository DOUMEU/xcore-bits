import DemoLayout from "../../components/DemoLayout";
import AnimatedList from "../../components/components/AnimatedList";

const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
];
function AnimatedListPage() {
  return (
    <DemoLayout>
      <AnimatedList
        items={items}
        onItemSelect={(item, index) => console.log(item, index)}
        showGradients
        enableArrowNavigation
        displayScrollbar
      />
    </DemoLayout>
  );
}

export default AnimatedListPage;
