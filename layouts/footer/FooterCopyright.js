import moment from "moment"
const FooterCopyright = () =>{
    return(
        <div className={"footer__copyright"}>
            <p>© Copyright {moment(new Date()).format("YYYY")} Das Parfum and Beauty Distribution 1912 GmbH • Impressum und rechtliche Hinweise</p>
        </div>
    )
}

export default FooterCopyright