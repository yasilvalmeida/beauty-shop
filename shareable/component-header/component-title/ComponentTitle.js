
const ComponentTitle = ({title,color,textstyle}) => {
  return (
    <div className='componentTitle__container'>
      <p className='componentTitle__container--text' style={{color:color,textTransform:textstyle}}>{title}</p>
    </div>
  )
}

export default ComponentTitle
