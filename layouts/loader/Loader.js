const Loader = () =>{
    return(
        <>
            <div className={"loader-body"}>
                <div className={"loader-top d-flex"}>
                    <div ></div>
                    <div ></div>
                    <div ></div>
                    <div ></div>
                </div>
                <div className={" loader-middle d-flex"}>
                    <div ></div>
                    <div ></div>
                    <div ></div>
                </div>
                <div className={"d-flex loader-bottom"}>
                    <div ></div>
                    <div ></div>
                </div>
            </div>
        </>
    )
}

export default Loader