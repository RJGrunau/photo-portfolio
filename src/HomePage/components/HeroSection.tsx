import { css } from "@emotion/react";
import { Image } from "react-datocms";
import { Frame } from "../../Common/interfaces";

const styles = {
    heroContainer: css({
        width: '100%',
        maxWidth: '80rem',
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
interface HeroComponentProps {
    image: Frame
}
const HeroComponent = ({image}: HeroComponentProps):JSX.Element => (
    <div css={styles.heroContainer}>
        <div css={styles.imageContainer}>
            <Image data={image.responsiveImage}/>
        </div>
    </div>
)

export default HeroComponent;