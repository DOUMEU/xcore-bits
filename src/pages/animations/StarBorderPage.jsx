import DemoLayout from "../../components/DemoLayout";
import StarBorder from "../../components/animations/StarBorder";

function StarBorderPage() {
  return (
    <DemoLayout>
      <StarBorder as="button" color="cyan" speed="4s">
        Star Border
      </StarBorder>
    </DemoLayout>
  );
}

export default StarBorderPage;
