import Neuigkeiten from "../../../shareable/Neuigkeiten";
import { useSelector } from 'react-redux';

const SecondFilteredProdBottom = () => {
    const news = useSelector(({ news }) => news);

    const neuigkeiten = news.newsReports.find(n => n.position === 'HerrenPageOne');
    const neuigkeitenSecond = news.newsReports.find(n => n.position === 'HerrenPageTwo');

    const background = "black"
    const color = "white"
    const paddingTop = "165px"
    const paddingBottom = "130px"
    const btntext = "mehr news"
    const width="16%"
    const padd = "20px 0"

    return (
        <>
            <Neuigkeiten 
                background={background} 
                color={color} 
                paddingTop={paddingTop} 
                paddingBottom={paddingBottom} 
                btntext={btntext} 
                width={width} 
                padd={padd}
                neuigkeiten={neuigkeiten} 
                neuigkeitenSecond={neuigkeitenSecond} 
            />
        </>
    )
}
export default SecondFilteredProdBottom