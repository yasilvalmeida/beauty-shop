import { Radio, Input } from 'antd';
import {useState} from "react";
const StepThree = ({next}) => {
    const radio = [
        {name:"Cart",value:1},
        {name:"Auf Rechnung ",value:2},
        {name:"Amazon Pay",value:3},
        {name:"Direkt Zu Paypal",value:4},
        {name:"Neue Zahlunsart",value:5}
    ]

    const [value,setValue] = useState()

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value)
    };

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
        color:"black"
    };
    return(
        <div className={"checkout__stepthree__container"}>
            <div className={"checkout__stepthree__container__title"}>
                <p>Zahlungsinformation </p>
                <p>Secure</p>
            </div>
            <div className={"checkout__stepthree__container__radios"}>
                <Radio.Group onChange={onChange} value={value}>
                    {radio.map((e,i)=>{
                        return(
                            <Radio style={radioStyle} value={e.value} key={i}>
                                <span className={"radio__text"}>{e.name}</span>
                            </Radio>
                        )
                    })}
                </Radio.Group>
            </div>
            <button className={"checkout__stepthree__container__btn"} onClick={next}>
                <svg xmlns="http://www.w3.org/2000/svg" width="153" height="201" viewBox="0 0 153 201">
                    <g id="lock_1" transform="translate(2894 -6462)">
                        <path id="Subtraction_3" data-name="Subtraction 3" d="M129,122H24A24,24,0,0,1,0,98V24A24,24,0,0,1,24,0H129a24,24,0,0,1,24,24V98a24,24,0,0,1-24,24ZM77,27a18,18,0,0,0-9.818,33.089A10.075,10.075,0,0,0,67,62V83a10,10,0,1,0,20,0V62a10.076,10.076,0,0,0-.183-1.911A18,18,0,0,0,77,27Z" transform="translate(-2894 6541)" fill="#fff"/>
                        <path id="Subtraction_2" data-name="Subtraction 2" d="M33.025,66H11.016C11,65.483,11,64.979,11,64.5a67.271,67.271,0,0,1,4.794-25.106,64.582,64.582,0,0,1,13.072-20.5A60.709,60.709,0,0,1,48.256,5.069a58.146,58.146,0,0,1,47.488,0,60.709,60.709,0,0,1,19.39,13.823,64.6,64.6,0,0,1,13.073,20.5A67.288,67.288,0,0,1,133,64.5c0,.495-.005,1-.016,1.5h-21.01c.017-.489.025-.993.025-1.5C112,41.617,94.28,23,72.5,23S33,41.617,33,64.5c0,.5.009,1,.025,1.5Z" transform="translate(-2889 6462)" fill="#fff"/>
                    </g>
                </svg>
                Jetzt bezahlen
            </button>
        </div>
    )
}

export default StepThree