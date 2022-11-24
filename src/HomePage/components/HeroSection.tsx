import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useQuery } from "graphql-hooks";
import { Image } from "react-datocms";
import ContactSection from "./ContactSection";

const styles = {
    heroContainer: css({
        width: '100%',
        maxWidth: '60rem',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        '@media (max-width: 600px)': {
            margin: '25px 0',
        }
    }),
    imageContainer: css({
        gridColumn: '1/4',
        gridRow: '1/4',
    }),
}

const HERO_COMPONENT_QUERY = `query HeroComponent{
    homePage {
        heroimages {
          responsiveImage {
            alt
            aspectRatio
            base64
            bgColor
            height
            sizes
            src
            srcSet
            title
            webpSrcSet
            width
          }
        }
        homeText
    }
}

`

interface HeroComponentProps {
    showData: boolean,
    onClick: () => void,
}
const HeroComponent = ({showData, onClick}: HeroComponentProps):JSX.Element => {
    const [indexToUse, setIndexToUse] = useState(0)
    const {loading, error, data} = useQuery(HERO_COMPONENT_QUERY);
    const {homePage} = data ?? {};
    const { heroimages, homeText } = homePage ?? {}

    useEffect(() => {
        setInterval(() => {
            const index = Math.floor(Math.random() * heroimages.length );
            setIndexToUse(index);
        }, 5000);
        
    },[ setIndexToUse, heroimages]);
    
    return (

        <div css={styles.heroContainer}>
            {showData && (
               <ContactSection
                    homeText={homeText}
                    onClick={onClick}
                    showData={showData}
               />
            )}
            {!loading && heroimages.length && (
                <div css={styles.imageContainer}>
                    <Image data={heroimages[indexToUse]?.responsiveImage}/>
                </div>
            )}
        </div>
    )
}


export default HeroComponent;