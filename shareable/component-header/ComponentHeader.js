import ComponentInfo from "./component-info/ComponentInfo"
import ComponentTitle from "./component-title/ComponentTitle"

const ComponentHeader = ({info,title,color,color2,textstyle}) => {
    return (
        <div className="component__header">
            <ComponentInfo info={info} color={color} color2={color2} textstyle={textstyle}/>
            <ComponentTitle title={title} color={color} color2={color2} textstyle={textstyle}/>
        </div>
    )
}

export default ComponentHeader
