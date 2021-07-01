
const ComponentInfo = ({info,color,textstyle}) => {
  return (
    <div className='componentInfo__container'>
      <span className='componentInfo__container--text' style={{color:color,textTransform:textstyle}}>{info}</span>
    </div>
  )
}

export default ComponentInfo
