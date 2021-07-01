import InspirationBottomOneRep from "../../../../shareable/InsprationBottomOneRep";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";

const InspirationBottomOne = () => {
    const { inspirations } = useSelector(state => state.navbar);
    const [homepageSecondI, setHomepageSecondI] = useState({});
    
    useEffect(() => {
        setHomepageSecondI(inspirations.find(elem => elem.position === 'HomePageTwo'));
    }, [inspirations]);

    return(
        <>
            <InspirationBottomOneRep inspiration={homepageSecondI} />
        </>
    )
}

export default InspirationBottomOne