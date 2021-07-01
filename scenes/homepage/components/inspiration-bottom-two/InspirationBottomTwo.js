import InspirationBottomTwoRep from "../../../../shareable/InspirationBottomTwoRep";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";

const InspirationBottomTwo = () => {
    const { inspirations } = useSelector(state => state.navbar);
    const [homepageThirdI, setHomepageThirdI] = useState({});
    
    useEffect(() => {
        setHomepageThirdI(inspirations.find(elem => elem.position === 'HomePageThre'));
    }, [inspirations]);

    return(
        <>
           <InspirationBottomTwoRep inspiration={homepageThirdI} />
        </>
    )
}

export default InspirationBottomTwo