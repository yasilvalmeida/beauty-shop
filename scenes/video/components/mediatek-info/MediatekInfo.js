const MediatekInfo = ({info, setInfo, checked, filter}) => {
    return (
        <section className='mediatek__container'>
            {[...new Set([...info])].map((e, i) => {
                return (
                    <div className='mediatek__container__option' key={i}
                         style={filter.type === e && filter.checked ? {
                             background: "white",
                             border: "1px solid black"
                         } : null}
                         onClick={() => {
                             if (filter.type === e) {
                                 setInfo(prev => ({
                                     ...prev,
                                     type: e,
                                     checked: !checked
                                 }))
                             } else {
                                 setInfo(prev => ({
                                     ...prev,
                                     type: e,
                                     checked: true
                                 }))
                             }
                         }}
                    >
                        <span className='mediatek__container__option--text'
                              style={filter.type === e && filter.checked ?
                                  {color: "black"} : null}
                        >{e}</span>
                    </div>
                )
            })}
        </section>
    );
};

export default MediatekInfo;
