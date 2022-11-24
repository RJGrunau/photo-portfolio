import { css } from "@emotion/react";
import { Image } from "react-datocms";
import { Frame } from "../../Common/interfaces";
import { Link } from "react-router-dom";

const styles = {
    heroContainer: css({
        width: '100%',
        maxWidth: '85rem',
        padding: '3rem',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        color: 'white',
    }),
    imageContainer: css({
        gridColumn: '1/4',
        gridRow: '1/4',
    }),
    linkStyles: css({
        display: 'block',
        textDecoration: 'none',
        color: 'black'
    }),
    navStyles: css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        backgroundColor: 'black',
        opacity: 0,
        color: 'white',
        fontSize: '2rem',
        '&:hover' : {
            opacity: '0.75',
        } 
    }),
    projectsLink: css({
        gridColumn: '1/3',
        gridRow: '1/3',
    }), 
    newLetterLink: css({
        gridColumn: '3/4',
        gridRow: '1/3',
    }),
    aboutLink: css({
        gridColumn: '1/4',
        gridRow: '3/4',
    })
}
interface HeroComponentProps {
    image: Frame
}
const HeroComponent = ({image}: HeroComponentProps):JSX.Element => (
    <div css={styles.heroContainer}>
        <Link to="/projects" css={[styles.navStyles, styles.projectsLink]}>
            Projects
        </Link>
        <Link to="/newsletter" css={[styles.navStyles, styles.newLetterLink]}>
            Newsletter
        </Link>
        <Link to="about" css={[styles.navStyles, styles.aboutLink]}>
            About
        </Link>
        <div css={styles.imageContainer}>
            <Image data={image.responsiveImage}/>
        </div>
    </div>
)

export default HeroComponent;