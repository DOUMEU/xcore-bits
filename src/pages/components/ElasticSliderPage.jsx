import { RiVolumeDownFill, RiVolumeUpFill } from "react-icons/ri";
import DemoLayout from "../../components/DemoLayout";
import ElasticSlider from "../../components/components/ElasticSlider";

function ElasticSliderPage() {
  return (
    <DemoLayout>
      <ElasticSlider
        leftIcon={<RiVolumeDownFill />}
        rightIcon={<RiVolumeUpFill />}
        startingValue={0}
        defaultValue={50}
        maxValue={100}
        isStepped={false}
        stepSize={10}
      />
    </DemoLayout>
  );
}

export default ElasticSliderPage;
