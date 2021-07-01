import { Radio, Input } from 'antd';
import {useState} from "react"
const StepTwo = (props) =>{
    console.log(props)
    const {next} = props
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value)
    };
    const [value,setValue] = useState()
    const radio = [
        {name:"DHL",value:1},
        {name:"DHL Express (+ € 4,90)",value:2},
        {name:"Hermes",value:3},
        {name:"Deutsche Post",value:4},
        {name:"UPS (+ € 2,90)",value:5}
    ]
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
        color:"black"
    };
    return(
        <div className={"checkout__steptwo__container"}>
            <div className={"checkout__steptwo__container__address"}>
                <div className={"checkout__steptwo__container__address__item"}>
                    <p className={"checkout__steptwo__container__address__item--title"}>
                        Lieferadresse
                    </p>
                    <div className={"checkout__steptwo__container__address__item__body"}>
                        <div className={"checkout__steptwo__container__address__item__body__top"}>
                            <p className={"first__child"}>
                                Max Muster
                            </p>
                            <p>
                                Muster Firma AG
                            </p>
                        </div>
                        <div className={"checkout__steptwo__container__address__item__body__mid"}>
                            <p>
                                Musterstrasse 123
                            </p>
                            <p>
                                Musterstadt 12345
                            </p>
                            <p>
                                Musterland
                            </p>
                        </div>
                        <a href="#" className={"checkout__steptwo__container__address__item__body--link"}>Ändern</a>
                    </div>
                </div>
                <div className={"checkout__steptwo__container__address__item"}>
                    <p className={"checkout__steptwo__container__address__item--title"}>
                        Rechnungsadresse
                    </p>
                    <div className={"checkout__steptwo__container__address__item__body"}>
                        <div className={"checkout__steptwo__container__address__item__body__top"}>
                            <p className={"first__child"}>
                                Max Muster
                            </p>
                            <p>
                                Muster Firma AG
                            </p>
                        </div>
                        <div className={"checkout__steptwo__container__address__item__body__mid"}>
                            <p>
                                Musterstrasse 123
                            </p>
                            <p>
                                Musterstadt 12345
                            </p>
                            <p>
                                Musterland
                            </p>
                        </div>
                        <a href="#" className={"checkout__steptwo__container__address__item__body--link"}>Ändern</a>
                    </div>
                </div>
            </div>
            <div className={"checkout__steptwo__container__delivery"}>
                <p className={"checkout__steptwo__container__delivery--title"}>Zahlungsinformation </p>
                <div>
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
            </div>
            <button className={"checkout__steptwo__container__btn"} onClick={next} >Weiter zur Zahlung</button>
        </div>
    )
}

export default StepTwo