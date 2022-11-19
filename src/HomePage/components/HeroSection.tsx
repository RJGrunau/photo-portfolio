import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Image } from "react-datocms";
import { ResponsiveImage } from "../../Common/interfaces";

const styles = {
    heroContainer: css({
        width: '100%',
        maxWidth: '60rem',
        margin: '0 auto',
        padding: '1rem'
    })
}
interface HeroComponentProps {
    images: ResponsiveImage[],
}
const HeroComponent = ({images}: HeroComponentProps):JSX.Element => {
    const [indexToUse, setIndexToUse] = useState(0);


    useEffect(() => {
        const index = Math.floor(Math.random() * images?.length);
        setIndexToUse(index);
    },[indexToUse, setIndexToUse]);

    return (
        <div css={styles.heroContainer}>
            {!images.length && (
                <div>
                    WTF
                </div>
            )}
            {images && (
                <Image data={images[indexToUse].responsiveImage} />
            )}
        </div>
    )
}

export default HeroComponent;