import BestellungenSingle from "../../scenes/konto/components/bestellungen/components/single/BestellungenSingle";

const KontoTable = ({titles,year,data,single,setSingle,show,setShow}) =>{

    const handleShow = e =>{
        setSingle({e})
        setShow(true)
    }
    return(
        <>
            {
                !show ? <table className={"bestellungen__container__table"}>
                    <thead className={"bestellungen__container__table--header"}>
                    <tr>
                        {
                            titles.map((e,i)=>{
                                return(
                                    <th key={i}>{e}</th>
                                )
                            })
                        }
                    </tr>
                    </thead>
                    <tbody className={"bestellungen__container__table__body"}>
                    <tr className={"bestellungen__container__table__body--year"}>
                        <th>
                            {year}
                        </th>
                    </tr>
                    {data.map((e,i)=>{
                        return(
                            <tr key={i} className={"bestellungen__container__table__body__elems"}>
                                <td>
                                    {e.date}
                                </td>
                                <td>
                                    {e.code}
                                </td>
                                <td>
                                    {e.status}
                                </td>
                                <td>
                                    {e.price}
                                </td>
                                <td>
                                    <p onClick={()=>handleShow(e)}>
                                        <a href="#">Details ansehen</a>
                                    </p>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>:<BestellungenSingle elem={single} setShow={setShow}/>
            }
        </>
    )
}

export default KontoTable