import { useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import Stepper, { Step } from "../../components/components/Stepper";
import "./StepperPage.css";

function StepperPage() {
  // 3단계 입력값. 값이 없으면 다음 단계로 못 넘어가게 막습니다(원본과 동일).
  const [name, setName] = useState("");
  const [step, setStep] = useState(1);

  return (
    <DemoLayout>
      <Stepper
        initialStep={1}
        onStepChange={setStep}
        onFinalStepCompleted={() => console.log("All steps completed!")}
        nextButtonProps={{ disabled: step === 3 && !name }}
        disableStepIndicators={step === 3 && !name}
        backButtonText="Previous"
        nextButtonText="Next"
      >
        <Step>
          <h2 className="stepper-demo__title">
            Welcome to the React Bits stepper!
          </h2>
          <p>Check out the next step!</p>
        </Step>

        <Step>
          <h2>Step 2</h2>
          <img
            className="stepper-demo__image"
            src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894"
            alt="Funny cat cards"
          />
          <p className="stepper-demo__caption">Custom step content!</p>
        </Step>

        <Step>
          <h2>How about an input?</h2>
          <input
            className="stepper-demo__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name?"
          />
        </Step>

        <Step>
          <h2 className="stepper-demo__title">Final Step</h2>
          <p>You made it{name ? `, ${name}` : ""}!</p>
        </Step>
      </Stepper>
    </DemoLayout>
  );
}

export default StepperPage;
