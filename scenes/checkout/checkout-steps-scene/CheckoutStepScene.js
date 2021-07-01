import {useState,useEffect} from "react"
import { Steps,Popover } from 'antd';
import CustomStep from "./components/steps/CustomStep";
const { Step } = Steps;
import {useRouter} from "next/router";
import StepOne from "./components/step-one/StepOne";
import StepTwo from "./components/step-two/StepTwo";
import StepThree from "./components/step-three/StepThree";
import StepFour from "./components/step-four/StepFour";

const CheckoutStepScene = () =>{
    const router = useRouter()

    const [stepNum,setStepnum] = useState(1)
    const [current,setCurrent] = useState(0)
    const next = () => {
        if(current < steps.length-1){
            setCurrent(current + 1);
        }
        if(stepNum < steps.length){
            setStepnum(stepNum + 1)
        }
        router.push({
                    pathname: `/checkout/step${stepNum}`,
                })
        console.log(current,stepNum)
    };
    const prev = () => {
        if( current > 0){
            setCurrent(current - 1);
        }
        if(stepNum > 1){
            setStepnum(stepNum - 1)
        }
        console.log(current,stepNum)
    };
    const [steps,setSteps] = useState([
        {id:0,step:true,name:"Bestellübersicht"},
        {id:1,step:false,name:"Lieferung"},
        {id:2,step:false,name:"Bezahlung"},
        {id:3,step:false,name:"Bestätigung"},
    ])


    useEffect(()=>{
        router.push({
            pathname: `/checkout/step${stepNum}`,
        })
    },[stepNum,current])

    const customDot = (dot, { status, index }) => (
        <Popover
            content={
                <span>
                     step {index} status: {status}
                </span>
            }
        >
            <CustomStep index={index+1}/>
        </Popover>
    );

    return(
        <div className={"checkout__step__scene__body"}>
            <div className={"checkout__step__scene__body__header"}>
                <Steps current={current}   responsive={false} labelPlacement={"vertical"} >
                    {steps.map((e,i)=>{
                        return(
                            <Step  title={e.name} num={e.id} key={i} status={ current === stepNum - 1 ? "wait" : "current"}/>
                        )
                    })}
                </Steps>
                <div className={"checkout__step__scene__body__scenes"}>
                    {router.query.id === "step1" && <StepOne next={next}/> }
                    {router.query.id === "step2" && <StepTwo next={next}/> }
                    {router.query.id === "step3" && <StepThree next={next}/> }
                    {router.query.id === "step4" && <StepFour next={next}/> }
                </div>
            </div>
        </div>
    )
}

export default CheckoutStepScene