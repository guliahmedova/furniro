import { useState } from "react"
import OtpConfirmation from "./OtpConfirmation"
import SentOtpEmail from "./SentOtpEmail";
import ForgotPassword from "./ForgotPassword";

const ForgotPasswordPage = () => {
    const [stepIndex, setStepIndex] = useState(1);

    switch (stepIndex) {
        case 1:
            return <SentOtpEmail setStepIndex={setStepIndex} />
        case 2:
            return <OtpConfirmation setStepIndex={setStepIndex} />
        case 3:
            return <ForgotPassword />
        default:
            break;
    }
}

export default ForgotPasswordPage;