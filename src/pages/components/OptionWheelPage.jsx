import DemoLayout from "../../components/DemoLayout";
import OptionWheel from "../../components/components/OptionWheel";

function OptionWheelPage() {
  return (
    <DemoLayout>
      <OptionWheel
        items={[
          "Ambient",
          "House",
          "Techno",
          "Jazz",
          "Lo-Fi",
          "Synth wave",
          "Option Wheel",
        ]}
        defaultSelected={2}
        textColor="#a6a6a6"
        activeColor="#ffffff"
        side="left"
        fontSize={3}
        spacing={1.4}
        curve={1}
        tilt={6}
        blur={2}
        fade={0.25}
        smoothing={200}
        inset={80}
        loop={false}
        draggable
        soundUrl="/assets/sounds/click-soft.mp3"
        soundVolume={0.5}
        onChange={(index, item) => console.log(index, item)}
      />
    </DemoLayout>
  );
}

export default OptionWheelPage;
